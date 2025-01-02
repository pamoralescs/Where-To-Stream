import express from 'express';
import searchRoutes from './routes/search';
import cors from 'cors';

const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173', // Allow only the frontend's origin
  methods: ['GET', 'POST'], // Allow only these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));

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