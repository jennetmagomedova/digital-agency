import Section from "@/layouts/Section";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <Section
      title="About Us"
      isMainHeader
      description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
      bg="services"
    >
      <div className="about-us">
        <div className="about-us__info">
          <h3 className="about-us__title">About SquareUp</h3>
          <div className="about-us__description">
            <p>
              SquareUp is a digital product agency that is passionate about
              crafting exceptional digital experiences. We specialize in design,
              engineering, and project management, helping businesses thrive in
              the digital landscape. At SquareUp, we follow a structured and
              collaborative process to ensure the successful delivery of
              exceptional digital products. Our process combines industry best
              practices, creative thinking, and a client-centric approach.
            </p>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}/about/about.png`}
          alt=""
          className="about-us__image"
          width={598}
          height={571}
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default AboutUs;
