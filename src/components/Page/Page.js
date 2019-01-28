import React from 'react';
import styles from './Page.module.scss';
import Iframely from '../Iframely';

const Page = ({ title, children }) => (
  <div className={styles['page']}>
    <Iframely/>
    <div className={styles['page__inner']}>
      { title && <h1 className={styles['page__title']}>{title}</h1>}
      <div className={styles['page__body']}>
        {children}
      </div>
    </div>
  </div>
);

export default Page;
