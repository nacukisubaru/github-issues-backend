import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import LoggerModule from './logger/logger.module';
import LoggerMiddleware from './logger/logger.middleware';
import GithubIssuesModule from './github-issues/github-issues.module';
import MongoDatabaseModule from './mongoDB/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    GithubIssuesModule,
    MongoDatabaseModule,
    LoggerModule,
  ],
  controllers: [],
  providers: [],
})
export default class AppModule implements NestModule {
  /* eslint-disable-next-line class-methods-use-this */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
