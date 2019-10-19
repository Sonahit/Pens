import React from "react";
import PropTypes from "prop-types";

export default function Dots(props) {
  const { className, max, page, componentStyle, notActiveStyle, activeStyle, holderStyle, scroll } = props;
  return (
    <section className={`${className}__dots`} style={componentStyle}>
      {Array.from({ length: max + 1 }, (_, i) => {
        const active = i === page;
        return (
          <div key={i} className={`${className}__dots-holder`} style={holderStyle}>
            <div
              className={`${className}__dots${active ? "--active" : ""}`}
              style={active ? activeStyle : notActiveStyle}
              onClick={() => scroll(i)}
            />
          </div>
        );
      })}
    </section>
  );
}

Dots.propTypes = {
  className: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  notActiveStyle: PropTypes.object,
  componentStyle: PropTypes.object,
  activeStyle: PropTypes.object,
  holderStyle: PropTypes.object
};
