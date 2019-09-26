import React, { Component } from "react";
import Preview from "./preview/Preview";
import History from "./history/History";
import Clients from "./clients/Clients";
import "./Body.scss";

export default class Home extends Component {
  render() {
    return (
      <section className="home_body">
        <History />
        <Preview />
        <Clients />
      </section>
    );
  }
}
