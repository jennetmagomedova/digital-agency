import classNames from "classnames";
import "./Section.scss";
import Button from "@/components/Button";

const Section = (props) => {
  const {
    className,
    bg,
    title,
    description,
    hasLogo,
    hasButton,
    buttonProps,
    children,
  } = props;
  const titleId = `${title}-title`;
  return (
    <section className="section container" aria-labelledby={titleId}>
      <header
        className={classNames("section__header", `section__header--bg-${bg}`)}
      >
        {hasLogo && (
          <img
            className="section__logo"
            alt=""
            src="/logo-icon.svg"
            width={80}
            height={80}
            loading="lazy"
          />
        )}
        <div className="section__info">
          <h2 className="section__title" id={titleId}>
            {title}
          </h2>
          <div className="section__description">
            <p>{description}</p>
          </div>
        </div>

        {hasButton && <Button className="section__button" {...buttonProps} />}
      </header>
      <div className={classNames("section__body", className)}>{children}</div>
    </section>
  );
};

export default Section;
