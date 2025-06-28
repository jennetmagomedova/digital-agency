import classNames from "classnames";
import "./Icon.scss";

const Icon = (props) => {
  const {
    className,
    icon,
    size,
    /**gray, green-left, greem-right*/ mode,
    borderRadius,
  } = props;
  return (
    <div
      className={classNames(
        className,
        "icon",
        `icon--bg-${mode}`,
        `icon--borderRadius-${borderRadius}`
      )}
    >
      <img
        src={icon}
        alt=""
        className="icon__image"
        width={size}
        height={size}
      />
    </div>
  );
};

export default Icon;
