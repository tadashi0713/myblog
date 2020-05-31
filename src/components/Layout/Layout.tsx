import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Layout.module.scss";

const Layout = ({ children, title, description, image }) => (
  <div className={styles.layout}>
    <Helmet>
      <title>{title}</title>
      <html lang="ja" />
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    {children}
  </div>
);

export default Layout;
