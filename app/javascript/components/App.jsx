import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row } from 'react-bootstrap';
import Header from './Header';
import MovieForm from './MovieForm';
import MovieTable from './MovieTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      categories: [],
    }

    this.getMovies = this.getMovies.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getMovies()
    this.getCategories()
  }

  getMovies() {
    axios.get('/api/v1/movies.json')
      .then(response => {
        this.setState({
          movies: response.data
        })
      })
      .catch(error => console.log(error))
  }

  getCategories() {
    axios.get('/api/v1/categories.json')
      .then(response => {
        this.setState({
          categories: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { movies, categories } = this.state;

    return (
      <Grid>
        <Row>
          <Header title='Movies App' />
        </Row>
        <Row>
          <MovieForm getMovies={this.getMovies} categories={categories} />
          <MovieTable movies={movies} getMovies={this.getMovies} />
        </Row>
      </Grid>
    )
  }
}

export default App;
