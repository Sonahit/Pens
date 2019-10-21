import React, { Component } from "react";
import ProductContainer from "./ProductContainer";
import Slider from "@utils/Slider/Slider.js";
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

//Make a slider with newest \ relevant loading products
export default class Products extends Component {
  render() {
    // prettier-ignore
    return (
      <section className="home_products">
        <Slider slidesToShow={4} progressBar={true} speed={500}>
          {penImgs.map((img, index) => (
            <ProductContainer key={index} index={index} img={img} />
          ))}
        </Slider>
      </section>
    );
  }
}
