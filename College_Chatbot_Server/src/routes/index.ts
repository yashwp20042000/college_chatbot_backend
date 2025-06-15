
import express from 'express';
import chatRoutes from './chatRoutes';
import healthRoutes from './healthRoutes';

const router = express.Router();

router.use('/chat', chatRoutes);
router.use('/health', healthRoutes);

export default router;
