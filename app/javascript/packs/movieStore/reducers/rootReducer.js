import { combineReducers } from 'redux';
import movies from './moviesReducer';
import categories from './categoriesReducer';

const rootReducer = combineReducers({
  movies,
  categories
});

export default rootReducer;
