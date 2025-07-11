import Section from "@/layouts/Section";
import "./ContactUs.scss";
import { contacts, socialLinks } from "@/constants";
import Contact from "@/components/ContactTag";
import ContactForm from "@/components/ContactForm";
import TextHighlight from "@/components/TextHighlight";
import Socials from "@/components/Socials";

const ContactUs = () => {
  return (
    <Section
      title="Contact Us"
      isMainHeader
      description="Get in touch with us today and let us help you with any questions or inquiries you may have."
      bg="contact"
    >
      <ul className="contact-us__list">
        {contacts.map((contact, index) => (
          <li className="contact-us__item" key={`contact--${index}`}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
      <ContactForm />
      <div className="contact-us__info">
        <div className="contact-us__hours">
          <span>Operating Days</span>
          <TextHighlight label="Monday to Friday" />
        </div>
        <Socials
          className="contact-us__soc1als"
          title="Stay Connected"
          socialList={socialLinks}
          size={24}
          mode="gray"
          borderRadius={8}
        />
      </div>
    </Section>
  );
};

export default ContactUs;
