import React, { Component } from 'react';
import axios from 'axios';
import NewMovieForm from './NewMovieForm';
import Movie from './Movie';
class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
    this.addNewMovie = this.addNewMovie.bind(this)
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

  addNewMovie(title, text) {
    axios.post('/api/v1/movies.json', { movie: { title, text } })
      .then(response => {
        const movies = [...this.state.movies, response.data]
        this.setState({ movies })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="movies-container">
        {this.state.movies.map(movie => {
          return (
            <Movie movie={movie} />
          )
        })}
        <NewMovieForm onNewMovie={this.addNewMovie} />
      </div>
    )
  }
}

export default MoviesContainer;
