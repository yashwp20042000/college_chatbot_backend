
import express from 'express';
import { processMessage, getChatHistory } from '../controllers/chatController';
import { authenticate } from '../middlewares/auth';
import { validateMessage, validateHistoryQuery } from '../middlewares/validation';

const router = express.Router();

router.post('/', authenticate, validateMessage, processMessage);
router.get('/history', authenticate, validateHistoryQuery, getChatHistory);

export default router;
