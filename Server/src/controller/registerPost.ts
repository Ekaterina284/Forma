import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Register } from '../entity/Register';

export async function loginPost(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const registerRepository = getManager().getRepository(Register);
  let reg = new Register();
  reg.name = request.body.newName;
  reg.password = request.body.newPassword;
  console.log(reg);

  const results = await registerRepository.save(reg);

  //   // return saved post back
  response.send(reg);
}
