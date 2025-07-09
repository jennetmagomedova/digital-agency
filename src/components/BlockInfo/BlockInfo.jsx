import TextHighlight from "../TextHighlight";
import "./BlockInfo.scss";

import React from "react";

const BlockInfo = (props) => {
  const { title, description, tag } = props;
  return (
    <div className="block-info">
      <h2 className="block-info__title">{title}</h2>
      <div className="block-info__description">{description}</div>
      {tag && (
        <div className="block-info__highlight">
          <TextHighlight label={tag} />
        </div>
      )}
    </div>
  );
};

export default BlockInfo;
