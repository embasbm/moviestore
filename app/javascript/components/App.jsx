import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieActions from "../actions/movieActions";

import Header from './Header';
import MovieForm from './MovieForm';
import MovieTable from './MovieTable';

class App extends Component {
  componentDidMount() {movieActions
    const { movies, movieActions } = this.props;
    if (movies.length === 0) {
      movieActions.fetchMovies();
    }
  }

  render() {
    const { movies, movieActions } = this.props;
    return (
      <Grid>
        <Row>
          <Header title='Movies App' />
        </Row>
        <Row>
          <MovieForm movieActions={movieActions} />
          <MovieTable movies={movies} />
        </Row>
      </Grid>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return { movieActions: bindActionCreators(movieActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
