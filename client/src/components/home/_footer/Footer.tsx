import React, { ReactElement } from "react";
import News from "./News/News";
import "./Footer.scss";

export default function Footer(props: React.Props<any>): ReactElement {
	return (
		<section className="home_footer">
			<News />
		</section>
	);
}
