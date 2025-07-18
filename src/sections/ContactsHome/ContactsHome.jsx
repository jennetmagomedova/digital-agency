import Section from "@/layouts/Section";

import ContactForm from "@/components/ContactForm";

const ContacsHome = () => {
  return (
    <Section
      title="Thank you for your Interest in SquareUp."
      description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
      bg="contact"
      hasLogo
      hasButton
    >
      <ContactForm />
    </Section>
  );
};

export default ContacsHome;
