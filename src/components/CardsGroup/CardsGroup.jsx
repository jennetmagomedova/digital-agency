import IconCard from "../IconCard";
import "./CardsGroup.scss";

const CardsGroup = (props) => {
  const {
    title,
    cards,
    columns = 4,
    iconMode = "green-left",
    isTight = true,
  } = props;

  return (
    <div className="cards-group">
      <h3 className="cards-group__title">{title}</h3>
      <ul className={`grid--${columns}cols__list`}>
        {cards.map((card, index) => (
          <li className={`grid--${columns}cols__item`} key={`card--${index}`}>
            <IconCard {...card} iconMode={iconMode} isTight={isTight} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsGroup;
