import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logger } from './logger.scheme';

@Injectable()
export default class LoggerService {
  constructor(@InjectModel('Logger') private LoggerModel: Model<Logger>) {}

  async logRequest(
    method: string,
    path: string,
    type: string,
    ip: string,
  ): Promise<Logger> {
    const newLog = new this.LoggerModel({
      ip,
      type,
      method,
      path,
    });
    const result = await newLog.save();
    return result;
  }
}
