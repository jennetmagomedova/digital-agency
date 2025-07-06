import Section from "@/layouts/Section";
import { allServices } from "@/constants/allServices";
import CardGroup from "@/components/CardsGroup/CardsGroup";
import BlockInfo from "@/components/BlockInfo";

const AllServices = () => {
  return (
    <Section
      bg="services"
      title="Our Services"
      isMainHeader
      description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
    >
      <ul className="allservices__list">
        {allServices.map(({ title, description, tag, blocks }, index) => (
          <li className="allservices__item" key={`servicesItem--${index}`}>
            <BlockInfo title={title} description={description} tag={tag} />
            <ul className="allservices__block-list">
              {blocks.map((block, index) => (
                <li
                  className="allservices__block-item"
                  key={`servicesBlock--${index}`}
                >
                  <CardGroup title={block.title} cards={block.cards} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default AllServices;
