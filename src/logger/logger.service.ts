import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logger } from './logger.scheme';

@Injectable()
export class LoggerService {
  constructor(@InjectModel('Logger') private loggerModel: Model<Logger>) {}

  async logRequest(
    method: string,
    path: string,
    type: string,
    ip: string,
  ): Promise<Logger> {
    const newLog = new this.loggerModel({
      ip,
      type,
      method,
      path,
    });
    return await newLog.save();
  }
}
