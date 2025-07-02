import Section from "@/layouts/Section";
import "./Choice.scss";
import { choiceReasons } from "@/constants";
import IconCard from "@/components/IconCard";

const Choice = () => {
  return (
    <Section
      title="Why Choose SquareUp?"
      description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
      bg="choice"
    >
      <ul className="choice__list">
        {choiceReasons.map((choiceReason) => (
          <li className="choice__item" key={`choice--${choiceReason.title}`}>
            <IconCard
              {...choiceReason}
              hasDescription
              iconMode="green-right"
              isWide
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Choice;
