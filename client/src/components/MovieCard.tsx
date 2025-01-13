import React from 'react';
import { MovieResult } from '../types/TMDBClientTypes';

const MovieCard: React.FC<MovieResult> = ({
  title,
  poster_path,
  release_date,
  streaming_providers = [],
  certification,
  runtime,
}) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/';
  const placeholderImage =
    'https://dummyimage.com/200x300/cccccc/000000&text=No+Image';

  const formatRuntime = (runtime: number | string | undefined): string => {
    if (!runtime || runtime === 'N/A' || typeof runtime !== 'number')
      return 'N/A';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours > 0 ? `${hours} hr${hours > 1 ? 's' : ''} ` : ''}${
      minutes > 0 ? `${minutes} min${minutes > 1 ? 's' : ''}` : ''
    }`;
  };

  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="font-medium mb-1">{formatRuntime(runtime)}</span>
        <span className="font-medium mb-1">{certification}</span>
      </div>

      {poster_path ? (
        <img
          src={`${baseImageUrl}w342${poster_path}`}
          alt={title}
          className="w-full h-auto rounded mb-3"
        />
      ) : (
        <img
          src={placeholderImage}
          alt="No poster available"
          className="w-full h-auto rounded mb-3"
        />
      )}

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        Release: {release_date || 'N/A'}
      </p>
      <p className="font-medium mb-1">Streaming On:</p>
      <ul className="space-y-1 text-sm">
        {streaming_providers && streaming_providers.length > 0 ? (
          streaming_providers.map((provider) => (
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
  );
};

export default MovieCard;
