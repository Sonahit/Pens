import React, { Component } from "react";
import Suggestions from "./suggestions/Suggestions";
import Products from "./products/Products";
import "./Body.scss";

export default function Home(props) {
  return (
    <section className="home_body">
      <Products />
      <Suggestions />
    </section>
  );
}
