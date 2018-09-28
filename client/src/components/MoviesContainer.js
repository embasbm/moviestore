import React, { Component } from 'react';
import axios from 'axios';

class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/movies.json')
      .then(response => {
        this.setState({
          movies: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="movies-container">
        {this.state.movies.map(movie => {
          return (
            <div className="single-movie" key={movie.id}>
              <h4>{movie.title}</h4>
              <p>{movie.text}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MoviesContainer;
