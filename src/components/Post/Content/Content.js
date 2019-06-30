import React from 'react';
import styles from './Content.module.scss';
import Image from '../../Image/index';

const Content = ({ body, title, image }) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']}>
      <p>
        <Image className={styles['content__image']} filename={image} alt={title}/>
      </p>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </div>
);

export default Content;
