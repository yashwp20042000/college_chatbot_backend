
import { Request, Response } from 'express';
import * as chatService from '../services/chatService';
import { handleResponse } from '../utils/responseHandler';

export const processMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    if (!message) {
      return handleResponse(res, 400, 'Message is required');
    }
    
    const response = await chatService.generateResponse(message);
    handleResponse(res, 200, 'Message processed successfully', { response });
  } catch (error) {
    handleResponse(res, 500, 'Error processing message');
  }
};

export const getChatHistory = async (req: Request, res: Response) => {
  try {
    const history = await chatService.getHistory();
    handleResponse(res, 200, 'Chat history retrieved', { history });
  } catch (error) {
    handleResponse(res, 500, 'Error retrieving chat history');
  }
};
