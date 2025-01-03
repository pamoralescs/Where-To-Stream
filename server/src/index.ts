import express from "express";
import cors from "cors";
import searchRoutes from "./routes/search";
import { config } from "./config/env";

const app = express();

// Allow requests only from your frontend origin
const allowedOrigins = [
  "https://wheretostream.vercel.app", // Frontend production URL
  "http://localhost:5173",           // Local development frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the origin
      } else {
        callback(new Error("Not allowed by CORS")); // Block other origins
      }
    },
    methods: ["GET", "POST"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

// Parse incoming JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", searchRoutes);

// Error-handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Error:", err.message || err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Start the server
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});