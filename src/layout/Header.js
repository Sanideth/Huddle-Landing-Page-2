import Logo from "../components/Logo";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Image from "../components/Image";
import heroImgSrc from "../img/illustration-mockups.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__intro">
          <Logo firstColor="#ff52bf" secondColor="#00252e" />
          <Button text="Try It Free" className="white" />
        </div>
        <div className="header__hero">
          <div className="header__hero-text-container">
            <Heading
              element="h1"
              headingText="Build The Community Your Fans Will Love"
              headingClassName="heading-primary"
              paragraphText="Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion."
              paragraphClassName="paragraph-primary"
            />
            <div className="header__hero-Cta-container">
              <Button text="Get Started For Free" className="pink" />
            </div>
          </div>
          <div className="header__hero-img-container">
            <Image
              src={heroImgSrc}
              alt="Mockup Image"
              className="img-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
