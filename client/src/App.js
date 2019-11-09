import React, { Suspense, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Header from "@components/header/Header";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
import Loading from "@components/loading/Loading.js";
import routes from "@utils/routes.js";
import Error from "@components/error/Error.js";

export default function App() {
  useEffect(() => {
    const main = document.getElementsByTagName("main")[0];
    main.style.minHeight = `${Math.floor(window.innerHeight / 2)}px`;
  });
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <Nav links={routes} />
        <main>
          <Switch>
            {routes.map(route => (
              <Route key={route.name} exact={route.isExact} path={route.path} render={props => <route.component {...props} />} />
            ))}
            <Route component={Error} />
          </Switch>
        </main>
        <Footer links={routes} />
      </Suspense>
    </Router>
  );
}

//TODO: Refactor to functions
