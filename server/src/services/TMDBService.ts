import axios from 'axios';
import { config } from '../config/env.js';
import {
  Movie,
  Provider,
  WatchProvidersResponse,
  ReleaseDatesResponse,
} from '../types/TMDBServerTypes';

const TMDB_API_KEY = config.tmdbApiKey;
const BASE_URL = 'https://api.themoviedb.org/3';

class TMDBService {
  static async fetchMoviesWithProviders(
    query: string,
    limit: number = 10,
  ): Promise<Movie[]> {
    const searchUrl = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`;

    const { data } = await axios.get<{ results: Movie[] }>(searchUrl);

    const detailedResults = await Promise.all(
      data.results.slice(0, limit).map(async (movie) => {
        const providersUrl = `${BASE_URL}/movie/${movie.id}/watch/providers?api_key=${TMDB_API_KEY}`;
        const detailsUrl = `${BASE_URL}/movie/${movie.id}?api_key=${TMDB_API_KEY}`;
        const releaseDatesUrl = `${BASE_URL}/movie/${movie.id}/release_dates?api_key=${TMDB_API_KEY}`;

        let streamingProviders: Provider[] = [];
        let certification = 'N/A';
        let runtime: number | string = 'N/A';

        // Fetch streaming providers
        try {
          const { data } =
            await axios.get<WatchProvidersResponse>(providersUrl);
          streamingProviders = data.results?.US?.flatrate || [];
        } catch {
          console.warn(`No streaming providers found for movie ${movie.title}`);
        }

        // Fetch runtime
        try {
          const { data } = await axios.get<Movie>(detailsUrl);
          runtime = typeof data.runtime === 'number' ? data.runtime : 'N/A';
        } catch {
          console.warn(`Unable to fetch runtime for ${movie.title}`);
        }

        // Fetch certification
        try {
          const { data } =
            await axios.get<ReleaseDatesResponse>(releaseDatesUrl);
          const releaseInfo =
            data.results.find((r) => r.iso_3166_1 === 'US') || data.results[0];
          certification =
            releaseInfo?.release_dates.find((d) => d.certification)
              ?.certification || 'N/A';
        } catch {
          console.warn(`Unable to fetch certification for ${movie.title}`);
        }

        return {
          ...movie,
          streaming_providers: streamingProviders,
          certification,
          runtime,
        };
      }),
    );

    return detailedResults;
  }
}

export default TMDBService;
