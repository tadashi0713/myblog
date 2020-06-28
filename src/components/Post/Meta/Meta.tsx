import React, { ReactElement } from "react";
import dayjs from "dayjs";
import styles from "./Meta.module.scss";

const Meta = ({ date }): ReactElement => (
  <div className={styles.meta}>
    <p className={styles.meta__date}>
      Published {dayjs(date).format("D MMM YYYY")}
    </p>
  </div>
);

export default Meta;
