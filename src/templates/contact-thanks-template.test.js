import React from 'react';
import renderer from 'react-test-renderer';
import ContactThanksTemplate from './contact-thanks-template';

describe('ContactThanksTemplate', () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: 'test',
          subtitle: 'test'
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<ContactThanksTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
