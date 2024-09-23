// dto 는 기본적으로 class 다 . 왠지는 나중에 확인해 봐야한다. 2024 09 23

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
