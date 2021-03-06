import React from "react";
import "./Shipping.scss";

interface Props {}

export default function Shipping(props: Props) {
  return (
    /**
     * TODO: Shipping information
     * TODO: Price, current shopping cart
     * TODO: checkout button
     * TODO: Full page
     */
    <section className="shipping">
      <div className="shipping_form">
        <div className="shipping_form__header">Lorem ipsum dolor</div>
        <div className="shipping_form__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="shipping_address">
        <div className="shipping_address__header">Lorem ipsum dolor</div>
        <div className="shipping_address__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
    </section>
  );
}
