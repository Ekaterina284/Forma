export const REGISTER_CHANGE_NAME_TEXT = '  REGISTER_CHANGE_NAME_TEXT';
export const REGISTER_CHANGE_PASSWORD_TEXT = '  REGISTER_CHANGE_PASSWORD_TEXT';

export const setNameText = name => ({
  type: REGISTER_CHANGE_NAME_TEXT,
  payload: name
});
export const setPasswordText = password => ({
  type: REGISTER_CHANGE_PASSWORD_TEXT,
  payload: password
});
