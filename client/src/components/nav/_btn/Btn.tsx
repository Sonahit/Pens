import React, { ReactElement } from "react";
import { RouteConfig, ShortRoute } from "@utils/routes";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Btn.scss";

interface Props {
  route: RouteConfig;
}

export default function NavButton({ route }: Props): ReactElement {
  if (route.dropLinks) return <DropBtn route={route} />;
  return <NonDropBtn route={route} />;
}

NavButton.propTypes = {
  route: PropTypes.object.isRequired,
  dropLinks: PropTypes.object
};

const NonDropBtn = ({ route }: Props): ReactElement => {
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

const DropBtn = ({ route }: Props): ReactElement => {
  const { dropLinks } = route;
  if (!dropLinks) return <NonDropBtn route={route} />;
  return (
    <li className="nav_btn">
      <Link to={route.path}>{route.name}</Link>
      <ul className="nav_container__drop">
        {dropLinks.map((link, index) => (
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
