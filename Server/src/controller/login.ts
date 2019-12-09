import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Register } from '../entity/Register';

export async function loginGetAllAction(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const loginRepository = getManager().getRepository(Register);

  // load a post by a given post id
  const log = await loginRepository.find({
    name: request.body.name,
    password: request.body.password
  });

  // return loaded posts
  response.send(log);
}
// const loginRepository = getManager().getRepository(Register);
// const login = async ({name, password}) => {
//     if (!name || !password) throw new Error('missing username or password');
//     const result = await loginRepository.find( {name});

//   if (!result ) throw new Error('no_data');
