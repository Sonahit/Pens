import React from "react";
import PropTypes from "prop-types";

export const LeftArrow = props => {
  const { scroll, page, max, className, style, holderStyle } = props;
  return (
    <section className={`${className}__arrow-holder`} style={holderStyle}>
      <div className={`${className}__left-arrow`} style={style} onClick={() => scroll(page - 1 >= 0 ? page - 1 : max)} />
    </section>
  );
};

export const RightArrow = props => {
  const { scroll, page, max, className, style, holderStyle } = props;
  return (
    <section className={`${className}__arrow-holder`} style={holderStyle}>
      <div className={`${className}__right-arrow`} style={style} onClick={() => scroll(page + 1 <= max ? page + 1 : 0)} />
    </section>
  );
};

LeftArrow.propTypes = {
  className: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  style: PropTypes.object,
  scroll: PropTypes.func.isRequired
};

RightArrow.propTypes = { ...LeftArrow.propTypes };
