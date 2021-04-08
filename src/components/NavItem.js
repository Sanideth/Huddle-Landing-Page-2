const NavItem = (props) => {
  return (
    <li className={`${props.className}__list-item`}>
      <a
        href="https://github.com/Sanideth"
        className={`${props.className}__list-link`}
      >
        {props.text}
      </a>
    </li>
  );
};

export default NavItem;
