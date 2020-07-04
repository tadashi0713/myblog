import React, { useEffect } from "react";

type Props = {
  postTitle: string;
  postUrl: string;
};

interface WindowWithTwitter extends Window {
  twttr?: {
    widgets?: {
      load: (current?: HTMLElement) => void;
    };
  };

  FB?: {
    XFBML?: {
      parse: (current?: HTMLElement) => void;
    };
  };
}

declare let window: WindowWithTwitter;

const SharingButtons: React.FC<Props> = ({ postTitle, postUrl }: Props) => {
  useEffect(() => {
    // Gatsby は React コンポーネントを静的な HTML にビルドするのに Node をランタイムとして利用する。
    // このため window オブジェクトがないと怒られるので、ビルド時には window を利用する箇所をスルーさせる。
    if (typeof window !== `undefined`) {
      if (window.FB !== `undefined`) {
        window.FB.XFBML.parse();
      }

      if (window.twttr !== `undefined`) {
        window.twttr.widgets.load();
      }
    }
  }, []);

  return (
    <div className="sns-wrapper">
      {/* Facebook */}
      <li>
        <div
          className="fb-like"
          data-href={postUrl}
          data-width=""
          data-layout="button"
          data-action="like"
          data-size="small"
          data-share="false"
        />
      </li>
      {/* Twitter */}
      <li>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-text={postTitle}
          data-show-count="false"
        >
          Tweet
        </a>
      </li>
      {/* hatebu */}
      <li>
        <a
          href="https://b.hatena.ne.jp/entry/"
          className="hatena-bookmark-button"
          data-hatena-bookmark-layout="basic-label"
          data-hatena-bookmark-lang="en"
          data-hatena-bookmark-height="20"
          title="このエントリーをはてなブックマークに追加"
        >
          <img
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加"
            width="20"
            height="20"
            style={{ border: "none" }}
          />
        </a>
      </li>
    </div>
  );
};
export default SharingButtons;
