import React, { ReactElement } from "react";
import PropTypes from "prop-types";

export default function NewsContent(props: React.Props<any>): ReactElement {
	const { children } = props;
	return <article className="news_content">{children}</article>;
}

NewsContent.propTypes = {
	children: PropTypes.any.isRequired
};
