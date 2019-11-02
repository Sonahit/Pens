import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./News.scss";

import NewsContainer from "./NewsContainer";
import NewsPage from "./NewsPage";

const news = [
  {
    title: " Lorem ipsum dolor sit amet",
    id: "1",
    shortDescription: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales enim
        justo, sit amet mollis ante porta vitae.`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales enim
        justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis, semper aliquam
        eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi. Mauris at dui consequat ligula
        eleifend ultricies sed et metus. Vivamus volutpat et diam sit amet lobortis.`,
    tags: ["Lorem", "Lorem"]
  }
];

export default class News extends Component {
  render() {
    const { match, location } = this.props;
    return (
      <Router key={location.key}>
        <Switch>
          <Route exact path={match.path}>
            <TransitionGroup className="news">
              {news.map((news_element, i) => (
                <CSSTransition key={`${news_element.tag}_${i}`} timeout={500} classNames="swipe_right">
                  <NewsContainer match={match} news_element={news_element} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Route>
          <Route exact path={`${match.path}/:id`}>
            <CSSTransition timeout={500} classNames="swipe_left">
              <NewsPage match={match} />
            </CSSTransition>
          </Route>
        </Switch>
      </Router>
    );
  }
}

News.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
