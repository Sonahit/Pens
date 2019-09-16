import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div className="footer_nav">
        <ul>
          {this.props.links.map(link => (
            <li key={link.path}>
              <Link className="footer_nav_btn" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};
