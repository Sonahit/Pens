import React, { Component, Suspense } from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("@components/home/Home"));
const Error = React.lazy(() => import("@components/error/Error"));

import "./app.scss";

export default class App extends Component {
  render() {
    const links = [
      { name: "Products", path: "products", component: Home },
      { name: "Shipping", path: "shipping", component: Home },
      { name: "About", path: "about", component: Home },
      { name: "Contacts", path: "contacts", component: Home },
      { name: "Home", path: "/", component: Home }
    ];
    return (
      <Router>
        <div id="container">
          <Header links={links} />
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              {links.map(link => (
                <Route key={link.name} exact path={link.path === "/" ? link.path : "/" + link.path} component={link.component} />
              ))}
            </Suspense>
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
