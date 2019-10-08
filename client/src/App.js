import React, { Component, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./app.scss";

import Header from "@components/header/Header";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
import Loading from "@components/Loading.js";

const Home = React.lazy(() => import("@components/home/Home"));
const Products = React.lazy(() => import("@components/products/Products"));
const About = React.lazy(() => import("@components/about/About"));
const Shipping = React.lazy(() => import("@components/shipping/Shipping"));
const Contact = React.lazy(() => import("@components/contact/Contact"));
const Error = React.lazy(() => import("@components/error/Error"));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: "Home",
          path: "/",
          component: Home
        },
        {
          name: "Products",
          path: "products",
          component: Products,
          dropLinks: [
            {
              name: "Luxury",
              path: "products/luxury"
            },
            {
              name: "Lorem Ipsum",
              path: "#"
            },
            {
              name: "Lorem Ipsum",
              path: "#"
            }
          ]
        },
        {
          name: "Shipping",
          path: "shipping",
          component: Shipping
        },
        {
          name: "About",
          path: "about",
          component: About
        },
        {
          name: "Contact",
          path: "contact",
          component: Contact
        }
      ]
    };
  }
  render() {
    return (
      <Router>
        <React.StrictMode>
          <Header />
          <Nav links={this.state.links} />
          <main>
            <Suspense fallback={Loading}>
              <Switch>
                {this.state.links.map(link => (
                  <Route key={link.name} exact path={link.path === "/" ? link.path : "/" + link.path} component={link.component} />
                ))}
                <Route component={Error} />
              </Switch>
            </Suspense>
          </main>
          <Footer links={this.state.links} />
        </React.StrictMode>
      </Router>
    );
  }
}
