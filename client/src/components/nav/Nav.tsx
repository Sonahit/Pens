import React from "react";
import NavButton from "./_btn/Btn";
import PropTypes from "prop-types";
import "./Nav.scss";
import { RouteConfig, RouteProps, IRoute } from "@utils/routes";

export default function Nav(props: RouteProps): JSX.Element {
  const { routes }: RouteProps = props;
  return (
    <nav>
      <ul className="nav_container">
        {routes.map((route: RouteConfig<IRoute>) => (
          <NavButton key={route.path} route={route} />
        ))}
        <li className="nav_btn">
          <a target="blank" href="https://github.com/Sonahit">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  routes: PropTypes.array.isRequired
};
