import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "~images/logo.svg";
import "./Header.scss";
export default class Header extends Component {
  render() {
    //  TODO: Make current time ? at the client side
    //  TODO: Shopping cart (Local storage)
    //  TODO: Shopping price
    //  TODO: Checkout button
    return (
      <header>
        <div className="header__logo clearfix">
          <img alt="logo" src={logo} />
        </div>
      </header>
    );
  }
}
