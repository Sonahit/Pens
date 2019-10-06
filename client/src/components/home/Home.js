import React, { Component } from "react";
import Header from "./_header/Header";
import Body from "./_body/Body";
import Footer from "./_footer/Footer";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <Header />
        <Body />
        <Footer />
      </section>
    );
  }
}
