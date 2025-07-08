import TextCard from "../TextCard";
import "./OrderedCardsList.scss";

const OrderedCardsList = (props) => {
  const { items } = props;
  return (
    <ol className="ordered-list grid--2cols__list">
      {items.map(({ title, description }, index) => (
        <li
          className="ordered-list__item grid--2cols__item"
          key={`${title}-${index}`}
        >
          <TextCard title={title} description={description} hasNumber />
        </li>
      ))}
    </ol>
  );
};

export default OrderedCardsList;
