import * as axios from 'axios';
import * as qs from 'qs';
export const addCategoryActionCreator = text => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      newCategory: text
    }),
    url: 'http://localhost:3001/asd'
  };
  axios(options).then(res => {});
  return {
    type: 'ADD_POST',
    payload: {
      newName: text
    }
  };
};
export const selectCategoryActionCreator = text => ({
  type: 'SELECT_CATEGORY',
  payload: {
    newName: text
  }
});
