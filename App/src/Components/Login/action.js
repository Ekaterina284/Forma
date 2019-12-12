import * as axios from 'axios';
import * as qs from 'qs';

export const LOGIN = 'LOGIN';

export const authActionCreator = ({ name, password }) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      name: name,
      password: password
    }),
    url: 'http://localhost:3001/login'
  };

  axios(options).then(res => {
    console.log(1);
    console.log(res);
    console.log(1);
  });
  return {
    type: 'LOGIN',
    payload: {
      newName: name,
      newPassword: password
    }
  };
};
