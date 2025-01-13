import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error('Error:', (err as Error).message || err);
  res
    .status((err as { status?: number }).status || 500)
    .json({ error: (err as Error).message || 'Internal Server Error' });
};
