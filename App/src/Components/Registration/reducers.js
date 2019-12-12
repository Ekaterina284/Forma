import { REGISTER } from './action';

const defaultState = {
  name: '',
  password: ''
};
export const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        name: action.payload.newName,
        password: action.payload.newPassword
      };
    default:
  }

  return state;
};
