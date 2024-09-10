import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return movie with id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a new movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return 'This will delete a movies with ' + movieId;
  }

  @Put()
  update() {
    return 'This will update a movie';
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return 'This will partially update a movie with' + movieId;
  }
}
