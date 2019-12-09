import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Film } from '../entity/Film';

export async function postMovie(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const movieRepository = getManager().getRepository(Film);
  let movie = new Film();
  movie.photo = request.body.newPhoto;
  movie.name = request.body.newName;
  movie.year = request.body.newYear;
  movie.author = request.body.newAuthor;
  movie.category = request.body.newCategory;
  console.log(movie);
  const results = await movieRepository.save(movie);
  //   // return saved post back
  response.send(movie);
}
