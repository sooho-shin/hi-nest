import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    // 진짜 데이터 베이스는 여기에 데이터베이스에 관한 쿼리가 온다.
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) {
      throw new NotFoundException('영화가 없음 ID : ' + id);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  createMovie(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length ? this.movies[this.movies.length - 1].id + 1 : 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
    // this.movies = this.movies.map(movie =>
    //   movie.id === +id? {...movie,...updateData } : movie
    // );
  }
}
