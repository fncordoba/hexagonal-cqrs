import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  _id: Number,
  name: String,
  email: String,
});

export interface UserDocument extends Document {
  id: number;
  name: string;
  email: string;
}
