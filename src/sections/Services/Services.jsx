import Section from "@/layouts/Section";
import "./Services.scss";
import { services } from "@/constants";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <Section
      className="services"
      bg="services"
      title="Our Services"
      description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
    >
      <ul className="services__list">
        {services.map((service) => (
          <li className="services__item" key={`service-${service.title}`}>
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Services;
