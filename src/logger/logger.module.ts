import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { loggerSchema } from './logger.scheme';
import LoggerService from './logger.service';
import LoggerController from './logger.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Logger', schema: loggerSchema }]),
  ],
  providers: [LoggerService],
  exports: [LoggerService],
  controllers: [LoggerController],
})
export default class LoggerModule {}
