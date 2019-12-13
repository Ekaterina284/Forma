import * as axios from 'axios';
import * as qs from 'qs';
export const REGISTER = 'REGISTER';
export const registerAction = ({ name, password }) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      newName: name,
      newPassword: password
    }),
    url: 'http://localhost:3001/register'
  };
  axios(options).then(res => {});
  return {
    type: 'REGISTER',
    payload: {
      newName: name,
      newPassword: password
    }
  };
};
