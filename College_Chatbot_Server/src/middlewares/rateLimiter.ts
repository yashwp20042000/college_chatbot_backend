
import rateLimit from 'express-rate-limit';
import { env } from '../config/env';
import { handleResponse } from '../utils/responseHandler';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: env.NODE_ENV === 'development' ? 1000 : 100,
  handler: (req, res) => {
    handleResponse(res, 429, 'Too many requests, please try again later');
  }
});
