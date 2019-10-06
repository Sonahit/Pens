import React, { Component } from "react";
import Preview from "./preview/Preview";
import Products from "./products/Products";
import Clients from "./clients/Clients";
import "./Body.scss";

export default class Home extends Component {
  render() {
    return (
      <section className="home_body">
        <Products />
        <Preview />
        <Clients />
      </section>
    );
  }
}
