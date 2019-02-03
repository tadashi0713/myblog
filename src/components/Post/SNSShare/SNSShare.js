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
import styles from './SNSShare.module.scss';

const SNSShare = ({ postUrl, postTitle }) => (
  <ul className={styles.content}>
    <Helmet>
      <script type="text/javascript" src="//b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async" />
      <script type="text/javascript" src="//widgets.getpocket.com/v1/j/btn.js?v=1"  charset="utf-8" async="async" />
    </Helmet>
    <li className={styles.share_button}>
      <FacebookShareButton url={postUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </li>
    <li className={styles.share_button}>
      <TwitterShareButton title={postTitle} url={postUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </li>
    <li className={styles.share_button}>
      <LinkedinShareButton url={postUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </li>
    <li className={styles.share_button}>
      <LineShareButton title={postTitle} url={postUrl}>
        <LineIcon size={32} round />
      </LineShareButton>
    </li>
    <li className={styles.share_button}>
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
    </li>
  </ul>
);

export default SNSShare;
