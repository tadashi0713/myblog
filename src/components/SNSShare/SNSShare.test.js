import React from 'react';
import renderer from 'react-test-renderer';
import SNSShare from './SNSShare';

describe('SNSShare', () => {
  const props = {
    postTitle: 'Sample',
    postUrl: 'https://tadashi0713.com/'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<SNSShare {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
