import React, { Component } from "react";
import NavButton from "./_btn/Btn";
import PropTypes from "prop-types";
import "./Nav.scss";
export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="nav_container">
          {this.props.links.map((link, id) => (
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
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};
