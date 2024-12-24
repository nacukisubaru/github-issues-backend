import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logger } from './logger.scheme';

@Injectable()
export default class LoggerService {
  constructor(@InjectModel('Logger') private LoggerModel: Model<Logger>) {}

  private limit = 30;

  async logRequest(method: string, path: string, ip: string): Promise<Logger> {
    const newLog = new this.LoggerModel({
      ip,
      path,
      method,
    });
    const result = await newLog.save();
    return result;
  }

  async getLogs(page: number) {
    const skip = (page - 1) * this.limit;
    const logs = await this.LoggerModel.find()
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(this.limit)
      .exec();
    return logs;
  }
}
