import React from "react";
import Header from "./_header/Header";
import Body from "./_body/Body";
import Footer from "./_footer/Footer";
import "./Home.scss";

export default function Home(props) {
  return (
    <section className="home">
      <Header />
      <Body />
      <Footer />
    </section>
  );
}
