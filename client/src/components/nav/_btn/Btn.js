import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Btn.scss";

export default function NavButton(props) {
  if (props.link.dropLinks) return <DropBtn link={props.link} />;
  return <NonDropBtn link={props.link} />;
}

NavButton.propTypes = {
  link: PropTypes.object.isRequired,
  dropLinks: PropTypes.object
};

const NonDropBtn = props => {
  return (
    <li className="nav_btn">
      <Link className="nowrap" to={props.link.path}>
        {props.link.name}
      </Link>
    </li>
  );
};

NonDropBtn.propTypes = {
  link: PropTypes.object.isRequired
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

DropBtn.propTypes = {
  ...NonDropBtn.propTypes
};
