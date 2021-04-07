import InfoBox from "../components/InfoBox";
import imgSrc1 from "../img/illustration-grow-together.svg";
import imgSrc2 from "../img/illustration-flowing-conversation.svg";
import imgSrc3 from "../img/illustration-your-users.svg";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__info-boxes">
          <InfoBox
            containerClassName="main"
            element="h2"
            headingText="Grow Together"
            headingClassName="heading-secondary"
            paragraphText="Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form."
            paragraphClassName="paragraph-secondary"
            src={imgSrc1}
            alt="Grow Together Image"
            className="img-secondary"
          />
          <InfoBox
            containerClassName="main"
            element="h2"
            headingText="Flowing Conversations"
            headingClassName="heading-secondary"
            paragraphText="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
            have just-in-time loading for a more natural flow."
            paragraphClassName="paragraph-secondary"
            src={imgSrc2}
            alt="Grow Together Image"
            className="img-secondary"
            reverse={true}
          />
          <InfoBox
            containerClassName="main"
            element="h2"
            headingText="Your Users"
            headingClassName="heading-secondary"
            paragraphText="It takes no time at all to integrate Huddle with your app's authentication solution. 
            This means, once signed in to your app, your users can start chatting immediately."
            paragraphClassName="paragraph-secondary"
            src={imgSrc3}
            alt="Grow Together Image"
            className="img-secondary"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
