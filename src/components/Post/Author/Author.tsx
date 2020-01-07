import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { getContactHref } from "../../../utils";
import styles from "./Author.module.scss";

export const PureAuthor = ({ data }) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className={styles.author}>
      <p className={styles.author__bio}>
        {author.bio}
        <a
          className={styles["author__bio-linkedin"]}
          href={getContactHref("linkedin", author.contacts.linkedin)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on LinkedIn
        </a>
      </p>
    </div>
  );
};

export const Author = props => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              contacts {
                linkedin
              }
            }
          }
        }
      }
    `}
    render={data => <PureAuthor {...props} data={data} />}
  />
);

export default Author;
