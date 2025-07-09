import OrderedCardsList from "@/components/OrderedCardsList";
import "./Story.scss";
import { story } from "@/constants/story";

const Story = () => {
  return (
    <section className="story container">
      <header className="story__header">
        <h2 className="story__title">Our Story</h2>
      </header>
      <OrderedCardsList items={story} isHeaderAccent />
    </section>
  );
};

export default Story;
