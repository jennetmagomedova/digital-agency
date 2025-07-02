import classNames from "classnames";
import Button from "../Button";
import Icon from "../Icon";
import "./IconCard.scss";

const IconCard = (props) => {
  const {
    className,
    icon,
    iconMode,
    title,
    hasDescription,
    description,
    hasButton,
    buttonLabel,
    isWide,
  } = props;

  return (
    <div
      className={classNames(
        "icon-card",
        { ["icon-card--wide"]: isWide },
        className
      )}
    >
      <header className="icon-card__header">
        <Icon
          className="icon-card__icon"
          icon={icon}
          size={40}
          mode={iconMode}
          borderRadius={10}
        />
        <h3 className="icon-card__title">{title}</h3>
      </header>
      {hasDescription && (
        <div className="icon-card__description">
          <p>{description}</p>
        </div>
      )}

      {hasButton && (
        <Button
          className="icon-card__button"
          href="#"
          mode="gray"
          hasLabel
          label={buttonLabel}
          borderRadius={8}
        />
      )}
    </div>
  );
};

export default IconCard;
