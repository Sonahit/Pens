import React, { Component } from "react";
import "./Form.scss";
import Body from "./_body/Body";
import Btn from "./_btn/Btn";
import Input from "./_input/Input";

export default class Form extends Component {
  render() {
    return (
      <div className="contact_form">
        <Body />
        <Btn />
        <Input />
      </div>
    );
  }
}
