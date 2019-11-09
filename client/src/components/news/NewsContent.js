import React from "react";
import PropTypes from "prop-types";

export default function NewsContent(props) {
  const { children } = props;
  return <article className="news_content">{children}</article>;
}

NewsContent.propTypes = {
  children: PropTypes.any.isRequired
};
