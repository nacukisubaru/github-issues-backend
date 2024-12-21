import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from './logger.service';
import { loggerSchema } from './logger.scheme';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Logger', schema: loggerSchema }]),
  ],
  providers: [LoggerService],
  exports: [LoggerService]
})
export class LoggerModule {}
