import { Controller, Get, Query } from '@nestjs/common';
import GithubIssuesService from './github-issues.servise';

@Controller('github-issues')
export default class GithubIssuesController {
  constructor(private readonly issuesService: GithubIssuesService) {}

  @Get('/issues')
  getIssues(
    @Query('user') user: string,
    @Query('repo') repo: string,
    @Query('page') page: string,
  ) {
    return this.issuesService.getIssues(user, repo, page);
  }

  @Get('/issue')
  getIssue(
    @Query('user') user: string,
    @Query('repo') repo: string,
    @Query('id') id: string,
  ) {
    return this.issuesService.getIssue(user, repo, id);
  }
}
