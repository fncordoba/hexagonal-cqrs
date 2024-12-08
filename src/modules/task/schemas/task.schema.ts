import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
