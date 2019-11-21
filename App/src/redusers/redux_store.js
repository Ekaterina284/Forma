import { combineReducers, createStore } from 'redux';
import CategoryReducers from './category';
import CinemaReducer from '../store/Cinema-list/reducers';
const allReducers = combineReducers({
  category: CategoryReducers,
  movie: CinemaReducer
  //selectcategory: CategoryReducers
});
const store = createStore(allReducers);
export default store;
