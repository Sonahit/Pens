import React, { Component } from "react";
import Nav from "./Nav";
import logo from "~images/logo.svg";
export default class Body extends Component {
  render() {
    return (
      <div id="container__header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Nav />
      </div>
    );
  }
}
