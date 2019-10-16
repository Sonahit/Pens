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

const styleArrow = {
  height: "60px",
  width: "60px",
  position: "absolute",
  top: "45%",
  border: "9px solid rgb(220, 220, 220)",
  borderWidth: "0 0 9px 9px",
  cursor: "pointer",
  zIndex: 10
};

const styleLeftArrow = {
  left: "2%",
  transform: "rotate(45deg)"
};

const styleRightArrow = {
  right: "2%",
  transform: "rotate(calc(180deg + 45deg))"
};

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
    const slider = document.getElementsByClassName(`${this.props.className}__content`)[0];
    slider.style.transform = `translateX(-${page * 100}%)`;
    this.setState({
      currPage: page
    });
  }

  render() {
    const { chunks, currPage, max } = this.state;
    const { className, speed, progressBar } = this.props;
    return (
      <section className={className}>
        {progressBar ? <ProgressBar className={className} page={currPage} max={max} speed={speed} /> : ""}
        <LeftArrow scroll={this.scroll} page={currPage} max={this.state.max} style={{ ...styleArrow, ...styleLeftArrow }} className={className} />
        <section
          className={`${className}__content`}
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "1 0 100%",
            transition: `all ${speed}ms ease`,
            transform: `translateX(-${currPage * 100}%)`,
            position: "relative"
          }}
        >
          <SliderElements
            chunks={chunks}
            className={className}
            style={{
              display: "flex",
              flexDirection: "row",
              flex: `1 0 100%`,
              padding: "10px 10px"
            }}
          />
        </section>
        <RightArrow scroll={this.scroll} page={currPage} max={this.state.max} style={{ ...styleArrow, ...styleRightArrow }} className={className} />
      </section>
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

export const SliderElements = props => {
  const { chunks, className, style } = props;
  return chunks.map((chunk, i) => (
    <section key={i} className={`${className}__elements`} style={style}>
      {chunk}
    </section>
  ));
};

SliderElements.propTypes = {
  chunks: PropTypes.array.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const ProgressBar = props => {
  const { className, max, page, speed } = props;
  const progress = 100 - Math.ceil((page / max) * 100);
  const style = {
    outerStyle: {
      display: "block",
      position: "absolute",
      backgroundColor: "#2388c3",
      width: "100%",
      height: "10px"
    },
    innerStyle: {
      display: "block",
      position: "relative",
      top: "50%",
      backgroundColor: "#3f51b5",
      transform: `translateY(-50%) translateX(-${progress}%)`,
      transition: `all ${speed}ms ease`
    }
  };
  return (
    <section className={`${className}_progress-bar--outer`} style={style.outerStyle}>
      <div className={`${className}_progress-bar--inner`} style={style.innerStyle}>
        &nbsp;
      </div>
    </section>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
};

export const LeftArrow = props => {
  const { scroll, page, max, className, style } = props;
  if (page <= 0) return "";
  return <div className={`${className}__left-arrow`} style={style} onClick={() => scroll(page - 1 >= 0 ? page - 1 : max)}></div>;
};

export const RightArrow = props => {
  const { scroll, page, max, className, style } = props;
  if (page >= max) return "";
  return <div className={`${className}__right-arrow`} style={style} onClick={() => scroll(page + 1 <= max ? page + 1 : 0)}></div>;
};

LeftArrow.propTypes = {
  scroll: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  page: PropTypes.number,
  max: PropTypes.number,
  style: PropTypes.object
};

RightArrow.propTypes = { ...LeftArrow.propTypes };
