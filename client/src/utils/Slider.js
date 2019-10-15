import React, { Component } from "react";
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

export default class Slider extends Component {
  constructor(props) {
    super(props);
    const { currPage } = this.props;
    const children = ensureArray(this.props.children);
    const chunks = splitArray(children, this.props.slidesToShow);
    this.state = {
      chunks,
      max: chunks.length - 1,
      children,
      slidesToShow: this.props.slidesToShow,
      currPage
    };
    this.scroll = this.scroll.bind(this);
  }

  componentDidUpdate() {
    const chunks = splitArray(this.state.children, this.props.slidesToShow);
    this.setState(prevState => ({
      chunks,
      slidesToShow: this.props.slidesToShow,
      max: chunks.length - 1,
      currPage: prevState.currPage > chunks.length - 1 ? chunks.length - 1 : prevState.currPage
    }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.slidesToShow !== nextProps.slidesToShow) return true;
    if (this.state.currPage !== nextState.currPage) return true;
    return false;
  }

  scroll(page) {
    const slider = document.getElementsByClassName(this.props.className)[0];
    slider.style.transform = `translateX(-${page * 100}%)`;
    this.setState({
      currPage: page
    });
  }

  render() {
    const { chunks, currPage } = this.state;
    const { className, speed, progressBar } = this.props;
    return (
      <>
        <LeftArrow scroll={this.scroll} page={currPage} max={this.state.max} />
        <section
          className={className}
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "1 0 100%",
            transition: `all ${speed}ms ease`,
            transform: `translateX(-${currPage * 100}%)`
          }}
        >
          {progressBar ? <ProgressBar className={className} /> : ""}
          <SliderElements chunks={chunks} className={className} />
        </section>
        <RightArrow scroll={this.scroll} page={currPage} max={this.state.max} />
      </>
    );
  }
}

Slider.defaultProps = {
  currPage: 0,
  slidesToShow: 1,
  touchable: false,
  className: "slider",
  progressBar: true,
  speed: 500
};

Slider.propTypes = {
  slidesToShow: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
  currPage: PropTypes.number,
  speed: PropTypes.number,
  touchable: PropTypes.bool,
  progressBar: PropTypes.bool,
  className: PropTypes.string
};

const ProgressBar = props => {
  const { className } = props;
  return (
    <div className={`${className}_progress-bar--outer`} style={{ display: "none" }}>
      <div className={`${className}_progress-bar--inner`} style={{ display: "none" }}>
        WIP
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string
};

const SliderElements = props => {
  const { chunks, className } = props;
  return chunks.map((chunk, i) => (
    <section
      key={i}
      className={`${className}`}
      style={{
        display: "flex",
        flexDirection: "row",
        flex: `1 0 100%`,
        padding: "10px 10px"
      }}
    >
      {chunk}
    </section>
  ));
};

SliderElements.propTypes = {
  chunks: PropTypes.array.isRequired,
  className: PropTypes.string
};

const LeftArrow = props => {
  const { scroll, page, max } = props;
  if (page <= 0) return "";
  return <div className="left-arrow" onClick={() => scroll(page - 1 >= 0 ? page - 1 : max)}></div>;
};

const RightArrow = props => {
  const { scroll, page, max } = props;
  if (page >= max) return "";
  return <div className="right-arrow" onClick={() => scroll(page + 1 <= max ? page + 1 : 0)}></div>;
};

LeftArrow.propTypes = {
  scroll: PropTypes.func.isRequired,
  page: PropTypes.number,
  max: PropTypes.number
};

RightArrow.propTypes = { ...LeftArrow.propTypes };
