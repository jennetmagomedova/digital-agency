import IconCard from "../IconCard";
import "./CardsGroup.scss";

const CardGroup = (props) => {
  const { title, cards } = props;

  return (
    <div className="cards-group">
      <h3 className="cards-group__title">{title}</h3>
      <ul className="grid--4cols__list">
        {cards.map((card, index) => (
          <li className="grid--4cols__item" key={`card--${index}`}>
            <IconCard {...card} iconMode="green-left" isTight />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardGroup;
