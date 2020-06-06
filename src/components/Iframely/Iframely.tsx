import React from "react";
import { Helmet } from "react-helmet";

export default class Iframely extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (window.iframely) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      window.iframely.load();
    }
  }

  render() {
    return (
      <Helmet>
        <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" />
      </Helmet>
    );
  }
}
