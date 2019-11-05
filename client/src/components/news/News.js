import React, { Component, StrictMode } from "react";
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
  constructor(props) {
    super(props);
    this.state = {
      transit: true
    };
    this.reverseTransit = this.reverseTransit.bind(this);
  }

  reverseTransit() {
    this.setState(prev => ({ transit: !prev.transit }));
  }

  render() {
    const { match, location } = this.props;
    return (
      <Router key={location.key}>
        <Switch>
          <TransitionGroup className="news">
            <Route exact path={match.path}>
              {props =>
                news.map((news_element, i) =>
                  //prettier-ignore
                  <CSSTransition 
                      key={`${news_element.tags.join("_")}_${i}`} 
                      timeout={500} 
                      classNames="swipe_right"
                      in={props.match != null} 
                      unmountOnExit
                      mountOnEnter
                      appear
                    >
                      {/* prettier-ignore */}
                      <NewsContainer 
                        match={match} 
                        news_element={news_element} 
                        reverseTransit={this.reverseTransit} 
                      />
                    </CSSTransition>
                )
              }
            </Route>
            <Route exact path={`${match.path}/:id`}>
              {props =>
                /* prettier-ignore */
                <CSSTransition 
                  timeout={1000} 
                  in={props.match != null} 
                  classNames="swipe_left" 
                  unmountOnExit 
                  mountOnEnter
                >
                  <NewsPage match={match} />
                </CSSTransition>
              }
            </Route>
          </TransitionGroup>
        </Switch>
      </Router>
    );
  }
}

News.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
