import React, { Component } from "react";
import PropTypes from "prop-types";

import "./News.scss";

const news = [
  {
    title: " Lorem ipsum dolor sit amet",
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
    return (
      <section className="news">
        {news.map((news_element, i) => (
          <div key={`${news_element.tag}_${i}`} className="news_container">
            <Title title={news_element.title} tags={news_element.tags} />
            <Description short={news_element.shortDescription} long={news_element.description} />
            <NewsContent text={news_element.text} />
          </div>
        ))}
      </section>
    );
  }
}

const Title = props => {
  const { title, tags } = props;
  return (
    <section className="news_title">
      <div className="news_content">{title}</div>
      <div className="news_title__tags">
        {tags.map((tag, i) => (
          <span key={`${tag}_${i}`}>{tag}</span>
        ))}
      </div>
    </section>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};

const Description = props => {
  const { short, long } = props;
  return (
    <section className="news_description">
      <article className="news_description__short">
        <div className="news_content">{short}</div>
      </article>
      <article className="news_description__long">
        <div className="news_content">{long}</div>
      </article>
    </section>
  );
};

Description.propTypes = {
  short: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired
};

const NewsContent = props => {
  const { text } = props;
  return <article className="news_content">{text}</article>;
};

NewsContent.propTypes = {
  text: PropTypes.string.isRequired
};
