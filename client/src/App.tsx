import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

console.log("App component loaded");
const App: React.FC = () => {
  console.log("App component rendering"); // Debug log

  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    console.log("Search initiated with query:", query); // Debug log

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { data } = await axios.get("http://localhost:3000/api/search", {
        params: { query },
      });

      console.log("Search results received:", data.results); // Debug log
      setResults(data.results);
    } catch (error) {
      console.error("Error during search:", error); // Debug log
      setErrorMessage("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold">Movie Streaming Availability</h1>
          <SearchBar onSearch={handleSearch} />
        </header>

        {isLoading && (
          <div className="flex justify-center items-center mt-4">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
            <p className="ml-4 text-gray-400">Fetching results...</p>
          </div>
        )}

        {errorMessage && (
          <p className="mt-4 text-center text-red-500 font-semibold">{errorMessage}</p>
        )}

        <SearchResults results={results} />

        <footer className="mt-8 py-4 text-center text-sm text-gray-500">
          Created by Peter Morales 2025. Powered by React + TMDB.
        </footer>
      </div>
    </div>
  );
};

export default App;
