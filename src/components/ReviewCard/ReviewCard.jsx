import PersonCard from "../PersonCard";
import "./ReviewCard.scss";

import React from "react";

const ReviewCard = (props) => {
  const { title, text, author } = props;
  return (
    <div className="review-card">
      <h3 className="review-card__title">{title}</h3>
      <div className="review-card__text">{text}</div>
      <PersonCard {...author} className="review-card__person" />
    </div>
  );
};

export default ReviewCard;
