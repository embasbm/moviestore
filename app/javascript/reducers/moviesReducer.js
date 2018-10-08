export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case "GET_MOVIES":
      return action.movies;
    case "GET_CATEGORIES":
      return action.categories;
    case "CREATE_MOVIE":
      return state.concat(action.movie);
    case "DELETE_MOVIE":
      return state.filter(movie => movie.id !== action.id);
    case "UPDATE_MOVIE":
      return state.map(
        movie =>
          movie.id === action.movie.id
            ? Object.assign({}, ...movie, action.movie)
            : movie
      );
    default:
      return state;
  }
}
