import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubIssuesService {
  constructor(private readonly httpService: HttpService) {}

  async getIssues(user: string, repo: string) {
	const githubUrl = process.env.GITHUB_API_URL;
	if (!githubUrl) {
		throw new HttpException(
			'Environment variable GITHUB_API_URL is not set.',
			HttpStatus.INTERNAL_SERVER_ERROR
		);
	}

    const url = `${githubUrl}/repos/${user}/${repo}/issues`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
