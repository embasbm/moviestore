import React, { Component } from 'react';

class Movie extends Component {
  render() {
    const { movie, onremoveMovie, editingMovie} = this.props;
    return (
      <div className="single-movie">
        <h4>{movie.title}</h4>
        <p>{movie.text}</p>
        <button onClick={() => onremoveMovie(movie.id)}>Erase</button>
        <button onClick={() => editingMovie(movie.id)}>Edit</button>
      </div>
    )
  }
}

export default Movie;
