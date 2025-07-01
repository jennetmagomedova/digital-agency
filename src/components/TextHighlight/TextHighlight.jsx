import classNames from "classnames";
import "./TextHighlight.scss";

const TextHighlight = (props) => {
  const { label, isInline } = props;
  const Component = isInline ? "span" : "div";
  return (
    <Component
      className={classNames("text--highlited", {
        ["text--highlited-inline"]: isInline,
      })}
    >
      {label}
    </Component>
  );
};

export default TextHighlight;
