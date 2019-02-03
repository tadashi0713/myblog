import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

const SNSShare = ({ postUrl, postTitle }) => (
  <div>
    <FacebookShareButton url={postUrl}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton title={postTitle} url={postUrl}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  </div>
);

export default SNSShare;
