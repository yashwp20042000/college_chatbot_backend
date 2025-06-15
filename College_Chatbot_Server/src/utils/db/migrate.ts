
import mongoose from 'mongoose';
import { env } from '../../config/env';
import { seedMessages } from './seed';

const migrate = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    await seedMessages();
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

migrate();
