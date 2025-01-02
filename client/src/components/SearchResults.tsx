import React from "react";

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

interface SearchResultsProps {
  results: MovieResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="[grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))] gap-6 grid">
      {results.map((movie) => (
        <div
          key={movie.id}
          className="bg-white text-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={movie.title}
            className="w-full h-auto rounded mb-3"
          />
          <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            Release: {movie.release_date || "N/A"}
          </p>
          <p className="font-medium mb-1">Streaming On:</p>
          <ul className="space-y-1 text-sm">
            {movie.streamingProviders.length > 0 ? (
              movie.streamingProviders.map((provider) => (
                <li
                  key={provider.provider_name}
                  className="flex items-center gap-2"
                >
                  {provider.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                      alt={provider.provider_name}
                      className="w-5 h-5"
                    />
                  )}
                  <span>{provider.provider_name}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-500">Not available for streaming</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;