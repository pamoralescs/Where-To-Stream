import express from 'express';
import searchRoutes from './routes/search';
import cors from 'cors';

const app = express();

// Define allowed origins based on environment
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://wheretostream.vercel.app'] // Production frontend URL
  : ['http://localhost:5173']; // Local frontend URL

// Configure CORS
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., mobile apps, curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the origin
      } else {
        callback(new Error('Not allowed by CORS')); // Block other origins
      }
    },
    methods: ['GET', 'POST'], // Allow only these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
  })
);

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', searchRoutes);

// Error-handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.message || err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});