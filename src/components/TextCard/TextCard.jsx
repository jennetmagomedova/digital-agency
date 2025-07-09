import classNames from "classnames";
import "./TextCard.scss";

const TextCard = (props) => {
  const { className, title, description, hasNumber, isHeaderAccent } = props;
  return (
    <div
      className={classNames(
        "text-card",
        {
          ["text-card--numbered"]: hasNumber,
          ["text-card--accent"]: isHeaderAccent,
        },
        className
      )}
    >
      <div className="text-card__header">
        <h3 className="text-card__title">{title}</h3>
      </div>
      <div className="text-card__description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TextCard;
