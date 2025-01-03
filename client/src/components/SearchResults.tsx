import React from "react";
import MovieCard from "./MovieCard";
import { MovieResult } from "../types";

interface SearchResultsProps {
  results: MovieResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div
      className="grid gap-6 
        grid-cols-2       /* Default: 2 columns for phones */
        sm:grid-cols-2    /* Small screens (≥640px): 2 columns */
        md:grid-cols-3    /* Medium screens (≥768px): 3 columns */
        lg:grid-cols-auto-fit  /* Large screens (≥1024px): Dynamic number of cards based on available space */"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
    >
      {results.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : undefined}
          releaseDate={movie.release_date}
          streamingProviders={movie.streamingProviders}
        />
      ))}
    </div>
  );
};

export default SearchResults;