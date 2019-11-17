export const AUTH_CHANGE_NAME_TEXT = ' AUTH_CHANGE_NAME_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = ' AUTH_CHANGE_PASSWORD_TEXT';

export const setNameText = name => ({
  type: AUTH_CHANGE_NAME_TEXT,
  payload: name
});
export const setPasswordText = password => ({
  type: AUTH_CHANGE_PASSWORD_TEXT,
  payload: password
});
