import { Schema, Document } from 'mongoose';

export const loggerSchema = new Schema(
  {
    ip: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    method: { type: String, required: true },
    path: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export interface Logger extends Document {
  ip: string;
  timestamp: Date;
  method: string;
  path: string;
}
