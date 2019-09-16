import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
const Home = React.lazy(() => import("@components/home/Home"));
const Products = React.lazy(() => import("@components/products/Products"));
const About = React.lazy(() => import("@components/about/About"));
const Shipping = React.lazy(() => import("@components/shipping/Shipping"));
const Contact = React.lazy(() => import("@components/contact/Contact"));
const Error = React.lazy(() => import("@components/error/Error"));

import "./app.scss";

export default class App extends Component {
  render() {
    const links = [
      { name: "Home", path: "/", component: Home },
      { name: "Products", path: "products", component: Products, drop: <div>123</div> },
      { name: "Shipping", path: "shipping", component: Shipping },
      { name: "About", path: "about", component: About },
      { name: "Contact", path: "contact", component: Contact }
    ];
    return (
      <>
        <Header links={links} />
        <main>
          <div id="container_body">
            <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                {links.map(link => (
                  <Route key={link.name} exact path={link.path === "/" ? link.path : "/" + link.path} component={link.component} />
                ))}
              </Suspense>
              <Route component={Error} />
            </Switch>
          </div>
        </main>
        <Footer links={links} />
      </>
    );
  }
}
