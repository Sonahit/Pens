import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./_header/Header";
import Body from "./_body/Body";
import Footer from "./_footer/Footer";

import "./Contact.scss";

export default class Contact extends Component {
  render() {
    /**
     * Make better version with address, color, contact form
     */
    return (
      <section className="contact">
        <Header />
        <Body />
        <Footer />
      </section>
    );
  }
}

Contact.propTypes = {
  location: PropTypes.object
};
