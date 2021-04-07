

const Heading = (props) => {
    const Element = `${props.element}` // corresponding heading element, h1 or h2 or etc;
    return (
        <>
        <Element className={props.headingClassName}>{props.headingText}</Element>
        <p className={`paragraph ${props.paragraphClassName}`}>{props.paragraphText}</p>
        </>
    )
}


export default Heading;