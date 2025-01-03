import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";
import { fetchMovies } from "../services/api";

const HomePage: React.FC = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isWakingUp, setIsWakingUp] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    setIsWakingUp(false);

    // Start a timer to detect backend delays
    const timer = setTimeout(() => {
      setIsWakingUp(true); // Display "Server is waking up" message after 3 seconds
    }, 3000);

    try {
      const data = await fetchMovies(query);

      // Clear the timer if the server responds within 3 seconds
      clearTimeout(timer);
      setResults(data.results);
    } catch (error) {
      clearTimeout(timer);
      setErrorMessage("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
      setIsWakingUp(false); // Ensure the "Server is waking up" message is cleared
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">Movie Streaming Availability</h1>
        <p className="text-gray-400 mt-2">
          Discover where your favorite movies are streaming!
        </p>
      </header>

      <main className="flex-grow">
        <SearchBar onSearch={handleSearch} />
        {isWakingUp && (
          <div className="text-center mt-4">
            <p className="text-yellow-400">The server is waking up. Please wait...</p>
          </div>
        )}
        {isLoading && !isWakingUp && (
          <div className="text-center mt-4">
            <p className="text-gray-400">Fetching results...</p>
          </div>
        )}
        {errorMessage && (
          <p className="text-center text-red-500 mt-4">{errorMessage}</p>
        )}
        <SearchResults results={results} />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;