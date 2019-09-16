import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Btn.scss";

export default class NavButton extends Component {
  render() {
    return (
      <li className="header_nav_btn">
        <Link to={this.props.link.path}>{this.props.link.name}</Link>
      </li>
    );
  }
}

NavButton.propTypes = {
  link: PropTypes.string.isRequired
};
