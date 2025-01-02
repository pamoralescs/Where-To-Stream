import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

interface StreamingProvider {
  provider_name: string;
  logo_path: string;
}

interface MovieResult {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  streamingProviders: StreamingProvider[];
}

const App: React.FC = () => {
  const [results, setResults] = useState<MovieResult[]>([]);

  // Your TMDB API key from .env or another source
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const handleSearch = async (query: string) => {
    try {
      // 1) Search for the movie
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        query
      )}`;
      const { data: searchData } = await axios.get(searchUrl);

      console.log("Raw search data for query:", query, searchData);

      // 2) For each search result, fetch watch-provider data
      const detailedResults: MovieResult[] = await Promise.all(
        searchData.results.map(async (item: any) => {
          const providersUrl = `https://api.themoviedb.org/3/movie/${item.id}/watch/providers?api_key=${apiKey}`;

          let providersData;
          try {
            // Attempt to fetch watch-provider data
            const { data } = await axios.get(providersUrl);
            providersData = data;
            console.log("Providers data for movie:", item.title, providersData);
          } catch (error) {
            // If there's a 404 or any error, we log a warning and proceed without providers
            console.warn(`Watch-provider error for movie ID ${item.id}:`, error);
            providersData = null;
          }

          // Check region data (e.g. "US") if providersData is valid
          const regionData = providersData?.results?.US || {};
          const flatrate = regionData.flatrate || [];

          return {
            id: item.id,
            title: item.title,
            poster_path: item.poster_path,
            release_date: item.release_date,
            streamingProviders: flatrate.map((p: any) => ({
              provider_name: p.provider_name,
              logo_path: p.logo_path,
            })),
          };
        })
      );

      setResults(detailedResults);
    } catch (error) {
      // Any errors from the search request itself
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold">Movie Streaming Availability</h1>
          <SearchBar onSearch={handleSearch} />
        </header>

        <SearchResults results={results} />

        <footer className="mt-8 py-4 text-center text-sm text-gray-500">
          © 2025 Peter Morales. Powered by React + TMDB.
        </footer>
      </div>
    </div>
  );
};

export default App;