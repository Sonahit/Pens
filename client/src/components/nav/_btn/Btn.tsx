import React from "react";
import { IRoute, IShortRoute, IRouteWithDropLinks } from "@utils/routes";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Btn.scss";

export default function NavButton(route: IRoute): JSX.Element {
  if (route.dropLinks) return <DropBtn route={route} />;
  return <NonDropBtn route={route} />;
}

NavButton.propTypes = {
  link: PropTypes.object.isRequired,
  dropLinks: PropTypes.object
};

const NonDropBtn = (route: IRoute): JSX.Element => {
  return (
    <li className="nav_btn">
      <Link className="nowrap" to={route.path}>
        {route.name}
      </Link>
    </li>
  );
};

NonDropBtn.propTypes = {
  route: PropTypes.object.isRequired
};

const DropBtn = (route: IRouteWithDropLinks): JSX.Element => {
  const { dropLinks } = route;
  return (
    <li className="nav_btn">
      <Link to={route.path}>{route.name}</Link>
      <ul className="nav_container__drop">
        {dropLinks.map((link: IShortRoute, index: number) => (
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
