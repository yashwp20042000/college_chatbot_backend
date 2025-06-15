
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env';
import { connectDB } from './config/db';
import router from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { setupSwagger } from './docs/swaggerSetup';
import { apiLimiter } from './middlewares/rateLimiter';

const app = express();

// Middleware
app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', apiLimiter);

// Database
connectDB();

// Routes
app.use('/api', router);
setupSwagger(app);

// Error handling
app.use(errorHandler);

export default app;
