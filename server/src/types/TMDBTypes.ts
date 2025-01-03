// Interface for a single movie in the search results
export interface Movie {
    id: number;
    title: string;
    poster_path?: string;
    release_date?: string;
    popularity: number;
  }
  
  // Interface for the overall search response
  export interface TMDBSearchResponse {
    results: Movie[];
  }
  
  // Interface for a single streaming provider
  export interface Provider {
    provider_name: string;
    logo_path: string;
  }
  
  // Interface for the watch providers response
  export interface WatchProvidersResponse {
    results?: {
      US?: {
        flatrate?: Provider[];
      };
    };
  }