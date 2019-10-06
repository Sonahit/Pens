import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProductContainer extends Component {
  showMore(props) {}
  render() {
    return (
      <div className={`home_products__container home_products__container--${this.props.index + 1}`}>
        <section className="home_products__header">
          <div onClick={this.showMore} className="home_products__image">
            <img src={this.props.img} />
            <div className="home_products__description">
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </div>
          </div>
        </section>
        <section className="home_products__body">
          <div className="home_products__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales
            enim justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis, semper
            aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi. Mauris at dui
            consequat ligula eleifend ultricies sed et metus. Vivamus volutpat et diam sit amet lobortis.
          </div>
          <div className="home_products__price">Lorem ipsum dolor sit amet</div>
        </section>
      </div>
    );
  }
}

ProductContainer.propTypes = {
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};
