import React, { Component } from "react";
import PropTypes from "prop-types";

import * as styles from "./styles";

import ProgressBar from "./ProgressBar";
import SliderElements from "./SliderElements";
import Dots from "./Dots";
import { RightArrow, LeftArrow } from "./Arrows";

/**
 * @param {React.ReactNode} el
 */
function ensureArray(el) {
  if (!el) {
    return [];
  }
  return Array.isArray(el) ? el : [el];
}
/**
 *
 * @param {*} arr
 * @param {*} chunkSize
 * @description Splitting array to chunks by chunkSize
 * @returns chunks
 */
function splitArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

export default class Slider extends Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props);

    const { currPage, children, autoScroll, autoScrollTime } = this.props;
    const slidesToShow = this.countSlides(window.innerWidth);
    const values = ensureArray(children);
    const chunks = splitArray(children, slidesToShow);

    if (autoScroll) {
      if (!autoScrollTime) {
        throw new Error("autoScroll prop is initialized but autoScrollTime is not initialized! Please initialize autoScrollTime prop");
      }
    }

    this.autoScroll = this.autoScroll.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.countSlides = this.countSlides.bind(this);
    this.scroll = this.scroll.bind(this);

    this.state = {
      chunks,
      max: chunks.length - 1,
      values,
      slidesToShow,
      currPage
    };
  }

  componentDidUpdate() {
    const chunks = splitArray(this.state.values, this.state.slidesToShow);
    this.setState(prevState => ({
      chunks,
      max: chunks.length - 1,
      currPage: prevState.currPage > chunks.length - 1 ? chunks.length - 1 : prevState.currPage
    }));
  }

  componentDidMount() {
    if (this.props.autoScroll) {
      setInterval(() => this.autoScroll(this.state.currPage + 1), this.props.autoScrollTime);
    }
    if (this.props.responsive) {
      window.addEventListener("resize", this.updateDimensions);
    }
  }

  componentWillUnmount() {
    if (this.props.responsive) {
      window.removeEventListener("resize", this.updateDimensions);
    }
  }

  /**
   * @param {any} _
   * @param {{ slidesToShow: any; currPage: any; chunks: { length: number; }; }} nextState
   */
  shouldComponentUpdate(_, nextState) {
    if (this.state.slidesToShow !== nextState.slidesToShow) return true;
    if (this.state.currPage !== nextState.currPage) return true;
    if (this.state.chunks.length !== nextState.chunks.length) return true;
    return false;
  }

  /**
   *
   * @param {number} page
   */
  autoScroll(page) {
    const { max } = this.state;
    this.setState({ currPage: page <= max ? page : 0 });
  }
  /**
   *
   * @param {number} width
   * @description Getting slidesToShow parameter according to clients window innerWidth if responsive prop exists
   * @returns slides to show
   */
  countSlides(width) {
    const { responsive } = this.props;
    if (responsive) {
      const /**
         * @param {{ width: { from: number; to: number; }; }} v
         */
        responsiveSlides = responsive.find(v => v.width.from > width && v.width.to <= width);
      if (responsiveSlides) return responsiveSlides.slidesToShow;
    }
    return this.props.slidesToShow;
  }

  updateDimensions() {
    const slidesToShow = this.countSlides(window.innerWidth);
    if (this.state.slidesToShow !== slidesToShow) {
      this.setState({
        slidesToShow
      });
    }
  }
  /**
   *
   * @param {number} page
   */
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
    const progress = 100 - Math.ceil((currPage / max) * 100);
    return (
      <section className={className}>
        {progressBar ? (
          <ProgressBar className={className} innerStyle={styles.progressBar.innerStyle(progress, speed)} outerStyle={styles.progressBar.outerStyle} />
        ) : (
          ""
        )}
        <LeftArrow
          scroll={this.scroll}
          page={currPage}
          max={max}
          style={styles.leftArrowStyle}
          className={className}
          holderStyle={styles.arrowLeftHolderStyle}
        />
        <RightArrow
          scroll={this.scroll}
          page={currPage}
          max={max}
          style={styles.rightArrowStyle}
          holderStyle={styles.arrowRightHolderStyle}
          className={className}
        />
        <section className={`${className}__content`} style={styles.contentStyle(speed, currPage)}>
          <SliderElements chunks={chunks} className={className} style={styles.elementsStyle} slidesToShow={this.state.slidesToShow} />
        </section>
        <Dots
          scroll={this.scroll}
          className={className}
          page={currPage}
          max={max}
          componentStyle={styles.dotsComponent}
          notActiveStyle={styles.dotStyleNoActive}
          activeStyle={styles.dotStyleActive}
          holderStyle={styles.dotHolderStyle}
        />
      </section>
    );
  }
}

Slider.propTypes = {
  slidesToShow: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
  responsive: PropTypes.array,
  autoScroll: PropTypes.bool,
  autoScrollTime: PropTypes.number,
  currPage: PropTypes.number,
  speed: PropTypes.number,
  touchable: PropTypes.bool,
  progressBar: PropTypes.bool,
  className: PropTypes.string
};

Slider.defaultProps = {
  currPage: 0,
  touchable: false,
  className: "slider",
  progressBar: true,
  speed: 500,
  slidesToShow: 4,
  responsive: [
    {
      slidesToShow: 3,
      width: {
        from: 1440,
        to: 1020
      }
    },
    {
      slidesToShow: 2,
      width: {
        from: 1020,
        to: 720
      }
    },
    {
      slidesToShow: 1,
      width: {
        from: 720,
        to: 0
      }
    }
  ],
  autoScroll: false,
  autoScrollTime: 5000
};
