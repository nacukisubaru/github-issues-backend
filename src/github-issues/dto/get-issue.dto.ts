import { IsString } from 'class-validator';

export class GetIssueDto {
  @IsString()
  user: string;

  @IsString()
  repo: string;

  @IsString()
  id: string;
}