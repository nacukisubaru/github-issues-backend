import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import GithubIssuesController from './github-issues.controller';
import GithubIssuesService from './github-issues.servise';

@Module({
  imports: [HttpModule],
  controllers: [GithubIssuesController],
  providers: [GithubIssuesService],
})
export default class GithubIssuesModule {}
