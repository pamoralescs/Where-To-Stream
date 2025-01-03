export interface StreamingProvider {
  provider_name: string;
  logo_path: string;
}

export interface MovieResult {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  streamingProviders: StreamingProvider[];
}