// import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
// import { firstValueFrom } from 'rxjs';

// @Injectable()
// export class IssuesService {
//   constructor(private readonly httpService: HttpService) {}

//   async getIssues(user: string, repo: string) {
//     const url = `https://api.github.com/repos/${user}/${repo}/issues`;
//     const response = await firstValueFrom(this.httpService.get(url));
//     return response.data;
//   }
// }
