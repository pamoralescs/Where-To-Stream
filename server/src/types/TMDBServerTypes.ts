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

export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  runtime?: number | string;
  streaming_providers?: Provider[];
  certification?: string;
}
