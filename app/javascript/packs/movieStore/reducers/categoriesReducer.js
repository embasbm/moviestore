import initialState from './initialState';
import { FETCH_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/actionTypes';

export default function categories(state = initialState.categories, action) {
  let newState;
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action;
    case RECEIVE_CATEGORIES:
      newState = action.categories;
      return newState;
    default:
      return state;
  }
}
