import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly loggerService: LoggerService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, headers, ip } = req;
    const userAgent = headers['user-agent'];

    // Логируем запрос
    await this.loggerService.logRequest(method, originalUrl, 'test', ip);

    next();
  }
}
