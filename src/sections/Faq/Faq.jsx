import Section from "@/layouts/Section";
import "./Faq.scss";
import { faq } from "@/constants";
import Accordion from "@/components/Accordion";
import classNames from "classnames";

const Faq = () => {
  const columnItemsNumber = Math.ceil(faq.length / 2);

  return (
    <Section
      title="Frequently Asked Questions"
      description="Still you have any questions? Contact our Team via hello@squareup.com"
      bg="faq"
      className="faq"
    >
      <ol className="faq__list">
        {faq.map((faqItem, index) => (
          <li
            className={classNames("faq__item", {
              ["hidden-mobile"]: index > columnItemsNumber - 1,
              ["faq__item--border-bottom"]:
                (index + 1) % columnItemsNumber === 0,
            })}
            key={`question-${index}`}
          >
            <Accordion
              {...faqItem}
              name="questions"
              isOpen={index === 0}
              id={`question--${index}`}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Faq;
