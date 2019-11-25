import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import CinemaReducer from '../store/Cinema-list/reducers';
import categoryReducer from '../store/Category/reducers';

const rootReducer = combineReducers({
  category: categoryReducer,
  movie: CinemaReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
