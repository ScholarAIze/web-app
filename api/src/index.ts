import express from 'express';
import morgan from 'morgan';
import healthzRouter from './routes/healthz';
import errorHandler from './middleware/errorHandler';

export function start() {
  const app = express();

  // ✅ Add request logging
  app.use(morgan('dev'));

  // Add JSON parsing middleware
  app.use(express.json());

  // Routes
  app.use('/healthz', healthzRouter);

  // Centralized error handler
  app.use(errorHandler);

  return app;
}

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  start().listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
  });
}
