
import Joi from 'joi';

export const messageSchema = Joi.object({
  message: Joi.string().min(1).max(500).required()
});

export const historyQuerySchema = Joi.object({
  limit: Joi.number().integer().min(1).max(100).default(50),
  page: Joi.number().integer().min(1).default(1)
});
