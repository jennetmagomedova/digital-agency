import Section from "@/layouts/Section";
import "./AllServices.scss";

import React from "react";
import { allServices } from "@/constants/allServices";
import TextHighlight from "@/components/TextHighlight";
import CardGroup from "@/components/CardsGroup/CardsGroup";

const AllServices = () => {
  return (
    <Section
      bg="services"
      title="Our Services"
      isMainHeader
      description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
    >
      <ul className="allservices__list">
        {allServices.map((service, index) => (
          <li className="allservices__item" key={`servicesItem--${index}`}>
            <div className="allservices__info">
              <h2 className="allservices__title">{service.title}</h2>
              <div className="allservices__description">
                {service.description}
              </div>
              <div className="allservices__highlight">
                <TextHighlight
                  className="allservices__highlight"
                  label={service.tag}
                />
              </div>
            </div>
            <ul className="allservices__block-list">
              {service.blocks.map((block, index) => (
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
