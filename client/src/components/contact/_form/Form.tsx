import React from "react";
import "./Form.scss";
import Body from "./_body/Body";
import Input from "./_input/Input";

export default function Form(props) {
  return (
    <div className="contact_form">
      <Body />
      <Input />
    </div>
  );
}
