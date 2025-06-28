import Logo from "@/components/Logo";
import "./Footer.scss";
import { contacts, menuItems, socialLinks } from "@/constants";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <Logo />
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              {menuItems.map((menuItem) => (
                <li
                  className="footer__menu-item"
                  key={`footer--menuItem-${menuItem.label}`}
                >
                  <a href={menuItem.href} className="footer__menu-link">
                    {menuItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__soc1als">
            <Socials
              title="Stay Connected"
              socialList={socialLinks}
              size={24}
              mode="gray"
              borderRadius={8}
            />
          </div>
        </div>
        <div className="footer__extra">
          <div className="footer__contacts">
            <ul className="footer__contacts-list">
              {contacts.map((contact) => (
                <li
                  className="footer__contacts-item"
                  key={`contact--${contact.label}`}
                >
                  <Contact {...contact} />
                </li>
              ))}
            </ul>
          </div>
          <p className="footer__copyright">
            ©{new Date().getFullYear()}.SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
