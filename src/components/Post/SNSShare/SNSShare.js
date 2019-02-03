import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const SNSShare = ({ postUrl }) => (
  <div>
    <FacebookShareButton url={postUrl}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  </div>
);

export default SNSShare;
