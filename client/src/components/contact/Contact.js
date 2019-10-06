import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./_header/Header";
import Body from "./_body/Body";
import Footer from "./_footer/Footer";
import Form from "./_form/Form";

import "./Contact.scss";
export default class Contact extends Component {
  render() {
    const { location } = this.props;
    if (location && location.pathname.includes("contact")) {
      return (
        <section className="contact">
          <Header />
          <Body />
          <Footer />
        </section>
      );
    }
    return (
      <section className="contact">
        <Form />
      </section>
    );
  }
}

Contact.propTypes = {
  location: PropTypes.object
};
