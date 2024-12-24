import { IsString } from 'class-validator';

export default class GetIssueDto {
  @IsString()
  user: string;

  @IsString()
  repo: string;

  @IsString()
  id: string;
}
