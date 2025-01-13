import { useState } from 'react';
import { fetchMovies } from '../services/api';
import { MovieResult } from '../types/TMDBClientTypes';

export const useFetchMovies = () => {
  const [results, setResults] = useState<MovieResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isWakingUp, setIsWakingUp] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const searchMovies = async (query: string) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setResults([]);
      setErrorMessage(null);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setIsWakingUp(false);
    setResults([]);
    setHasSearched(true);

    const timer = setTimeout(() => setIsWakingUp(true), 3000);

    try {
      const data = await fetchMovies(trimmedQuery);
      clearTimeout(timer);
      setResults(
        data.map((movie) => ({
          ...movie,
          runtime: movie.runtime || 'N/A',
        }))
      );
    } catch {
      clearTimeout(timer);
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
      setIsWakingUp(false);
    }
  };

  return {
    results,
    isLoading,
    isWakingUp,
    errorMessage,
    searchMovies,
    hasSearched,
  };
};
