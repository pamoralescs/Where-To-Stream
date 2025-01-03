import express from "express";
import cors from "cors";
import searchRoutes from "./routes/search";
import { config } from "./config/env";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// CORS configuration
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://wheretostream.vercel.app"] // Production frontend URL
    : ["http://localhost:5173"]; // Local frontend URL

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", searchRoutes);

// Error-handling middleware
app.use(errorHandler);

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});