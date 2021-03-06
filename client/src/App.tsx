import React, { Suspense, useEffect, ReactElement } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Header from "@components/header/Header";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
import Loading from "@components/loading/Loading";
import routes from "@utils/routes";
import Error from "@components/error/Error";

export default function App(): ReactElement {
	useEffect(() => {
		const main: HTMLElement = document.getElementsByTagName("main")[0];
		main.style.minHeight = `${Math.floor(window.innerHeight / 2)}px`;
	});
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Header />
				<Nav routes={routes} />
				<main>
					<Switch>
						{routes.map(route => (
							<Route
								key={route.name}
								exact={route.isExact}
								path={route.path}
								render={props => <route.component {...props} />}
							/>
						))}
						<Route component={Error} />
					</Switch>
				</main>
				<Footer links={routes} />
			</Suspense>
		</Router>
	);
}
