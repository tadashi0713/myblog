import React from 'react';
import renderer from 'react-test-renderer';
import Iframely from './Iframely';

describe('Iframely', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Iframely />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
