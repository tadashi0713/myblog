import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PocketShareButton,
  LineShareButton,
  LineIcon,
  EmailIcon,
  PocketIcon,
} from "react-share";
import { Helmet } from "react-helmet";
import styles from "./SNSShare.module.scss";

const SNSShare = ({ postUrl, postTitle }) => (
  <ul className={styles.content}>
    <Helmet>
      <script
        type="text/javascript"
        src="//widgets.getpocket.com/v1/j/btn.js?v=1"
        charSet="utf-8"
        async={true}
      />
      <script
        type="text/javascript"
        src="//b.st-hatena.com/js/bookmark_button.js"
        charSet="utf-8"
        async={true}
      />
    </Helmet>
    <li className={styles.share_button}>
      <EmailShareButton url={postUrl}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </li>
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
      <PocketShareButton title={postTitle} url={postUrl}>
        <PocketIcon size={32} round />
      </PocketShareButton>
    </li>
    <li className={styles.share_button}>
      <a
        aria-label="share_hatena-bookmark"
        href={
          "https://b.hatena.ne.jp/entry/s/" + postUrl.replace("https://", "")
        }
        className="hatena-bookmark-button"
        data-hatena-bookmark-layout="touch-counter"
        title="このエントリーをはてなブックマークに追加"
        style={{ boxShadow: "none" }}
      >
        <img
          src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width="20"
          height="20"
          style={{ border: "none" }}
        />
      </a>
    </li>
  </ul>
);

export default SNSShare;
