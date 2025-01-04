import { Router } from "express";
import { searchMovies } from "../controllers/searchController";

const router = Router();

router.get("/search", searchMovies);

export default router;
