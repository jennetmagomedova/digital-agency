import classNames from "classnames";
import Button from "../Button";
import Icon from "../Icon";
import "./ServiceCard.scss";

const ServiceCard = (props) => {
  const { className, icon, title, description } = props;

  return (
    <div className={classNames("service-card", className)}>
      <header className="service-card__header">
        <Icon
          className="service-card__icon"
          icon={icon}
          size={40}
          mode="green-right"
          borderRadius={10}
        />
        <h3 className="service-card__title">{title}</h3>
      </header>
      <div className="service-card__description">
        <p>{description}</p>
      </div>
      <Button
        className="service-card__button"
        href="#"
        mode="gray"
        hasLabel
        label="Learn More"
        borderRadius={8}
      />
    </div>
  );
};

export default ServiceCard;
