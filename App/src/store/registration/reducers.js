const defaultState = {
  name: '',
  password: ''
};
export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTRATION_CHANGE_NAME_TEXT:
      return {
        ...state,
        name: action.payload
      };
    case REGISTRATION_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      };
  }
  return state;
};
