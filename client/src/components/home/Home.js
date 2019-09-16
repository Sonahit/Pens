import React, { Component } from "react";
import Products from "../products/Products";
import Contact from "../contact/Contact";
import "./Home.scss";

export default class Body extends Component {
  render() {
    return (
      <div id="home">
        container body
        <Products />
        <Contact />
      </div>
    );
  }
}
