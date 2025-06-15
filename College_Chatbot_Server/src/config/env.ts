
import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/college-chatbot',
  JWT_SECRET: process.env.JWT_SECRET || 'secret-key',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173'
};
