import React, { Component } from "react";
import Products from "./Products";
import Contact from "./Contact";

export default class Body extends Component {
  render() {
    return (
      <div id="container__body">
        container body
        <Products />
        <Contact />
      </div>
    );
  }
}
