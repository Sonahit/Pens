import React, { Component } from "react";
import "./Body.scss";
export default class Btn extends Component {
  render() {
    return (
      <section className="contact_form__body">
        <label className="contact_form__body__info" htmlFor="contact_form__info">
          Message
        </label>
        <aside className="contact_form__body__maxLength">You have reached the limit of characters</aside>
        <div className="contact_form__body__textarea">
          <textarea
            name="contact_form__info"
            maxLength="512"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."
          />
        </div>
      </section>
    );
  }
}
