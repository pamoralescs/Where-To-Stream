import { Request, Response, NextFunction } from "express";
import TMDBService from "../services/TMDBService";

export const searchMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query.query as string;

    if (!query) {
      return res.status(400).json({ error: "No query provided" });
    }

    // Fetch movies and streaming providers from the TMDBService
    const results = await TMDBService.fetchMoviesWithProviders(query);
    res.json({ results });
  } catch (error) {
    console.error("Error in searchController:", error);
    next(error); // Pass the error to the error-handling middleware
  }
};