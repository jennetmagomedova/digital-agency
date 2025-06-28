import classNames from "classnames";
import "./Socials.scss";
import Icon from "../Icon";

const Socials = (props) => {
  const { className, title, socialList, size, mode, borderRadius } = props;
  return (
    <div className={classNames(className, "soc1als")}>
      <span className="soc1als__title">{title}</span>
      <ul className="soc1als__list">
        {socialList.map((socialItem) => (
          <li className="soc1als__item" key={`socialLink--${socialItem.title}`}>
            <a href={socialItem.href} className="soc1als__link" target="_blank">
              <Icon
                className="soc1als__icon"
                icon={socialItem.icon}
                mode={mode}
                size={size}
                borderRadius={borderRadius}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
