import React, { Component } from "react";
import "./Clients.scss";

export default class Clients extends Component {
  render() {
    return (
      <section className="home_clients">
        <div className="home_clients__content">
          <div className="home_clients__header">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          </div>
          <div className="home_clients__body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales
              enim justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis,
              semper aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi. Mauris at dui
              consequat ligula eleifend ultricies sed et metus. Vivamus volutpat et diam sit amet lobortis.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
