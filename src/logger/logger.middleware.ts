import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction } from 'express';
import LoggerService from './logger.service';

@Injectable()
export default class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly loggerService: LoggerService) {}

  async use(req: Request, next: NextFunction) {
    const { method, originalUrl, ip } = req;

    await this.loggerService.logRequest(method, originalUrl, 'test', ip);

    next();
  }
}
