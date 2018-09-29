import React from 'react';
import axios from "axios";
const ReactTestRenderer = require('react-test-renderer');
import MoviesContainer from '../MoviesContainer';

jest.mock('axios');

describe('MoviesContainer', () => {
  const resp = {
    data: []
  };
  axios.get.mockImplementation(() => Promise.resolve(resp));

  it('Should compare MoviesContainer component with a snapshot', () => {
    const component = ReactTestRenderer.create(<MoviesContainer />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});
