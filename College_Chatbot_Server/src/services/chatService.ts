
import { Message } from '../models';
import { generateNlpResponse } from './nlpService';

export const generateResponse = async (message: string) => {
  // Save user message
  await Message.create({ content: message, sender: 'user' });
  
  // Generate bot response
  const botResponse = generateNlpResponse(message);
  
  // Save bot response
  await Message.create({ content: botResponse, sender: 'bot' });
  
  return botResponse;
};

export const getHistory = async () => {
  return Message.find().sort({ timestamp: 1 }).limit(50);
};
