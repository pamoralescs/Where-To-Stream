import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  tmdbApiKey: process.env.TMDB_API_KEY || "",
};
