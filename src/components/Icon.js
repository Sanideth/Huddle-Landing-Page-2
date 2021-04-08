const Icon = (props) => {
  const checkLink = props.link ? (
    <div className="svg-container">
      <a
        href="https://github.com/Sanideth/Huddle-Landing-Page-2"
        className="svg-link"
      >
        {props.icon}
      </a>
    </div>
  ) : (
    <div className="svg-container">{props.icon}</div>
  );
  return <>{checkLink}</>;
};

export default Icon;
