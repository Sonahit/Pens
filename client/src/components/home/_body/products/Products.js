import React, { Component } from "react";
import ProductContainer from "./ProductContainer";
import PropTypes from "prop-types";
import "./Products.scss";

const penImgs = [
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg",
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg"
];
//Make a slider with loading products
export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: Math.ceil(penImgs.length / 2),
      leftActive: true,
      rightActive: true,
      activeStyle: {
        transform: `translateX(${-20 * Math.ceil(penImgs.length / 2)}%)`
      }
    };
    this.scroll = this.scroll.bind(this);
    this.draggableScroll = this.draggableScroll.bind(this);
  }

  componentDidMount() {
    const product = document.getElementsByClassName("home_products__container")[0];
    const slider = document.querySelector(".home_products__slider");
    const percentWidth = (product.clientWidth * 100) / slider.clientWidth;
    penImgs.forEach((_, i) => {
      //On last element width correction
      let delta = 0;
      if (i === penImgs.length - 1) {
        delta = 10;
      } else if (i === 0) {
        delta = 10;
      }
      const translateX = -percentWidth * i + delta;
      this.setState({
        [`style ${i + 1}`]: {
          id: i,
          page: i + 1,
          translateX: `${translateX}%`
        }
      });
    });
  }

  scroll(page) {
    const style = this.state[`style ${page}`];
    if (style) {
      this.setState({
        activeStyle: {
          transform: `translateX(${style.translateX})`
        },
        // 1 is the end. According to first style
        leftActive: this.state.page !== 1 + 1,
        rightActive: this.state.page !== penImgs.length - 1
      });
      this.setState({ page: page });
    }
  }

  draggableScroll(mouseX, mouseY) {
    //On stop go to nearest
    //Find nearest on manual scroll
    const slider = document.querySelector(".home_products__slider");
    const percentWidth = (mouseX * 100) / slider.clientWidth;
    this.setState({
      activeStyle: {
        transform: `translateX(${percentWidth}%)`
      }
    });
  }
  render() {
    // prettier-ignore
    return (
      <section className="home_products">
        <section className="home_products__slider" 
          onDrag={e => this.draggableScroll(e.screenX, e.screenY)} 
          style={this.state.activeStyle}
        >
          {penImgs.map((img, index) => (
            <ProductContainer 
              key={index} 
              index={index} 
              img={img} 
            />
          ))}
        </section>
        <LeftArrow 
          active={this.state.leftActive} 
          scroll={this.scroll} 
          page={this.state.page} 
        />
        <RightArrow 
          active={this.state.rightActive} 
          scroll={this.scroll} 
          page={this.state.page} 
        />
      </section>
    );
  }
}

const LeftArrow = props => {
  const { scroll, page, active } = props;
  if (!active) {
    return <div className="left-arrow-unactive" onClick={() => scroll(page - 1 > 0 ? page - 1 : page)}></div>;
  }
  return <div className="left-arrow-active" onClick={() => scroll(page - 1 > 0 ? page - 1 : page)}></div>;
};

const RightArrow = props => {
  const { scroll, page, active } = props;
  if (!active) {
    return <div className="right-arrow-unactive" onClick={() => scroll(page + 1 < -1 ? page - 1 : page)}></div>;
  }
  return <div className="right-arrow-active" onClick={() => scroll(page + 1 < penImgs.length + 1 ? page + 1 : page)}></div>;
};

LeftArrow.propTypes = {
  scroll: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

RightArrow.propTypes = { ...LeftArrow.propTypes };
