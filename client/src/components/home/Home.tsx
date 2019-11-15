import React, { ReactElement, Props } from "react";
import Header from "./_header/Header";
import Body from "./_body/Body";
import Footer from "./_footer/Footer";
import "./Home.scss";

export default function Home(props: Props<any>): ReactElement {
	return (
		<section className="home">
			<Header />
			<Body />
			<Footer />
		</section>
	);
}
