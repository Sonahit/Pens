import React, { Component } from "react";
import Nav from "./_nav/Nav";
import PropTypes from "prop-types";
import "./Header.scss";
export default class Header extends Component {
  render() {
    return (
      <header>
        <Nav links={this.props.links} />
      </header>
    );
  }
}

Header.propTypes = {
  links: PropTypes.array.isRequired
};
