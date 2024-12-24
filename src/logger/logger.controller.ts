import { Controller, Get, Param } from '@nestjs/common';
import LoggerService from './logger.service';

@Controller('logger')
export default class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Get('/get-logs/:page')
  getLogs(@Param('page') page: string) {
    return this.loggerService.getLogs(Number(page));
  }
}
