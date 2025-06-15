
import { env } from '../config/env';

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, env.JWT_SECRET, { expiresIn: '1h' });
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
