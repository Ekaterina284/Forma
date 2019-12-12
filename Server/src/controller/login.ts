import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import { User } from '../entity/Register';

export async function loginGetAllAction(request: Request, response: Response) {
  const loginRepository = getManager().getRepository(User);
  // load a post by a given post id
  const log = await loginRepository.find({
    name: request.body.name,
    password: request.body.password
  });
  let firstPhoto = await loginRepository.findOne(19);
  console.log('First photo from the db: ', firstPhoto);
}
