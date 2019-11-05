import React, { Component, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Header from "@components/header/Header";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
import Loading from "@components/loading/Loading.js";
import routes from "@utils/routes.js";
import Error from "@components/error/Error.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Nav links={routes} />
        <main>
          <Suspense fallback={<Loading />}>
            <Switch>
              {routes.map(route => (
                <Route key={route.name} exact={route.isExact} path={route.path} render={props => <route.component {...props} />} />
              ))}
              <Route component={Error} />
            </Switch>
          </Suspense>
        </main>
        <Footer links={routes} />
      </Router>
    );
  }
}
