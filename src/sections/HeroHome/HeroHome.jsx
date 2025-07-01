import TextHighlight from "@/components/TextHighlight";
import "./HeroHome.scss";
import Button from "@/components/Button";
import { companies } from "@/constants";

const HeroHome = () => {
  const titleId = "hero-title";
  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__body container">
        <div className="hero__body-inner">
          <h1 className="hero__title" id={titleId}>
            A Digital Product Studio
            <br />
            that will Work
          </h1>
          <div className="hero__description">
            <p>
              For <TextHighlight label="Startups" isInline /> ,{" "}
              <TextHighlight label="Enterprise leaders" isInline /> ,{" "}
              <TextHighlight label="Media & Publishers" isInline /> , and social
              good.
            </p>
          </div>
          <div className="hero__actions">
            <Button
              className="hero__actions-button"
              href="/works"
              mode="transparent"
              hasLabel
              label="Our Works"
              borderRadius={8}
              target="_blank"
            />
            <Button
              className="hero__actions-button"
              href="/contacts"
              mode="accent"
              hasLabel
              label="Contact Us"
              borderRadius={8}
              target="_blank"
            />
          </div>
        </div>
      </div>
      <div className="hero__companies container">
        <div className="hero__companies-title">Trusted By 250+ Companies</div>
        <ul className="hero__companies-list">
          {companies.map((company) => (
            <li className="hero__companies-item" key={`company-${company}`}>
              <img
                className="hero__companies-image"
                src={`/hero-logos/${company}.png`}
                alt=""
                height={50}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroHome;
