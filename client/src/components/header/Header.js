import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "~images/logo.svg";
import "./Header.scss";
export default class Header extends Component {
  render() {
    /**
     * #TODO
     * Make current time at the client side
     * Shopping cart (Local storage)
     * Shopping price
     * Checkout button
     */
    return (
      <header>
        <div className="header__logo clearfix">
          <img alt="logo" src={logo} />
        </div>
      </header>
    );
  }
}
