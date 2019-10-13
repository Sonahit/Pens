import React, { Component } from "react";
import "./Preview.scss";

export default class Preview extends Component {
  render() {
    return (
      <section className="home_preview">
        {/*#TODO Define preview section*/}
        <section className="home_preview__content">
          <div className="home_preview__header">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          </div>
          <div className="home_preview__body">
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
