import React, { ReactElement, Props } from "react";
import "./Author.scss";

export default function Author(props: Props<any>): ReactElement {
	return (
		<div className="footer_author">
			<p> @Ivan Sadykov 2019 </p>
		</div>
	);
}
