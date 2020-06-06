import React, { ReactElement } from "react";

const PagePreview = ({ entry, widgetFor }): ReactElement => {
  const body = widgetFor("body");
  const title = entry.getIn(["data", "title"]);

  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__body">{body}</div>
    </div>
  );
};

export default PagePreview;
