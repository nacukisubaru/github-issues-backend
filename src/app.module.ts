import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import GithubIssuesModule from './github-issues/github-issues.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    GithubIssuesModule,
  ],
  controllers: [],
  providers: [],
})
export default class AppModule {}
