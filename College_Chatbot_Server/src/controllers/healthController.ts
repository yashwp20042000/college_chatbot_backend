
import { Request, Response } from 'express';
import { handleResponse } from '../utils/responseHandler';

export const healthCheck = (_req: Request, res: Response) => {
  handleResponse(res, 200, 'Server is healthy', { 
    status: 'UP',
    timestamp: new Date().toISOString()
  });
};
