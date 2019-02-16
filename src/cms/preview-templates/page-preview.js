import React from 'react';
import Iframely from '../../components/Iframely'

const PagePreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="page">
      <Iframely/>
      <h1 className="page__title">{title}</h1>
      <div className="page__body">{ body }</div>
    </div>
  );
};

export default PagePreview;
