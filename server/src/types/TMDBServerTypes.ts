export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  popularity: number;
  vote_average?: number;
  vote_count?: number;
}

export interface TMDBSearchResponse {
  results: Movie[];
}

export interface Provider {
  provider_name: string;
  logo_path: string;
}

export interface WatchProvidersResponse {
  results?: {
    US?: {
      flatrate?: Provider[];
    };
  };
}

export interface ReleaseDate {
  iso_3166_1: string;
  release_dates: {
    certification: string;
  }[];
}

export interface ReleaseDatesResponse {
  results: ReleaseDate[];
}
