import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `검색됨 after ${searchingYear}`;
  }
  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return movie with id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return 'This will delete a movies with ' + movieId;
  }

  @Put()
  update() {
    return 'This will update a movie';
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
