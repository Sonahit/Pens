import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class NewsPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <article>
        <Link to={match.path}>Go back</Link>
        NewsPage
      </article>
    );
  }
}

NewsPage.propTypes = {
  match: PropTypes.object.isRequired
};
