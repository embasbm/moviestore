import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

import NewMovieForm from './NewMovieForm';
import EditMovieForm from './EditMovieForm';
import Movie from './Movie';
class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      editingMovieId: null
    }
    this.addNewMovie = this.addNewMovie.bind(this)
    this.removeMovie = this.removeMovie.bind(this)
    this.editingMovie = this.editingMovie.bind(this)
    this.editMovie = this.editMovie.bind(this)

  }

  componentDidMount() {
    axios.get('/api/v1/movies.json')
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

  removeMovie(id) {
    axios.delete('/api/v1/movies/' + id)
      .then(response => {
        const movies = this.state.movies.filter(
          movie => movie.id !== id
        )
        this.setState({ movies })
      })
      .catch(error => console.log(error))
  }

  editingMovie(id) {
    this.setState({
      editingMovieId: id
    })
  }

  editMovie(id, title, text) {
    axios.put('/api/v1/movies/' + id, {
      movie: {
        title,
        text
      }
    })
      .then(response => {
        const movies = this.state.movies;
        movies[id - 1] = { id, title, text }
        this.setState(() => ({
          movies,
          editingMovieId: null
        }))
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="movies-container">
        <NewMovieForm onNewMovie={this.addNewMovie} />
        <Table striped condensed>
          <tbody>
            {this.state.movies.map(movie => {
              if (this.state.editingMovieId === movie.id) {
                return (
                  <tr key={movie.id}>
                    <EditMovieForm
                      movie={movie}
                      editMovie={this.editMovie}
                    />
                  </tr>
                )
              } else {
                return (
                  <tr key={movie.id}>
                    <Movie
                      movie={movie}
                      onremoveMovie={this.removeMovie}
                      editingMovie={this.editingMovie}
                    />
                  </tr>
                )
              }
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default MoviesContainer;
