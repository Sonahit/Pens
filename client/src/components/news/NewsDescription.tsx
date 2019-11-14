import React from "react";
import PropTypes from "prop-types";

function NewsDescription(props) {
  const { children } = props;
  return (
    <article className="news_description">
        {children}
    </article>
  );
}

NewsDescription.propTypes = {
  children: PropTypes.any.isRequired
};

export default NewsDescription;
