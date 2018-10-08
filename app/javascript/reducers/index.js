import { combineReducers } from "redux";

import moviesReducer from "./moviesReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  movies: moviesReducer,
  categories: categoriesReducer
});
