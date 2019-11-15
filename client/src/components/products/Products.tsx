import React from "react";
import "./Products.scss";

interface Props {}

export default function Products(props: Props) {
  /**
   * TODO: Container should be list of products from some database
   * TODO: List them via category
   * TODO: Searching Sorting
   * TODO: Product data on get with params (see amazon)
   */
  return (
    <section className="products">
      <div className="products_container">
        <div className="products_container__head">Lorem ipsum dolor</div>
        <div className="products_container__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
    </section>
  );
}
