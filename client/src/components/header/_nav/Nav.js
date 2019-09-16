import React, { Component } from "react";
import NavButton from "./_btn/Btn";
import PropTypes from "prop-types";
import "./Nav.scss";
export default class Nav extends Component {
  render() {
    return (
      <div id="header_nav">
        <div className="nav_container">
          {this.props.links.map((link, id) => (
            <NavButton key={id} link={link} />
          ))}
          <a className="header_nav_btn" href="#">
            Github
          </a>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};
