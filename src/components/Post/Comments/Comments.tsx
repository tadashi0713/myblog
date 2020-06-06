import React, { ReactElement } from "react";
import { graphql, StaticQuery } from "gatsby";
import ReactDisqusComments from "react-disqus-comments";
import LazyLoad from "react-lazy-load";

export const PureComments = ({ data, postTitle, postSlug }): ReactElement => {
  const { url, disqusShortname } = data.site.siteMetadata;

  if (!disqusShortname) {
    return null;
  }

  return (
    <LazyLoad offsetTop={400}>
      <ReactDisqusComments
        shortname={disqusShortname}
        identifier={postTitle}
        title={postTitle}
        url={url + postSlug}
      />
    </LazyLoad>
  );
};

export const Comments = (props) => (
  <StaticQuery
    query={graphql`
      query CommentsQuery {
        site {
          siteMetadata {
            disqusShortname
            url
          }
        }
      }
    `}
    render={(data) => <PureComments {...props} data={data} />}
  />
);

export default Comments;
