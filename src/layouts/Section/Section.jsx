import classNames from "classnames";
import "./Section.scss";
import Button from "@/components/Button";

const Section = (props) => {
  const {
    className,
    bg,
    title,
    isMainHeader,
    description,
    hasLogo,
    hasButton,
    children,
  } = props;

  const titleId = `${title}-title`;
  const Component = isMainHeader ? "h1" : "h2";
  const buttonProps = {
    href: `${import.meta.env.BASE_URL}/contacts`,
    mode: "accent",
    hasLabel: true,
    label: "Start Project",
    borderRadius: 8,
  };
  return (
    <section className="section container" aria-labelledby={titleId}>
      <header
        className={classNames("section__header", `section__header--bg-${bg}`)}
      >
        {hasLogo && (
          <img
            className="section__logo"
            alt=""
            src={`${import.meta.env.BASE_URL}/logo-icon.svg`}
            width={80}
            height={80}
            loading="lazy"
          />
        )}
        <div className="section__info">
          <Component
            className={classNames("section__title", { ["h2"]: isMainHeader })}
            id={titleId}
          >
            {title}
          </Component>
          <div className="section__description">
            <p>{description}</p>
          </div>
        </div>

        {hasButton && <Button className="section__button" {...buttonProps} />}
      </header>
      {children && (
        <div className={classNames("section__body", className)}>{children}</div>
      )}
    </section>
  );
};

export default Section;
