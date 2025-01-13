import React from 'react';
import MovieCard from './MovieCard';
import { MovieResult } from '../types/TMDBClientTypes';

const SearchResults: React.FC<{ results: MovieResult[] }> = ({ results }) => {
  return (
    <div
      className="
    grid gap-6 
    grid-cols-2        /* Default: 2 columns for phones */
    sm:grid-cols-2     /* Small screens (≥640px): 2 columns */
    md:grid-cols-3     /* Medium screens (≥768px): 3 columns */
    lg:grid-cols-4     /* Large screens (≥1024px): 4 columns */
    px-4              /* Default horizontal padding */
    sm:px-6           /* Small screens: Increase horizontal padding */
    md:px-8           /* Medium screens: Larger horizontal padding */
    xl:px-16          /* Extra-large screens: Generous horizontal padding */
    pb-8              /* Padding at the bottom (default: 2rem) */
  "
    >
      {results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default SearchResults;
