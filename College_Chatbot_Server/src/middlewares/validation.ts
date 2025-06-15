
import { NextFunction, Request, Response } from 'express';
import { messageSchema, historyQuerySchema } from '../validations/chatValidations';
import { handleResponse } from '../utils/responseHandler';

export const validateMessage = (req: Request, res: Response, next: NextFunction) => {
  const { error } = messageSchema.validate(req.body);
  if (error) {
    return handleResponse(res, 400, error.details[0].message);
  }
  next();
};

export const validateHistoryQuery = (req: Request, res: Response, next: NextFunction) => {
  const { error } = historyQuerySchema.validate(req.query);
  if (error) {
    return handleResponse(res, 400, error.details[0].message);
  }
  next();
};
