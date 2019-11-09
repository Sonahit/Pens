import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
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

export default function News(props) {
  const { match } = props;
  const sec = msec => msec * 1000;
  const timeout = sec(1.1);
  return (
    <TransitionGroup className="news" component="section">
      <Route exact path={match.path}>
        {props =>
          //prettier-ignore
          news.map((news_element,i ) => (
            <CSSTransition
              key={`${news_element.tags.join("_")}_${i}`}
              timeout={timeout}
              classNames="swipe_right"
              in={props.match != null}
              unmountOnExit
            >
              {/* prettier-ignore */}
              <NewsContainer 
                  match={match} 
                  news_element={news_element} 
                />
            </CSSTransition>
          ))
        }
      </Route>
      <Route exact path={`${match.path}/:id`}>
        {props =>
          /* prettier-ignore */
          <CSSTransition 
              timeout={timeout} 
              in={props.match != null} 
              classNames="swipe_left" 
              unmountOnExit 
          >
            <NewsPage match={match} />
          </CSSTransition>
        }
      </Route>
    </TransitionGroup>
  );
}

News.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
