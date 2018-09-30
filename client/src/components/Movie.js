import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="single-movie">
        <h4>{this.props.movie.title}</h4>
        <p>{this.props.movie.text}</p>
      </div>
    )
  }
}

export default Movie;
