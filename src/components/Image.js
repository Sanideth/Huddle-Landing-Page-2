

const Image = (props) => {
    return (
        <img src={props.src} alt={props.alt} className={`img ${props.className}`}/>
    )
}


export default Image;