import Icon from "../components/Icon";

const ContactInfo = (props) => {
  return (
    <div className="contact-container">
      <Icon icon={props.icon} />
      <p className="contact-text">{props.text}</p>
    </div>
  );
};

export default ContactInfo;
