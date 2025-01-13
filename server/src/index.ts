import express from 'express';
import cors from 'cors';
import searchRoutes from './routes/search.js';
import { config } from './config/env.js';

const app = express();

const allowedOrigins = [
  'https://wheretostream.vercel.app',
  'http://localhost:5173',
  'http://localhost:4173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', searchRoutes);

app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error('Error:', (err as Error).message || err);
    res
      .status((err as { status?: number }).status || 500)
      .json({ error: (err as Error).message || 'Internal Server Error' });
  },
);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
