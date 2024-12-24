import { IsString } from 'class-validator';

export default class GetIssuesDto {
  @IsString()
  user: string;

  @IsString()
  repo: string;

  @IsString()
  page: string;
}
