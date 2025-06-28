import classNames from "classnames";
import "./Button.scss";
import { arrowTopRight } from "@/assets/icons";

const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    target,
    /** accent, transparent */
    mode,
    hasLabel = true,
    label,
    extraAttrs,
    hasIcon = false,
    /** 8, 10 */
    borderRadius,
  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? "a" : "button";
  const linkProps = { href, target };
  const buttonProps = { type };
  const specificProps = isLink ? linkProps : buttonProps;

  return (
    <Component
      className={classNames(
        className,
        "button",
        `button--color-${mode}`,
        `button--border-${borderRadius}`
      )}
      title={label}
      aria-label={label}
      {...specificProps}
      {...extraAttrs}
    >
      {hasIcon && <img src={arrowTopRight} aria-label="Visit other page" />}
      {hasLabel && label}
    </Component>
  );
};

export default Button;
