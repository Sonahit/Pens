import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Btn.scss";

export default class NavButton extends Component {
  render() {
    if (this.props.drop) {
      return <DropBtn link={this.props.link} />;
    }
    return <NonDropBtn link={this.props.link} />;
  }
}

const NonDropBtn = props => {
  return (
    <Link className="header_nav_btn" to={props.link.path}>
      {props.link.name}
    </Link>
  );
};

const DropBtn = props => {
  return (
    <li className="header_nav_btn">
      <Link to={props.link.path}>{props.link.name}</Link>
    </li>
  );
};

NavButton.propTypes = {
  link: PropTypes.object.isRequired,
  drop: PropTypes.object
};

NonDropBtn.propTypes = {
  link: PropTypes.object.isRequired
};

DropBtn.propTypes = {
  ...NonDropBtn.propTypes
};
