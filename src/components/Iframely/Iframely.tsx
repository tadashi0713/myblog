import React from 'react';
import Helmet from 'react-helmet';

export default class Iframely extends React.Component {
  componentDidMount() {
    // @ts-ignore
    if (window.iframely) {
      // @ts-ignore
      window.iframely.load();
    }
  }

  render() {
    return (
      <Helmet>
        <script type="text/javascript" src="https://cdn.iframe.ly/embed.js"/>
      </Helmet>
    );
  }
}
