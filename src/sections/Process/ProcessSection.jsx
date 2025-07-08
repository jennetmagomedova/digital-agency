import BlockInfo from "@/components/BlockInfo";
import { processSteps } from "@/constants/processSteps";
import Section from "@/layouts/Section";

import React from "react";
import OrderedCardsList from "@/components/OrderedCardsList";

const ProcessSection = () => {
  const { title, description, tag, steps } = processSteps;
  return (
    <Section
      title="Process of Starting the Project"
      isMainHeader
      description="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
      bg="process"
    >
      <BlockInfo title={title} description={description} tag={tag} />
      <OrderedCardsList items={steps} />
    </Section>
  );
};

export default ProcessSection;
