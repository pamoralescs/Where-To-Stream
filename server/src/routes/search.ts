import { Router } from "express";
import { searchMovies } from "../controllers/searchController";

const router = Router();

// Define the /search route
router.get("/search", searchMovies);

export default router;