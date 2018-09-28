import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/Layer.css';
import MoviesContainer from './MoviesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie DB</h1>
        </header>
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
