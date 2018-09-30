import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/Layer.css';
import MoviesContainer from './MoviesContainer';

class Layer extends Component {
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <img src={logo} className="movie-app-logo" alt="logo" />
          <h1 className="movie-app-title">Movie DB</h1>
        </header>
        <MoviesContainer />
      </div>
    );
  }
}

export default Layer;
