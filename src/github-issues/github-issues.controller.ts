import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import GithubIssuesService from './github-issues.servise';
import { GetIssuesDto } from './dto/get-issues.dto';
import { GetIssueDto } from './dto/get-issue.dto';

@Controller('github-issues')
export default class GithubIssuesController {
  constructor(private readonly issuesService: GithubIssuesService) {}

  @Get('/issues')
  getIssues(
    @Query(new ValidationPipe()) getIssuesDto: GetIssuesDto
  ) {
    return this.issuesService.getIssues(
      getIssuesDto.user, 
      getIssuesDto.repo, 
      getIssuesDto.page
    );
  }

  @Get('/issue')
  getIssue(
    @Query(new ValidationPipe()) getIssueDto: GetIssueDto
  ) {
    return this.issuesService.getIssue(
      getIssueDto.user, 
      getIssueDto.repo, 
      getIssueDto.id
    );
  }
}
