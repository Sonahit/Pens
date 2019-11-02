import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Btn.scss";

export default class NavButton extends Component {
  render() {
    if (this.props.link.dropLinks) return <DropBtn link={this.props.link} />;
    return <NonDropBtn link={this.props.link} />;
  }
}

const NonDropBtn = props => {
  return (
    <li className="nav_btn">
      <Link className="nowrap" to={props.link.path}>
        {props.link.name}
      </Link>
    </li>
  );
};

const DropBtn = props => {
  const { link } = props;
  return (
    <li className="nav_btn">
      <Link to={link.path}>{link.name}</Link>
      <ul className="nav_container__drop">
        {link.dropLinks.map((link, index) => (
          <li className="nav_btn__drop" key={link.path + index}>
            <Link className="nowrap" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

NavButton.propTypes = {
  link: PropTypes.object.isRequired,
  dropLinks: PropTypes.object
};

NonDropBtn.propTypes = {
  link: PropTypes.object.isRequired
};

DropBtn.propTypes = {
  ...NonDropBtn.propTypes
};
