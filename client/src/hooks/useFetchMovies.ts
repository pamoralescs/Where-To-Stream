import { useState } from "react";
import { fetchMovies } from "../services/api";

export const useFetchMovies = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isWakingUp, setIsWakingUp] = useState(false);

  const searchMovies = async (query: string) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setResults([]); // Clear results for empty input
      setErrorMessage(null);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setIsWakingUp(false);
    setResults([]); // Clear previous results when starting a new search

    const timer = setTimeout(() => setIsWakingUp(true), 3000);

    try {
      const data = await fetchMovies(trimmedQuery);
      clearTimeout(timer);
      setResults(data.results);
    } catch (error) {
      clearTimeout(timer);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      setIsWakingUp(false);
    }
  };

  return { results, isLoading, isWakingUp, errorMessage, searchMovies };
};
