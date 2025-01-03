import * as dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  tmdbApiKey: process.env.TMDB_API_KEY || "",
};