import Logo from "@/components/Logo";
import "./Header.scss";
import classNames from "classnames";
import Button from "@/components/Button";
import { useLocation } from "react-router";
import { useState } from "react";

const Header = () => {
  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Process",
      href: "/process",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Careers",
      href: "/careers",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="header container">
      <Logo />
      <div className={classNames("header__overlay", { ["is-active"]: isOpen })}>
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map((item) => (
              <li
                className={classNames("header__menu-item", {
                  ["is-active"]: item.href === location.pathname,
                })}
                key={`menuItem-${item.label}`}
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
            href="/contacts"
            target="_blank"
            mode="accent"
            borderRadius={8}
            hasLavel
            label="Contact us"
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
    </header>
  );
};

export default Header;
