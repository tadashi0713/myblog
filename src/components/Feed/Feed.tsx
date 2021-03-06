import React, { ReactElement } from "react";
import dayjs from "dayjs";
import { Link } from "gatsby";
import styles from "./Feed.module.scss";
import SNSShare from "../SNSShare";
import MiniTags from "./MiniTags";
import Image from "../Image/index";
import siteConfig from "../../../config.js";
import LazyLoad from "react-lazy-load";

const Feed = ({ edges }): ReactElement => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <div className={styles.feed__item} key={edge.node.fields.slug}>
        <div className={styles["feed__item-meta"]}>
          <time
            className={styles["feed__item-meta-time"]}
            dateTime={dayjs(edge.node.frontmatter.date).format("MMMM D, YYYY")}
          >
            {dayjs(edge.node.frontmatter.date).format("MMMM YYYY")}
          </time>
          <span className={styles["feed__item-meta-divider"]} />
          <span className={styles["feed__item-meta-category"]}>
            <Link
              to={edge.node.fields.categorySlug}
              className={styles["feed__item-meta-category-link"]}
            >
              {edge.node.frontmatter.category}
            </Link>
          </span>
        </div>
        <h2 className={styles["feed__item-title"]}>
          <Link
            className={styles["feed__item-title-link"]}
            to={edge.node.fields.slug}
          >
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <Link to={edge.node.fields.slug}>
          <Image
            filename={edge.node.frontmatter.image.replace("/media/", "")}
            alt={edge.node.frontmatter.title}
          />
        </Link>
        <p className={styles["feed__item-description"]}>
          {edge.node.frontmatter.description}
        </p>
        <MiniTags
          tags={edge.node.frontmatter.tags}
          tagSlugs={edge.node.fields.tagSlugs}
        />
        <LazyLoad offsetTop={400}>
          <SNSShare
            postUrl={`${siteConfig.url}/${edge.node.fields.slug}`}
            postTitle={edge.node.frontmatter.title}
          />
        </LazyLoad>
        <Link
          className={styles["feed__item-readmore"]}
          to={edge.node.fields.slug}
        >
          Read
        </Link>
      </div>
    ))}
  </div>
);

export default Feed;
