import Heading from './Heading';
import Image from './Image';


const InfoBox = (props) => {
    return (
        <div className={`${props.containerClassName}__info-box`}>
            <div className={`${props.containerClassName}__text-container`}>
                <Heading element={props.element} headingClassName={props.headingClassName} headingText={props.headingText} paragraphText={props.paragraphText} paragraphClassName={props.paragraphClassName}/>
            </div>
            <div className={`${props.containerClassName}__img-container`}>
                <Image src={props.src} alt={props.alt} className={props.className} />
            </div>
        </div>
        
    )
}

export default InfoBox;