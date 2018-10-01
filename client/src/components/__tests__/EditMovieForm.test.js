import React from 'react';
import axios from "axios";
const ReactTestRenderer = require('react-test-renderer');
import EditMovieForm from '../EditMovieForm';

jest.mock('axios');

describe('EditMovieForm', () => {
  const movie = {
    "id": 1,
    "title": "spiderman",
    "text": "Omnis repellat harum. Error beatae placeat. Ut minima nam."
  };

  const categories = [
    {
      id: 1,
      name: 'foo'
    }
  ]
  axios.get.mockImplementation(() => Promise.resolve(resp));

  it('Should compare EditMovieForm component with a snapshot', () => {
    const component = ReactTestRenderer.create(<EditMovieForm movie={movie} categories={categories} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});
