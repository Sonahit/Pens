import React, { Component } from "react";
import Contact from "@components/contact/Contact";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <section className="home_footer">
        <Contact />
      </section>
    );
  }
}
