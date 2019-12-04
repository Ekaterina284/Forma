// export const LOGIN_CHANGE_NAME_TEXT = ' LOGIN_CHANGE_NAME_TEXT';
// export const LOGIN_CHANGE_PASSWORD_TEXT = ' LOGIN_CHANGE_PASSWORD_TEXT';

// export const setNameText = name => ({
//   type: LOGIN_CHANGE_NAME_TEXT,
//   payload: name
// });
// export const setPasswordText = password => ({
//   type: LOGIN_CHANGE_PASSWORD_TEXT,
//   payload: password
// });
export const LOGIN = ' LOGIN';
export const authActionCreator = ({ name, password }) => ({
  type: 'LOGIN',
  payload: {
    newName: name,
    newPassword: password
  }
});
