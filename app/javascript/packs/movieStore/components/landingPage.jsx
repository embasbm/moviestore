import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from '../actions/moviesActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Grid, Row } from 'react-bootstrap';
import Header from './Header';
import MovieForm from './movie/MovieForm';
import MovieTable from './movie/MovieTable';

class App extends Component {
  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
    this.props.moviesActions.fetchMovies();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Header title='Movies App' />
        </Row>
        <Row>
          <MovieForm />
          <MovieTable movies={this.props.movies} />
        </Row>
      </Grid>
    )
  }
}

App.propTypes = {
  moviesActions: PropTypes.object,
  movies: PropTypes.array
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    moviesActions: bindActionCreators(moviesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
