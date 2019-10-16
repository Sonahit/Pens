import React, { Component } from "react";
import ProductContainer from "./ProductContainer";
import Slider from "@utils/Slider";
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
  "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M01-89-05-rBVaEFmPFZmAaAWmAApqYqPXIS0445.jpg/unique-design-picasso-brand-wine-red-fountain-pen-with-gold-clip-school-office-stationery-luxury-writing-lady-gift-ink-pens.jpg"
];

function countSlides(width) {
  if (width >= 1440) return 4;
  if (width >= 1024 && width < 1440) return 3;
  if (width >= 768 && width < 1024) return 2;
  return 1;
}

//Make a slider with loading products
export default class Products extends Component {
  constructor(props) {
    super(props);
    const width = window.innerWidth;
    this.state = {
      width
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    // prettier-ignore
    return (
      <section className="home_products">
        <Slider slidesToShow={countSlides(this.state.width)} progressBar={true} speed={500}>
          {penImgs.map((img, index) => (
            <ProductContainer key={index} index={index} img={img} />
          ))}
        </Slider>
      </section>
    );
  }
}
