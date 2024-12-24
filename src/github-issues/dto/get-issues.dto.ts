import { IsString } from 'class-validator';

export class GetIssuesDto {
  @IsString()
  user: string;

  @IsString()
  repo: string;

  @IsString()
  page: string;
}