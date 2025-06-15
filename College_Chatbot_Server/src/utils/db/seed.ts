
import { Message } from '../../models';

export const seedMessages = async () => {
  await Message.insertMany([
    { content: 'Hello', sender: 'user' },
    { content: 'Hi there!', sender: 'bot' },
    { content: 'What time is it?', sender: 'user' },
    { content: `Current date/time is: ${new Date().toLocaleString()}`, sender: 'bot' }
  ]);
  console.log('Database seeded with sample messages');
};
