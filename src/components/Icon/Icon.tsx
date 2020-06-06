import React, { ReactElement } from "react";
import styles from "./Icon.module.scss";

const Icon = ({ icon }): ReactElement => (
  <svg className={styles.icon} viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

export default Icon;
