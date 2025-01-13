import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';
import { useFetchMovies } from '../hooks/useFetchMovies';

const HomePage: React.FC = () => {
  const { results, isLoading, isWakingUp, errorMessage, searchMovies } =
    useFetchMovies();
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setHasSearched(true);
    searchMovies(query);
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

        {hasSearched && results.length > 0 && (
          <div className="text-center mt-4 mb-4">
            {results.length === 1 ? (
              <p className="text-gray-400 text-sm">
                Showing 1 result. <br />
                Try refining your search if this isn't the movie you're looking
                for.
              </p>
            ) : results.length < 10 ? (
              <p className="text-gray-400 text-sm">
                Showing {results.length} result{results.length > 1 ? 's' : ''}.{' '}
                <br />
                Try refining your search for more specific matches.
              </p>
            ) : (
              <p className="text-gray-400 text-sm">
                Showing top 10 most popular results. <br />
                Try refining your search for more specific matches.
              </p>
            )}
          </div>
        )}

        {isWakingUp && (
          <div className="text-center mt-4">
            <p className="text-yellow-400">
              The server is waking up. Please wait...
            </p>
          </div>
        )}

        {isLoading && !isWakingUp && (
          <div className="text-center mt-4">
            <p className="text-gray-400">Fetching results...</p>
          </div>
        )}

        {!isLoading && errorMessage && (
          <div className="text-center mt-4">
            <p className="text-red-500">{errorMessage}</p>
          </div>
        )}

        {!isLoading && !errorMessage && hasSearched && results.length === 0 && (
          <div className="text-center mt-4">
            <p className="text-gray-400">No results found.</p>
          </div>
        )}

        {!isLoading && !errorMessage && results.length > 0 && (
          <SearchResults results={results} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
