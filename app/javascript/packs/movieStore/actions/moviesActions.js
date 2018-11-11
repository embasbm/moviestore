import axios from 'axios';
import * as types from './actionTypes';

export function receiveMovies(movies) {
  return { type: types.RECEIVE_MOVIES, movies: movies };
}

export function fetchMovies() {
  return dispatch => {
    axios.get('/api/v1/movies.json')
      .then(response => {
        dispatch(receiveMovies(response.data))
      })
      .catch(error => console.log(error))
  };
}
