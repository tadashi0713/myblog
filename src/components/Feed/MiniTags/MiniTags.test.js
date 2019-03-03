import React from 'react';
import renderer from 'react-test-renderer';
import MiniTags from './MiniTags';

describe('MiniTags', () => {
  it('renders correctly', () => {
    const props = {
      tags: [
        'test_0',
        'test_1'
      ],
      tagSlugs: [
        '/test_0',
        '/test_1'
      ]
    };

    const tree = renderer.create(<MiniTags {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
