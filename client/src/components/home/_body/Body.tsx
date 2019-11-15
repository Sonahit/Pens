import React, { ReactElement } from "react";
import Suggestions from "./suggestions/Suggestions";
import Products from "./products/Products";
import "./Body.scss";

export default function Home(props: React.Props<any>): ReactElement {
	return (
		<section className="home_body">
			<Products />
			<Suggestions />
		</section>
	);
}
