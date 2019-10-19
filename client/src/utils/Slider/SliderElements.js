import React from "react";
import PropTypes from "prop-types";

export default function SliderElements(props) {
  const { chunks, className, style, slidesToShow } = props;
  return chunks.map((chunk, i) => {
    if (chunk.length < slidesToShow) {
      const notFullStyle = {
        ...style,
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)"
      };
      notFullStyle.flex = `1 0 ${100 - chunk.length * 25}%`;
      return (
        <section key={i} className={`${className}__elements`} style={notFullStyle}>
          {chunk}
        </section>
      );
    }
    return (
      <section key={i} className={`${className}__elements`} style={style}>
        {chunk}
      </section>
    );
  });
}

SliderElements.propTypes = {
  chunks: PropTypes.array.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};
