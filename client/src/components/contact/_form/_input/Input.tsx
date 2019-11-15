import React, { ReactElement } from "react";
import "./Input.scss";

interface Props {}
export default function Input(props: Props): ReactElement {
  return (
    <section className="contact_form__input">
      <label htmlFor="cmpny">Contact person</label>
      <input id="cmpny" type="text" placeholder="Name" />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Email" />
      <label htmlFor="tel">Telephone</label>
      <input id="tel" type="tel" placeholder="Contact number" />
    </section>
  );
}
