import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <ul>
          <NavButtons />
        </ul>
      </div>
    );
  }
}

const NavButtons = () => {
  const links = ["products", "shipping", "about", "contacts", "/"];

  return links.map((link, id) => <NavButton key={id} link={link} />);
};

const NavButton = props => {
  return (
    <li className="nav__elem">
      <Link to={props.link}>Lorem ipsum dolor sit amet</Link>
    </li>
  );
};

NavButton.propTypes = {
  link: PropTypes.string.isRequired
};
