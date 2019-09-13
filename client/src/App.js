import React, { Component } from "react";
import Header from "@components/Header";
import Body from "@components/Body";
import Footer from "@components/Footer";
import "@sass/app.scss";
export default class App extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
