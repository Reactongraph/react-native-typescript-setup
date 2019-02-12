import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard  from "../src/containers/Dashboard";

it('renders correctly with defaults', () => {
    const button = renderer
      .create(<Dashboard  name="sunil"/>)
      .toJSON();
    expect(button).toMatchSnapshot();
});