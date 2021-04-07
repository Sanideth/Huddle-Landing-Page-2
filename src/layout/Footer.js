import Logo from "../components/Logo";
import Button from "../components/Button";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="footer__box">
          <p className="cta-title">Ready To Build Your Community?</p>
          <Button text="Get Started For Free" className="pink" />
        </div>
      </div>
      <div className="footer__contacts">
        <div className="container">
          <div className="footer__logo-container">
            <Logo firstColor="#fff" secondColor="#fff" />
          </div>
          <div className="footer__info">
            <div className="footer__contact"></div>
            <div className="footer__nav"></div>
            <div className="footer__social-media"></div>
          </div>
          <div className="footer__copyright"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
