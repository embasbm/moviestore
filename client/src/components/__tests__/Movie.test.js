import React from 'react';
import axios from "axios";
const ReactTestRenderer = require('react-test-renderer');
import Movie from '../Movie';

jest.mock('axios');

describe('Movie', () => {
  const movie = {
    "id": 1,
    "title": "spiderman",
    "text": "Omnis repellat harum. Error beatae placeat. Ut minima nam."
  };
  axios.get.mockImplementation(() => Promise.resolve(resp));

  it('Should compare Movie component with a snapshot', () => {
    const component = ReactTestRenderer.create(<Movie movie={movie}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});
