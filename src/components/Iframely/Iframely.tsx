import React from "react";
import Helmet from "react-helmet";

export default class Iframely extends React.Component {
  static componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (window.iframely) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      window.iframely.load();
    }
  }

  static render() {
    return (
      <Helmet>
        <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" />
      </Helmet>
    );
  }
}
