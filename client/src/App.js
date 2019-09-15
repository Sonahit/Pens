import React, { Component } from "react";
import Header from "@components/Header";
import Home from "@components/Home";
import Error from "@components/Error";
import Footer from "@components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "@sass/app.scss";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
