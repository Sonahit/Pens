import React, { Component } from "react";
import PropTypes from "prop-types";

function ensureArray(el) {
  if (!el) {
    return [];
  }
  return Array.isArray(el) ? el : [el];
}

function splitArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

export default class Slider extends Component {
  constructor(props) {
    super(props);

    const tempArr = ensureArray(this.props.children);
    const chunks = splitArray(tempArr, this.props.slidesToShow);
    this.state = {
      index: 0,
      chunks,
      max: chunks.length
    };
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {}

  scroll(page) {}

  render() {
    const { chunks, index } = this.state;
    const chunk = chunks[index];
    console.log(chunk);
    return <span>{chunk}</span>;
  }
}

Slider.defaultProps = {
  page: 1,
  slidesToShow: 1,
  touchable: false,
  className: "slider",
  progressBar: true,
  speed: 500
};

Slider.propTypes = {
  page: PropTypes.number.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
  speed: PropTypes.number.isRequired,
  touchable: PropTypes.bool
};

const LeftArrow = props => {
  const { scroll, page } = props;
  return <div className="left-arrow-active" onClick={() => scroll(page - 1 > 0 ? page - 1 : penImgs.length)}></div>;
};

const RightArrow = props => {
  const { scroll, page } = props;
  return <div className="right-arrow-active" onClick={() => scroll(page + 1 < penImgs.length + 1 ? page + 1 : 1)}></div>;
};

LeftArrow.propTypes = {
  scroll: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

RightArrow.propTypes = { ...LeftArrow.propTypes };
