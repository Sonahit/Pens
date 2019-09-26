import React, { Component } from "react";
import "./Header.scss";
import background from "~images/background.png";

export default class Header extends Component {
  render() {
    return (
      <section className="home_header">
        <div className="home_header__content">
          <img className="home_header__background" src={background} />
          <div className="home_header_info__outer">
            <div className="home_header_info__inner">
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer
                sodales enim justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi
                quis, semper aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi.
                Mauris at dui consequat ligula eleifend ultricies sed et metus. Vivamus volutpat et diam sit amet lobortis.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
