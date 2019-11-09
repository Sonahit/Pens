import React from "react";
import NavButton from "./_btn/Btn";
import PropTypes from "prop-types";
import "./Nav.scss";
export default function Nav(props) {
  return (
    <nav>
      <ul className="nav_container">
        {props.links.map(link => (
          <NavButton key={link.path} link={link} />
        ))}
        <li className="nav_btn">
          <a target="blank" href="https://github.com/Sonahit">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};
