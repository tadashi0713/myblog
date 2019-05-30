import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import styles from './Feed.module.scss';
import SNSShare from '../SNSShare';
import MiniTags from './MiniTags';
import Image from '../Image';

const siteConfig = require('../../../config.js');

const Feed = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <Link to={edge.node.fields.slug}>
          <Image filename={edge.node.frontmatter.image} />
        </Link>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        <MiniTags tags={edge.node.frontmatter.tags} tagSlugs={edge.node.fields.tagSlugs}/>
        <SNSShare postUrl={`${siteConfig.url}/${edge.node.fields.slug}`} postTitle={edge.node.frontmatter.title}/>
        <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
  </div>
);

export default Feed;
