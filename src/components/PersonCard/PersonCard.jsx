import classNames from "classnames";
import Button from "../Button";
import "./PersonCard.scss";

const PersonCard = (props) => {
  const { className, imgSrc, name, ocupation, href } = props;

  return (
    <div className={classNames(className, "person-card")}>
      <div className="person-card__image-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}/reviews/${imgSrc}.png`}
          alt=""
          className="person-card__image"
          width={60}
          height={60}
          loading="lazy"
        />
      </div>
      <div className="person-card__info">
        <div className="person-card__name">{name}</div>
        <div className="person-card__ocupation">{ocupation}</div>
      </div>
      <Button
        className="person-card__button hidden-tablet"
        href={href}
        target="__blank"
        mode="gray"
        hasLabel
        label="Open Website"
        borderRadius={8}
      />
    </div>
  );
};

export default PersonCard;
