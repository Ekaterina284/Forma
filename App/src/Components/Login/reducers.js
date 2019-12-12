import { LOGIN } from './action';

const defaultState = {
  name: '',
  password: ''
};
export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        name: action.payload.newName,
        password: action.payload.newPassword
      };
  }
  return state;
};
