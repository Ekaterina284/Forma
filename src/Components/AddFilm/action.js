import * as axios from 'axios';
import * as qs from 'qs';
export const addFilmActionCreator = ({
  photo,
  name,
  year,
  author,
  category
}) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      newPhoto: photo,
      newName: name,
      newYear: year,
      newAuthor: author,
      newCategory: category
    }),
    url: 'http://localhost:3001/qwerty'
  };
  axios(options).then(res => {});
  return {
    type: 'ADD_CINEMA',
    payload: {
      newPhoto: photo,
      newName: name,
      newYear: year,
      newAuthor: author,
      newCategory: category
    }
  };
};
