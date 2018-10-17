import axios from 'axios';

const getMovies = (movies) => {
  return {
    type: "GET_MOVIES",
    movies
  };
};

const addMovie = movie => {
  return {
    type: "CREATE_MOVIE",
    movie
  };
};

const removeMovie = id => {
  return {
    type: "DELETE_MOVIE",
    id
  };
};

const editMovie = movie => {
  return {
    type: "UPDATE_MOVIE",
    movie
  };
};

// *** Async Actions ***
export const fetchMovies = () => {
  return dispatch => {
    return axios.get('/api/v1/movies.json')
      .then(response => {
        dispatch(getMovies(response.data))
      })
      .catch(error => console.log(error))
  };
};

export const createMovie = (movie) => {
  return dispatch => {
    return axios.post('/api/v1/movies.json', { movie: movie})
      .then(movie => {
        dispatch(addMovie(response.data))
      })
      .catch(error => console.log(error))
  };
};
