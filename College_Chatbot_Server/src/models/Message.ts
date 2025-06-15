
import mongoose, { Document, Schema } from 'mongoose';

interface IMessage extends Document {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const MessageSchema = new Schema<IMessage>({
  content: { type: String, required: true },
  sender: { type: String, enum: ['user', 'bot'], required: true },
  timestamp: { type: Date, default: Date.now }
});

export const Message = mongoose.model<IMessage>('Message', MessageSchema);
