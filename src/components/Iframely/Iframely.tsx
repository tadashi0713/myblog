import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

interface WindowWithIframely extends Window {
  iframely?: {
    load: (current?: HTMLElement) => void;
  };
}

declare let window: WindowWithIframely;

const Iframely: React.FC = () => {
  useEffect(() => {
    // Gatsby は React コンポーネントを静的な HTML にビルドするのに Node をランタイムとして利用する。
    // このため window オブジェクトがないと怒られるので、ビルド時には window を利用する箇所をスルーさせる。
    if (window.iframely) {
      window.iframely.load();
    }
  }, []);

  return (
    <Helmet>
      <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" />
    </Helmet>
  );
};

export default Iframely;
