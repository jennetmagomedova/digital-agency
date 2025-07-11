import Logo from "@/components/Logo";
import "./Header.scss";
import classNames from "classnames";
import Button from "@/components/Button";
import { menuItems } from "@/constants";
import { useLocation } from "react-router";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo />
        <div
          className={classNames("header__overlay", { ["is-active"]: isOpen })}
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.slice(0, menuItems.length - 1).map((item) => (
                <li
                  className={classNames("header__menu-item", {
                    ["is-active"]:
                      item.href ==
                      `${import.meta.env.BASE_URL}${location.pathname}`,
                  })}
                  key={`header--menuItem-${item.label}`}
                >
                  <a href={item.href} className="header__menu-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              href={`${import.meta.env.BASE_URL}/contacts`}
              mode="accent"
              borderRadius={8}
              hasLabel
              label="Contact Us"
            />
          </div>
        </div>
        <div
          className={classNames("header__burger", "visible-tablet", {
            ["is-active"]: isOpen,
          })}
          onClick={toggleMenu}
        >
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
