import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  tmdbApiKey: process.env.TMDB_API_KEY || '',
  tmdbBaseUrl: process.env.TMDB_BASE_URL || '',
  allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || [],
} as const;
