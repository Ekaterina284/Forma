import { combineReducers } from 'redux';
import { authReducer } from './auth/reducers';
import { registrationReducer } from './registration/reducers';
// import categoryReducer from './Category/reducers';
export default combineReducers({
  auth: authReducer,
  registration: registrationReducer
  // films: CinemaReducers,
  // category: categoryReducer
});
