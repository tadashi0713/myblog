import React, { ReactElement } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/Post";

const PostTemplate = ({ data }): ReactElement => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const {
    title: postTitle,
    description: postDescription,
    image: postImage,
  } = data.markdownRemark.frontmatter;

  const metaDescription =
    postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      image={postImage}
    >
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          name
        }
        disqusShortname
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        image
      }
    }
  }
`;

export default PostTemplate;
