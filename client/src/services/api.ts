import axios, { AxiosResponse } from 'axios';
import { MovieResult } from '../types/TMDBClientTypes';

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

export const fetchMovies = async (query: string): Promise<MovieResult[]> => {
  const { data }: AxiosResponse<{ results: MovieResult[] }> = await axios.get(
    `${API_BASE_URL}/api/search`,
    { params: { query } }
  );

  return data.results.map((movie) => ({
    ...movie,
    runtime: movie.runtime || 'N/A',
  }));
};
