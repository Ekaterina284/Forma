import { combineReducers, createStore, applyMiddleware } from 'redux';
import CategoryReducers from '../store/./Category/reducers';
import CinemaReducer from '../store/Cinema-list/reducers';
import logger from 'redux-logger';
const allReducers = combineReducers({
  category: CategoryReducers,
  movie: CinemaReducer
});
const store = createStore(allReducers, applyMiddleware(logger));
export default store;
