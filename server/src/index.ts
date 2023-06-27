import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { routerHandler } from '@/router';
import mongoose from 'mongoose';
import { NODE_ENV, PORT, DB_URI } from './config';
import { ApiError, NotFoundError } from '@/middleware';

export function startServer() {
  const app: express.Application = express();
  app.use(express.json())

  app.use(cors({ origin: ['http://localhost:5173'] }));
  app.use(morgan('combined'));

  app.use('/api/v1', routerHandler());

  app.use((req: Request, res: Response, next: NextFunction) =>
    next(new NotFoundError(`path not found ${req.path}`))
  );
  interface ErrorType extends ApiError {
    error: any
  }

  app.use((err: ErrorType, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.httpCode || 500;
    res.status(statusCode).json({
      success: false,
      message: err.message,
      ...(NODE_ENV !== 'production' ? { stack: err.stack } : {}),
    });
  });

  return app;
}

mongoose
  .connect(DB_URI as string)
  .then((res) => {
    startServer().listen(PORT, () => {
      console.log('Node serveer is listening at url http://localhost: ' + PORT);
    });
  })
  .catch((err) => console.log(err));

process.on('unhandledRejection', (reason: Error) => {
  console.log(reason.name, reason.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  process.exit(1);
});

process.on('uncaughtException', (err: Error) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');

  process.exit(1);
});
