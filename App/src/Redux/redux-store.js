import { createStore, combineReducers } from 'redux';
import categoryReducer from './Category-reducer';
import movieReducer from './movies-reducer';
let reducers = combineReducers({
  CategoryPage: categoryReducer,
  MoviesPage: movieReducer
});
let store = createStore(reducers);
export default store;
