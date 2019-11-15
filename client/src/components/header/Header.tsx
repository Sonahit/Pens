import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import logo from "~images/logo.svg";
import "./Header.scss";

interface Props {}
export default function Header(props: Props) {
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
