export const REGISTRATION_CHANGE_NAME_TEXT = ' REGISTRATION_CHANGE_NAME_TEXT';
export const REGISTRATION_PASSWORD_TEXT = ' REGISTRATION_CHANGE_PASSWORD_TEXT';
export const setNameText = name => ({
  type: REGISTRATION_CHANGE_NAME_TEXT,
  payload: name
});
export const setPasswordText = password => ({
  type: REGISTRATION_CHANGE_PASSWORD_TEXT,
  payload: password
});
