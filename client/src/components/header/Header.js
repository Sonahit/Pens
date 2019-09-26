import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "~images/logo.svg";
import "./Header.scss";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__logo clearfix">
          <img alt="logo" src={logo} />
        </div>
      </header>
    );
  }
}
