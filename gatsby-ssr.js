const React = require('react');

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // facebook の Like Button は bodyタグ直下という指定があるので、
  // `setPreBodyComponents` に必要な実行タグを渡す。
  setPreBodyComponents([
    <>
      <div id="fb-root"></div>
      <script
        key="1"
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v6.0"
      />
    </>,
  ]),
    // はてなブックマークボタンと Twitter のシェアボタンを head タグに入れる。
    // `setHeadComponents` に必要な実行タグを渡す。
    setHeadComponents([
      <script
        key="1"
        src="https://b.st-hatena.com/js/bookmark_button.js"
        charSet="utf-8"
        async
      />,
      <script
        key="2"
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
        async
      />,
    ]);
};
