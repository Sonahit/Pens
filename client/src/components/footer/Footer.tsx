import React, { ReactElement } from "react";
import Nav from "./_nav/Nav";
import Contact from "./_contact/Contact";
import Author from "./_author/Author";
import Info from "./_info/Info";
import PropTypes from "prop-types";
import "./Footer.scss";

import { RouteArray } from "@utils/routes";

interface LinksProps extends React.Props<any> {
	links: RouteArray;
}

export default function Footer(props: LinksProps): ReactElement {
	return (
		<footer>
			<div className="footer_container__main">
				<Nav links={props.links} />
				<Contact />
				<Info />
				<Author />
			</div>
		</footer>
	);
}

Footer.propTypes = {
	links: PropTypes.array.isRequired
};
