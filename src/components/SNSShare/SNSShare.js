import React from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGetPocket } from '@fortawesome/free-brands-svg-icons';

const SNSShare = ({ postUrl, postTitle }) => (
  <ul className={styles.content}>
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
        onClick={`window.open(this.href, 'PCwindow', 'width=550, height=350, menubar=no, toolbar=no, scrollbars=yes'); return false;`}>
        <FontAwesomeIcon
          color="#fff"
          className={styles.pocket_icon}
          icon={faGetPocket} />
      </a>
    </li>
  </ul>
);

export default SNSShare;
