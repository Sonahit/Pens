import React, { ReactElement } from "react";
import Form from "../_form/Form";

import "./Body.scss";

interface Props {}
export default function Footer(props: Props): ReactElement {
  return (
    <section className="contact_body">
      <Form />
    </section>
  );
}
