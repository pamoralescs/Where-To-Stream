export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  popularity: number;
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
