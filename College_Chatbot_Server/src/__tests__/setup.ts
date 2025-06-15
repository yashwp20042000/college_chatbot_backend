
import mongoose from 'mongoose';
import { env } from '../config/env';

beforeAll(async () => {
  await mongoose.connect(env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});
