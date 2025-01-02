import { Router, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = Router();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
}

interface TMDBSearchResponse {
  results: Movie[];
}

interface Provider {
  provider_name: string;
  logo_path: string;
}

interface WatchProvidersResponse {
  results?: {
    US?: {
      flatrate?: Provider[];
    };
  };
}

router.get('/search', async (req: Request, res: Response) => {
  try {
    const query = req.query.query as string;
    if (!query) {
      res.status(400).json({ error: 'No query provided' });
      return;
    }

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
      query
    )}`;

    // Type the Axios response
    const { data: searchData } = await axios.get<TMDBSearchResponse>(searchUrl);

    const detailedResults = await Promise.all(
      searchData.results.slice(0, 10).map(async (movie: Movie) => {
        const providersUrl = `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${TMDB_API_KEY}`;

        let providersData: Provider[] = [];
        try {
          const { data } = await axios.get<WatchProvidersResponse>(providersUrl);
          providersData = data.results?.US?.flatrate || [];
        } catch {
          providersData = [];
        }

        return {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          streamingProviders: providersData.map((p) => ({
            provider_name: p.provider_name,
            logo_path: p.logo_path,
          })),
        };
      })
    );

    res.json({ results: detailedResults });
  } catch (error) {
    console.error('Error fetching data from TMDB:', error);
    res.status(500).json({ error: 'Failed to fetch data from TMDB' });
  }
});

export default router;