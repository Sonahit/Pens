import React, { ReactElement } from "react";
import "./About.scss";

export default function About(props: React.Props<any>): ReactElement {
	return (
		<section className="about">
			<section className="about_history__content">
				<div className="about_history__header">
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
				</div>
				<div className="about_history__body">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie
						lorem consectetur quis. Integer sodales enim justo, sit amet mollis ante porta vitae. Sed quis
						aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis, semper aliquam
						eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit
						massa ac mi. Mauris at dui consequat ligula eleifend ultricies sed et metus. Vivamus volutpat et
						diam sit amet lobortis.
					</p>
				</div>
			</section>
			<section className="about_company__content">
				<div className="about_company__header">
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
				</div>
				<div className="about_company__body">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie
						lorem consectetur quis. Integer sodales enim justo, sit amet mollis ante porta vitae. Sed quis
						aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis, semper aliquam
						eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit
						massa ac mi. Mauris at dui consequat ligula eleifend ultricies sed et metus. Vivamus volutpat et
						diam sit amet lobortis.
					</p>
				</div>
			</section>
		</section>
	);
}
