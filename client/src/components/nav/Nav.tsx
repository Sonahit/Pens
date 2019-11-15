import React, { ReactElement } from "react";
import NavButton from "./_btn/Btn";
import PropTypes from "prop-types";
import "./Nav.scss";
import { RouteArray } from "@utils/routes";

interface RouteProps {
	routes: RouteArray;
}

export default function Nav({ routes }: RouteProps): ReactElement {
	return (
		<nav>
			<ul className="nav_container">
				{routes.map(route => (
					<NavButton key={route.path} route={route} />
				))}
				<li className="nav_btn">
					<a target="blank" href="https://github.com/Sonahit">
						Github
					</a>
				</li>
			</ul>
		</nav>
	);
}

Nav.propTypes = {
	routes: PropTypes.array.isRequired
};
