import Logo from "../components/Logo";
import Button from "../components/Button";
import ContactInfo from "../components/ContactInfo";
import NavItem from "../components/NavItem";
import Icon from "../components/Icon";
import { ReactComponent as IconLocation } from "../img/icon-location.svg";
import { ReactComponent as IconPhone } from "../img/icon-phone.svg";
import { ReactComponent as IconMail } from "../img/icon-email.svg";
import { ReactComponent as IconFacebook } from "../img/facebook.svg";
import { ReactComponent as IconTwitter } from "../img/twitter.svg";
import { ReactComponent as IconInstagram } from "../img/instagram.svg";

const MockArr = [
  "About Us",
  "Career",
  "What We Do",
  "Blog",
  "FAQ",

  "Contact Us",
];

const Footer = () => {
  const renderNav = MockArr.map((item, index) => (
    <NavItem className="footer" text={item} key={index} />
  ));
  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="footer__box">
          <p className="cta-title">
            <strong>Ready To Build Your Community?</strong>
          </p>
          <Button text="Get Started For Free" className="pink" />
        </div>
      </div>
      <div className="footer__contacts">
        <div className="container">
          <div className="footer__logo-container">
            <Logo firstColor="#fff" secondColor="#fff" />
          </div>
          <div className="footer__info">
            <div className="footer__contact">
              <ContactInfo
                icon={<IconLocation />}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua"
              />
              <ContactInfo icon={<IconPhone />} text="+1-543-123-4567" />
              <ContactInfo icon={<IconMail />} text="example@huddle.com" />
            </div>
            <nav className="footer__nav">
              <ul className="footer__list">{renderNav}</ul>
            </nav>
            <div className="footer__social">
              <div className="footer__social-icons-container">
                <Icon icon={<IconFacebook />} link={true} />
                <Icon icon={<IconTwitter />} link={true} />
                <Icon icon={<IconInstagram />} link={true} />
              </div>

              <div className="footer__copyright">
                <p className="footer__copyright-text">
                  &copy; Copyright 2018 Huddle. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
