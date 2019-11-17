const defaultState = {
  name: '',
  password: ''
};
export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_CHANGE_NAME_TEXT:
      return {
        ...state,
        name: action.payload
      };
    case AUTH_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      };
  }
  return state;
};
