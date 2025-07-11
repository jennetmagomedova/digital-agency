import TextHighlight from "@/components/TextHighlight";
import "./StartProject.scss";
import Button from "@/components/Button";

const StartProject = () => {
  return (
    <section className="start-project container">
      <header className="start-project__header">
        <img
          src={`${import.meta.env.BASE_URL}/logo-icon.svg`}
          alt=""
          className="start-project__image"
          width={150}
          height={150}
          loading="lazy"
        />
        <div className="start-project__info">
          <h2 className="start-project__title">
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency.....
          </h2>
          <div className="start-project__description">
            <p>
              Combining the power of design, engineering, and project management
              to create transformative digital experiences. They invite you to
              join them on their journey and discover how they can help bring
              your digital ideas to life.
            </p>
          </div>
        </div>
      </header>
      <div className="start-project__body">
        <span>Welcome to SquareUp</span>
        <TextHighlight
          className="start-project__highlight"
          label="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
        />
        <Button
          className="start-project__button"
          href={`${import.meta.env.BASE_URL}/contacts`}
          mode="accent"
          hasLabel
          label="Start Project"
          borderRadius={8}
        />
      </div>
    </section>
  );
};

export default StartProject;
