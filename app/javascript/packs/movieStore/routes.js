import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/configureStore';
import LandingPage from './components/landingPage';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={LandingPage} />
    </Router>
  </Provider>
)

export default Root;
