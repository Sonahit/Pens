import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Client extends Component {
  render() {
    const { client, imgHeight } = this.props;
    return (
      <section className="home_clients__content">
        <div className="home_clients__content_header">
          <div className="home_clients__content_header__name">
            <h1>{client.companyName}</h1>
          </div>
          <div className="home_clients__content_header__logo">
            <img src={client.logo} style={{ height: `${imgHeight}px` }} />
          </div>
        </div>
        <div className="home_clients__content_body">
          <div className="home_clients__content_body__information">
            <p>{client.information}</p>
          </div>
          <div className="home_clients__content_body__comment">
            <p>{client.comment}</p>
          </div>
        </div>
      </section>
    );
  }
}

Client.propTypes = {
  client: PropTypes.any.isRequired,
  imgHeight: PropTypes.number.isRequired
};
