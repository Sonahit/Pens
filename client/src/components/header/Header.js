import React, { Component } from "react";
import Nav from "./_nav/Nav";
import logo from "~images/logo.svg";
import PropTypes from "prop-types";
import "./Header.scss";
export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Nav links={this.props.links} />
      </div>
    );
  }
}

Header.propTypes = {
  links: PropTypes.array.isRequired
};
