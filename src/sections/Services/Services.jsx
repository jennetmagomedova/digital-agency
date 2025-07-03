import Section from "@/layouts/Section";
import { services } from "@/constants";
import IconCard from "@/components/IconCard";

const Services = () => {
  return (
    <Section
      bg="services"
      title="Our Services"
      description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
    >
      <ul className="grid--3cols__list">
        {services.map((service) => (
          <li className="grid--3cols__item" key={`service-${service.title}`}>
            <IconCard
              {...service}
              iconMode="green-right"
              hasDescription
              hasButton
              buttonLabel="Learn More"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Services;
