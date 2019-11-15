import React, { ReactElement } from "react";
import "./Form.scss";
import Body from "./_body/Body";
import Input from "./_input/Input";

interface Props {}
export default function Form(props: Props): ReactElement {
  return (
    <div className="contact_form">
      <Body />
      <Input />
    </div>
  );
}
