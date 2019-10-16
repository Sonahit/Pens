import React from "react";
import PropTypes from "prop-types";
import Slider, { LeftArrow, RightArrow, ProgressBar, SliderElements } from "./Slider";

export default class CSSlider extends Slider {
  constructor(props) {
    super(props);
  }

  render() {
    const { chunks, currPage, max } = this.state;
    const { className, progressBar, speed } = this.props;
    return (
      <>
        {progressBar ? <ProgressBar className={className} page={currPage} max={max} speed={speed} /> : ""}
        <LeftArrow scroll={this.scroll} page={currPage} max={this.state.max} className={className} />
        <section className={className}>
          <SliderElements chunks={chunks} className={className} />
        </section>
        <RightArrow scroll={this.scroll} page={currPage} max={this.state.max} className={className} />
      </>
    );
  }
}

CSSlider.defaultProps = {
  currPage: 0,
  slidesToShow: 1,
  touchable: false,
  progressBar: true,
  speed: 500
};

CSSlider.propTypes = {
  slidesToShow: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
  currPage: PropTypes.number,
  speed: PropTypes.number,
  touchable: PropTypes.bool,
  progressBar: PropTypes.bool
};
