import InfoBox from '../components/InfoBox';
import imgSrc1 from '../img/illustration-grow-together.svg';

const Main = () => {
    return (
        <main className="main">
            <div className="container">
            <div className="main__info-boxes">
                <InfoBox containerClassName="main" element="h2" headingText="Grow Together" headingClassName="heading-secondary" paragraphText="Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form." paragraphClassName="paragraph-secondary" src={imgSrc1} alt="Grow Together Image" className="img-secondary"/>
  <InfoBox containerClassName="main" element="h2" headingText="Grow Together" headingClassName="heading-secondary" paragraphText="Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form." paragraphClassName="paragraph-secondary" src={imgSrc1} alt="Grow Together Image" className="img-secondary"/>
            </div>
            </div>
        </main>
    )
}

export default Main;