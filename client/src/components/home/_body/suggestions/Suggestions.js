import React, { Component } from "react";
import "./Suggestions.scss";

export default class Suggestions extends Component {
  render() {
    return (
      <section className="home_suggestions">
        {
          // TODO: A section with popular products with their info moving from the left.
          // SCREEN --> INFO
          // INFO <--- SCREEN
          // TODO: On click go to product page (/Products?${productName}&${productId}&${productFeature})
        }
        <section className="home_suggestions__content">
          <div className="home_suggestions__header">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          </div>
          <div className="home_suggestions__body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales
              enim justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis,
              semper aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi. Mauris at dui
              consequat ligula eleifend ultricies sed et metus. Vivamus volutpat et diam sit amet lobortis.
            </p>
          </div>
        </section>
      </section>
    );
  }
}
