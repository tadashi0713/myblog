import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LineShareButton,
  LineIcon
} from "react-share";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGetPocket } from "@fortawesome/free-brands-svg-icons";
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
        aria-label="share_pocket"
        className={styles.pocket_icon_link}
        href={`https://getpocket.com/edit?url=${postUrl}&title=${postTitle}`}
        onClick={() =>
          window.open(
            this.href,
            "PCwindow",
            "width=550, height=350, menubar=no, toolbar=no, scrollbars=yes"
          )
        }
      >
        <FontAwesomeIcon
          color="#fff"
          className={styles.pocket_icon}
          icon={faGetPocket}
        />
      </a>
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
