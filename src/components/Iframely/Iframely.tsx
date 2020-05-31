import React from "react";
import { Helmet } from "react-helmet";
import { iframely } from "@iframely/embed.js";

export default class Iframely extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (window.iframely) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      window.iframely.load();
    }
  }

  render() {
    return (
      <Helmet>
        <script type="text/javascript" src={iframely} />
      </Helmet>
    );
  }
}
