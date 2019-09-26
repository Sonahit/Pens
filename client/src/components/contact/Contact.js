import React, { Component } from "react";
import "./Contact.scss";
import Form from "./_form/Form";
export default class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <Form />
      </section>
    );
  }
}
