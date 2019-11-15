import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { RouteConfig } from "@utils/routes";

interface Props {
  links: Array<RouteConfig>;
}

export default function Nav(props: Props) {
  return (
    <section className="footer_nav">
      <ul className="footer_nav__pagination">
        {props.links.map(link => (
          <li className="footer_nav__item" key={link.path}>
            <Link className="footer_nav__link" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};
