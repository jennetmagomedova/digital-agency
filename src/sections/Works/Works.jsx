import Section from "@/layouts/Section";
import "./Works.scss";
import BlockInfo from "@/components/BlockInfo";
import { works } from "@/constants/works";
import WorkCard from "@/components/WorkCard";
import classNames from "classnames";

const Works = () => {
  return (
    <Section
      title="Our Works"
      isMainHeader
      description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
      bg="about"
    >
      <BlockInfo
        title={works.title}
        description={works.description}
        tag={works.tag}
      />
      <ul className="grid--2cols__list">
        {works.worksExamples.map((worksExample, index) => (
          <li
            className={classNames("grid--2cols__item", {
              ["hidden-tablet"]: index > 4,
            })}
            key={`work--${index}`}
          >
            <WorkCard {...worksExample} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Works;
