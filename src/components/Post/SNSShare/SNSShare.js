import React from 'react';
import Helmet from 'react-helmet';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LineShareButton,
  LineIcon
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGetPocket } from '@fortawesome/free-brands-svg-icons';

const SNSShare = ({ postUrl, postTitle }) => (
  <div>
    <Helmet>
      <script type="text/javascript" src="//b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async" />
      <script type="text/javascript" src="//widgets.getpocket.com/v1/j/btn.js?v=1"  charset="utf-8" async="async" />
    </Helmet>
    <FacebookShareButton url={postUrl}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton title={postTitle} url={postUrl}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <LinkedinShareButton url={postUrl}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <LineShareButton title={postTitle} url={postUrl}>
      <LineIcon size={32} round />
    </LineShareButton>
    <a
      aria-label="share_pocket"
      // className={styles.pocket_icon_link}
      href={`https://getpocket.com/edit?url=${postUrl}&title=${postTitle}`}
      onClick={`window.open(this.href, 'PCwindow', 'width=550, height=350, menubar=no, toolbar=no, scrollbars=yes'); return false;`}>
      <FontAwesomeIcon
        color="#fff"
        // className={styles.pocket_icon}
        icon={faGetPocket} />
    </a>
    <a
      aria-label="share_hatena-bookmark"
      href="http://b.hatena.ne.jp/entry/"
      className="hatena-bookmark-button"
      data-hatena-bookmark-layout="touch-counter"
      title="このエントリーをはてなブックマークに追加"
      style={{boxShadow: 'none' }}>
      <img
        src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
        alt="このエントリーをはてなブックマークに追加"
        width="24"
        height="24"
        style={{border: 'none'}} />
    </a>
  </div>
);

export default SNSShare;
