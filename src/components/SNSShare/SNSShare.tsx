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
import { HatenabookmarkButton } from "react-social-sharebuttons";
import styles from "./SNSShare.module.scss";

const SNSShare = ({ postUrl, postTitle }) => (
  <ul className={styles.content}>
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
      <HatenabookmarkButton
        url={
          "https://b.hatena.ne.jp/entry/s/" + postUrl.replace("https://", "")
        }
        layout="touch-counter"
      />
    </li>
  </ul>
);

export default SNSShare;
