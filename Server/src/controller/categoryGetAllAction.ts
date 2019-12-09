import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Category } from '../entity/Category';

export async function categoryGetAllAction(
  request: Request,
  response: Response
) {
  // get a post repository to perform operations with post
  const categoryRepository = getManager().getRepository(Category);

  // load a post by a given post id
  const categories = await categoryRepository.find();

  // return loaded posts
  response.send(categories);
}
