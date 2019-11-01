import React, { Component } from "react";
import News from "./News/News.js";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <section className="home_footer">
        <News />
      </section>
    );
  }
}
