import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import { RouteComponentProps } from "react-router-dom";
import { NewsElement } from "newsTypes";

import Title from "./NewsTitle";
import Description from "./NewsDescription";
import Content from "./NewsContent";

interface Props extends RouteComponentProps<any> {
  news_element: NewsElement;
}

export default function NewsContainer(props: Props): ReactElement {
  const { match, news_element } = props;
  return (
    <div className="news_container">
      <Title path={`${match.path}/${news_element.id}`} title={news_element.title} tags={news_element.tags} />
      <Description>
        <div className="description__short">{news_element.shortDescription}</div>
        <div className="description__long">{news_element.description}</div>
      </Description>
      <Content>{news_element.text}</Content>
    </div>
  );
}

NewsContainer.propTypes = {
  match: PropTypes.object.isRequired,
  news_element: PropTypes.object.isRequired
};
