import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    // 진짜 데이터 베이스는 여기에 데이터베이스에 관한 쿼리가 온다.
    return this.movies;
  }
}
