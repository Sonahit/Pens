import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import "./Slider.scss";

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

const sliderStyle = {
  display: "flex",
  flexDirection: "row",
  flex: "0 1 100%",
  padding: "10px 0px 10px 0px"
};

export default class Slider extends Component {
  constructor(props) {
    super(props);
    const children = ensureArray(this.props.children);
    const chunks = splitArray(children, this.props.slidesToShow);

    sliderStyle.flex = `1 0 ${100 / this.props.slidesToShow}%`;
    this.state = {
      index: 0,
      chunks,
      max: chunks.length,
      children,
      slidesToShow: this.props.slidesToShow
    };

    this.scroll = this.scroll.bind(this);
  }

  componentDidUpdate() {
    this.setState({
      chunks: splitArray(this.state.children, this.props.slidesToShow),
      slidesToShow: this.props.slidesToShow
    });
  }

  shouldComponentUpdate(props) {
    const { slidesToShow } = props;
    if (!this.state.slidesToShow) return true;
    if (this.state.slidesToShow !== slidesToShow) return true;
    return false;
  }

  scroll(page) {
    console.log(page);
  }

  render() {
    const { chunks, index } = this.state;
    const chunk = chunks[index];
    return (
      <section className="slider" style={sliderStyle}>
        <LeftArrow scroll={this.scroll} page={index} max={this.state.max} />
        {chunk}
        <RightArrow scroll={this.scroll} page={index} max={this.state.max} />
      </section>
    );
  }
}

Slider.defaultProps = {
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
  const { scroll, page, max } = props;
  if (page === 0) return "";
  return <div className="left-arrow" onClick={() => scroll(page - 1 > 0 ? page - 1 : max)}></div>;
};

const RightArrow = props => {
  const { scroll, page, max } = props;
  if (page === max) return "";
  return <div className="right-arrow" onClick={() => scroll(page + 1 < max ? page + 1 : 1)}></div>;
};

LeftArrow.propTypes = {
  scroll: PropTypes.func.isRequired,
  page: PropTypes.number,
  max: PropTypes.number
};

RightArrow.propTypes = { ...LeftArrow.propTypes };
