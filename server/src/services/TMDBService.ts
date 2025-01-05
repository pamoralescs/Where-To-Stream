import axios from "axios";
import { config } from "../config/env";
import {
  Movie,
  TMDBSearchResponse,
  Provider,
  WatchProvidersResponse,
  ReleaseDatesResponse,
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
        const detailsUrl = `${BASE_URL}/movie/${movie.id}/release_dates?api_key=${TMDB_API_KEY}`;

        let providersData: Provider[] = [];
        let certification = "N/A";

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

        try {
          const { data } = await axios.get<ReleaseDatesResponse>(detailsUrl); // Use proper type
          const releaseInfo = data.results.find((r) => r.iso_3166_1 === "US");
          certification = releaseInfo?.release_dates[0]?.certification || "N/A";
        } catch (error) {
          console.error(
            `Error fetching certification for movie ${movie.id}:`,
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
          rating: movie.vote_average
            ? `${movie.vote_average.toFixed(1)}/10`
            : "N/A",
          certification,
        };
      })
    );

    return detailedResults;
  }
}

export default TMDBService;
