import React from "react";
import PropTypes from "prop-types";

import Title from "./NewsTitle";
import Description from "./NewsDescription";
import Content from "./NewsContent";

export default function NewsContainer(props) {
  const { match, news_element } = props;
  return (
    <div className="news_container">
      <Title path={`${match.path}/${news_element.id}`} title={news_element.title} tags={news_element.tags} />
      <Description>
        <div className="description__short">
          {news_element.shortDescription}
        </div>
        <div className="description__long">
          {news_element.description}
        </div>
      </Description>
      <Content>{news_element.text}</Content>
    </div>
  );
}

NewsContainer.propTypes = {
  match: PropTypes.object.isRequired,
  news_element: PropTypes.object.isRequired
};
