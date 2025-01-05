import React from "react";
import { StreamingProvider } from "../types/TMDBClientTypes";

interface MovieCardProps {
  title: string;
  posterPath?: string;
  releaseDate?: string;
  streamingProviders: StreamingProvider[];
  rating: string;
  certification: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  releaseDate,
  streamingProviders,
  rating,
  certification,
}) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/";

  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="font-medium mb-1">TMDB Rating: {rating}</span>
        <span className="font-medium mb-1">{certification}</span>
      </div>

      {posterPath ? (
        <img
          src={`${baseImageUrl}w342${posterPath}`}
          alt={title}
          className="w-full h-auto rounded mb-3"
        />
      ) : (
        <img
          src="https://via.placeholder.com/200x300?text=No+Image"
          alt="No poster available"
          className="w-full h-auto rounded mb-3"
        />
      )}

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        Release: {releaseDate || "N/A"}
      </p>
      <p className="font-medium mb-1">Streaming On:</p>
      <ul className="space-y-1 text-sm">
        {streamingProviders.length > 0 ? (
          streamingProviders.map((provider) => (
            <li
              key={provider.provider_name}
              className="flex items-center gap-2"
            >
              {provider.logo_path && (
                <img
                  src={`${baseImageUrl}w45${provider.logo_path}`}
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
  );
};

export default MovieCard;
