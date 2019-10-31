import React, { Component, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Header from "@components/header/Header";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
import Loading from "@components/Loading.js";
import routes from "@utils/routes.js";

const Error = React.lazy(() => import("@components/error/Error"));

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.StrictMode>
          <Header />
          <Nav links={routes} />
          <main>
            <Suspense fallback={<Loading />}>
              <Switch>
                {routes.map(route => (
                  <Route key={route.name} exact path={route.path === "/" ? route.path : "/" + route.path} component={route.component} />
                ))}
                <Route component={Error} />
              </Switch>
            </Suspense>
          </main>
          <Footer links={routes} />
        </React.StrictMode>
      </Router>
    );
  }
}
