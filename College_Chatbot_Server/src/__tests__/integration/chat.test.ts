
import request from 'supertest';
import app from '../../app';
import { Message } from '../../models';

describe('Chat API', () => {
  it('should process a message', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ message: 'Hello' });
    
    expect(res.status).toBe(200);
    expect(res.body.data.response).toBeDefined();
  });

  it('should get chat history', async () => {
    await Message.create([
      { content: 'Hi', sender: 'user' },
      { content: 'Hello', sender: 'bot' }
    ]);

    const res = await request(app)
      .get('/api/chat/history');
    
    expect(res.status).toBe(200);
    expect(res.body.data.history.length).toBe(2);
  });
});
