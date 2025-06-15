
import { z } from 'zod';

export const historyQuerySchema = z.object({
  userId: z.string().uuid(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});
