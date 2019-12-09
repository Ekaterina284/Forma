import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Film } from '../entity/Film';

export async function filmGetAllAction(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = getManager().getRepository(Film);

  // load a post by a given post id
  const posts = await postRepository.find();

  // return loaded posts
  response.send(posts);
}
