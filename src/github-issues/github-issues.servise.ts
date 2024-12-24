import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export default class GithubIssuesService {
  constructor(private readonly httpService: HttpService) {}

  private limit = 30;

  private static getGithubUrl() {
    const githubUrl = process.env.GITHUB_API_URL;
    if (!githubUrl) {
      throw new HttpException(
        'Environment variable GITHUB_API_URL is not set.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return githubUrl;
  }

  async getIssues(user: string, repo: string, page: string) {
    const githubUrl = GithubIssuesService.getGithubUrl();
    const url = `${githubUrl}/repos/${user}/${repo}/issues?page=${page}&per_page=${this.limit}`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getIssue(user: string, repo: string, id: string) {
    const githubUrl = GithubIssuesService.getGithubUrl();
    const url = `${githubUrl}/repos/${user}/${repo}/issues/${id}`;

    const response = await firstValueFrom(this.httpService.get(url));
    const responseData = response.data;
    if (responseData.comments_url) {
      const comments = await firstValueFrom(
        this.httpService.get(responseData.comments_url),
      );
      responseData.commentsList = comments.data;
    }

    return responseData;
  }
}
