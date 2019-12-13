import { combineReducers, createStore, applyMiddleware } from 'redux';
//import logger from 'redux-logger';
import CinemaReducer from '../store/Cinema-list/reducers';
import categoryReducer from '../store/Category/reducers';
import { loginReducer } from '../Components/Login/reducers';
import { registerReducer } from '../Components/Registration/reducers';

const rootReducer = combineReducers({
  category: categoryReducer,
  movie: CinemaReducer,
  login: loginReducer,
  registration: registerReducer
});
const store = createStore(rootReducer, applyMiddleware());
export default store;
