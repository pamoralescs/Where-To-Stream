import axios from "axios";
import { config } from "../config/env";
import {
  Movie,
  TMDBSearchResponse,
  Provider,
  WatchProvidersResponse,
} from "../types/TMDBServerTypes";

const TMDB_API_KEY = config.tmdbApiKey;
const BASE_URL = "https://api.themoviedb.org/3";

class TMDBService {
  static async fetchMoviesWithProviders(query: string) {
    const searchUrl = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
      query
    )}`;

    const { data: searchData } = await axios.get<TMDBSearchResponse>(searchUrl);

    const detailedResults = await Promise.all(
      searchData.results.slice(0, 10).map(async (movie: Movie) => {
        const providersUrl = `${BASE_URL}/movie/${movie.id}/watch/providers?api_key=${TMDB_API_KEY}`;

        let providersData: Provider[] = [];
        try {
          const { data } = await axios.get<WatchProvidersResponse>(
            providersUrl
          );
          providersData = data.results?.US?.flatrate || [];
        } catch (error) {
          console.error(
            `Error fetching providers for movie ${movie.id}:`,
            error
          );
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

    return detailedResults;
  }
}

export default TMDBService;
