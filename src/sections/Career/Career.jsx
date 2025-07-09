import Section from "@/layouts/Section";
import BlockInfo from "@/components/BlockInfo";
import { careerOpenings, careerReasons } from "@/constants/careers";
import TextCard from "@/components/TextCard";
import CardsGroup from "@/components/CardsGroup/CardsGroup";

const Career = () => {
  return (
    <Section
      title="Join Our Team at SquareUp"
      isMainHeader
      description="Unlock your potential and join our team of innovators and problem solvers."
      bg="process"
    >
      <div className="career__block">
        <BlockInfo
          title={careerReasons.title}
          description={careerReasons.description}
          tag={careerReasons.tag}
        />
        <ul className="grid--2cols__list">
          {careerReasons.reasons.map((reason, index) => (
            <li className="grid--2cols__item" key={`career-reason--${index}`}>
              <TextCard {...reason} isHeaderAccent />
            </li>
          ))}
        </ul>
      </div>

      <div className="career__block">
        <BlockInfo
          title={careerOpenings.title}
          description={careerOpenings.description}
        />
        {careerOpenings.openings.map((opening, index) => (
          <CardsGroup
            title={opening.title}
            cards={opening.cards}
            columns={3}
            iconMode="green-left"
            isTight={false}
            key={`career-opening--${index}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Career;
