import React from 'react';
import axios from "axios";
const ReactTestRenderer = require('react-test-renderer');
import Layer from '../Layer';

jest.mock('axios');

describe('Layer', () => {
  const resp = {
    data: [
      {
        "id": 1,
        "title": "spiderman",
        "text": "Omnis repellat harum. Error beatae placeat. Ut minima nam."
      }
    ]
  };
  axios.get.mockImplementation(() => Promise.resolve(resp));

  it('Should compare Layer component with a snapshot', () => {
    const component = ReactTestRenderer.create(<Layer />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});
