import classNames from "classnames";
import "./TextHighlight.scss";

const TextHighlight = (props) => {
  const { className, label, isInline } = props;

  return (
    <span
      className={classNames(
        "text--highlited",
        {
          ["text--highlited-inline"]: isInline,
        },
        className
      )}
    >
      {label}
    </span>
  );
};

export default TextHighlight;
