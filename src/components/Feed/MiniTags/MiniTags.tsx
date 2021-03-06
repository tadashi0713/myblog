import React, { ReactElement } from "react";
import { Link } from "gatsby";
import styles from "./MiniTags.module.scss";

const MiniTags = ({ tags, tagSlugs }): ReactElement => (
  <div className={styles.tags}>
    <ul className={styles.tags__list}>
      {tagSlugs.map((slug, i) => (
        <li className={styles["tags__list-item"]} key={tags[i]}>
          <Link to={slug} className={styles["tags__list-item-link"]}>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MiniTags;
