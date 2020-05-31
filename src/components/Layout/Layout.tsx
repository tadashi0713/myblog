import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Layout.module.scss";
import siteConfig from "../../../config.js";

const Layout = ({ children, title, description, image }) => (
  <div className={styles.layout}>
    <Helmet>
      <title>{title}</title>
      <html lang="ja" />
      <meta name="description" content={description} />
      <meta property="og:image" content={`${siteConfig.url}${image}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    {children}
  </div>
);

export default Layout;
