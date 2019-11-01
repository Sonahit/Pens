import React, { Component } from "react";
import Suggestions from "./suggestions/Suggestions";
import Products from "./products/Products";
import "./Body.scss";

export default class Home extends Component {
  render() {
    return (
      <section className="home_body">
        <Products />
        <Suggestions />
      </section>
    );
  }
}
