import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description, image }) => (
  <div className={styles.layout}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:image" content={image}/>
    </Helmet>
    {children}
  </div>
);

export default Layout;
