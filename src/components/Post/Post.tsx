import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import SNSShare from '../SNSShare';
import styles from './Post.module.scss';
import Iframely from '../Iframely';

const siteConfig = require('../../../config.js');

const Post = ({ post }) => {
  const {
    tags,
    title,
    date
  } = post.frontmatter;

  const { html } = post;
  const { slug, tagSlugs } = post.fields;

  const postUrl = `${siteConfig.url}/${slug}`;

  return (
    <div className={styles['post']}>
      <Iframely/>
      <Link className={styles['post__home-button']} to="/">All Articles</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <SNSShare postUrl={postUrl} postTitle={title}/>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
