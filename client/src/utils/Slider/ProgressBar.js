import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar(props) {
  const { className, outerStyle, innerStyle } = props;
  return (
    <section className={`${className}_progress-bar--outer`} style={outerStyle}>
      <div className={`${className}_progress-bar--inner`} style={innerStyle}>
        &nbsp;
      </div>
    </section>
  );
}

ProgressBar.propTypes = {
  className: PropTypes.string.isRequired,
  innerStyle: PropTypes.object,
  outerStyle: PropTypes.object
};
