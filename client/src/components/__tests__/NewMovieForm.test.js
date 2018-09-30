import React from 'react';
import axios from "axios";
const ReactTestRenderer = require('react-test-renderer');
import NewMovieForm from '../NewMovieForm';

jest.mock('axios');

describe('NewMovieForm', () => {
  const resp = {
    data: []
  };
  axios.get.mockImplementation(() => Promise.resolve(resp));

  it('Should compare NewMovieForm component with a snapshot', () => {
    const component = ReactTestRenderer.create(<NewMovieForm />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});
