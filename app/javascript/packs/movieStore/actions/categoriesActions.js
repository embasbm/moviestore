import axios from 'axios';
import * as types from './actionTypes';

export function receiveCategories(categories) {
  return { type: types.RECEIVE_CATEGORIES, categories: categories};
}
export function fetchCategories() {
  return dispatch => {
    axios.get('/api/v1/categories.json')
      .then(response => {
        dispatch(receiveCategories(response.data))
      })
      .catch(error => console.log(error))
  };
}
