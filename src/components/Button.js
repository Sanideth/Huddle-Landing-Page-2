

const Button = (props) => {
    return (
        <a href="https://github.com/Sanideth/Huddle-Landing-Page-2" className={`btn btn-${props.className}` }>{props.text}</a>
    )
}


export default Button;