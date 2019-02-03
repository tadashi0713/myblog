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

const SNSShare = ({ postUrl, postTitle }) => (
  <div>
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
  </div>
);

export default SNSShare;
