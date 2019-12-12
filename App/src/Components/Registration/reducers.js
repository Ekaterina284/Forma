import {
  REGISTER_CHANGE_NAME_TEXT,
  REGISTER_CHANGE_PASSWORD_TEXT
} from './action';

const defaultState = {
  name: '',
  password: ''
};
export const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_CHANGE_NAME_TEXT:
      return {
        ...state,
        name: action.payload
      };
    case REGISTER_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      };
  }
  return state;
};
