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
      editingMovieId: null,
      categories: [],

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
    axios.get('/api/v1/categories.json')
      .then(response => {
        this.setState({
          categories: response.data
        })
      })
      .catch(error => console.log(error))
  }

  addNewMovie(title, text, category_id) {
    axios.post('/api/v1/movies.json', { movie: { title, text, category_id } })
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

  editMovie(id, title, text, category_id) {
    axios.put('/api/v1/movies/' + id, {
      movie: {
        title,
        text,
        category_id
      }
    })
      .then(response => {
        const movies = this.state.movies;
        const index = movies.indexOf(movies.find((e) => e.id === id));
        if (index >= 0) {
          movies[index] = response.data
          this.setState(() => ({
            movies,
            editingMovieId: null
          }))
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="movies-container">
        <NewMovieForm onNewMovie={this.addNewMovie} categories={this.state.categories} />
        <Table striped condensed>
          <tbody>
            {this.state.movies.map(movie => {
              if (this.state.editingMovieId === movie.id) {
                return (
                  <tr key={movie.id}>
                    <EditMovieForm
                      movie={movie}
                      category={movie.category}
                      editMovie={this.editMovie}
                      categories={this.state.categories}
                    />
                  </tr>
                )
              } else {
                return (
                  <tr key={movie.id}>
                    <Movie
                      movie={movie}
                      category={movie.category}
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
