import classNames from "classnames";
import Button from "../Button";
import "./WorkCard.scss";

const WorkCard = (props) => {
  const { className, title, imgSrc, clientName, href, description } = props;
  return (
    <div className={classNames("work-card", className)}>
      <h3 className="work-card__title">{title}</h3>
      <div className="work-card__body">
        <img
          className="work-card__image"
          src={`/src/assets/images/works/${imgSrc}.jpg`}
          alt=""
          width={698}
          height={423}
          loading="lazy"
        />
        <div className="work-card__info">
          <div className="work-card__company">
            <h4 className="work-card__company-name">{clientName}</h4>
            <Button
              className="work-card__company-link"
              href={href}
              target="__blank"
              mode="gray"
              borderRadius={8}
              hasLabel
              label={href}
            />
          </div>
          <Button
            href={href}
            className="work-card__button"
            mode="gray"
            hasIcon
            borderRadius={8}
          />
        </div>
        <div className="work-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
