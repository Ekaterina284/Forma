import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Category } from '../entity/Category';

export async function postCategory(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const movieRepository = getManager().getRepository(Category);
  let category = new Category();
  category.title = request.body.newCategory;
  console.log(category);
  const results = await movieRepository.save(category);
  //   // return saved post back
  response.send(category);
}
