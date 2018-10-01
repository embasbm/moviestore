import React from 'react';
import axios from "axios";
const ReactTestRenderer = require('react-test-renderer');
import NewMovieForm from '../NewMovieForm';

jest.mock('axios');

describe('NewMovieForm', () => {
  const resp = {
    data: []
  };

  const categories = [
    { id: 1, name: 'foo' }
  ]

  axios.get.mockImplementation(() => Promise.resolve(resp));

  it('Should compare NewMovieForm component with a snapshot', () => {
    const component = ReactTestRenderer.create(<NewMovieForm categories={categories} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});
