import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class NewsContainer extends Component {
  render() {
    const { match, news_element } = this.props;
    return (
      <div className="news_container">
        <Title path={match.path} id={news_element.id} title={news_element.title} tags={news_element.tags} />
        <Description short={news_element.shortDescription} long={news_element.description} />
        <NewsContent text={news_element.text} />
      </div>
    );
  }
}

NewsContainer.propTypes = {
  match: PropTypes.object.isRequired,
  news_element: PropTypes.object.isRequired
};

const Title = props => {
  const { title, tags, id, path } = props;
  return (
    <section className="news_title">
      <div className="news_content">
        <Link to={`${path}/${id}`}>{title}</Link>
      </div>
      <div className="news_title__tags">
        {tags.map((tag, i) => (
          <span key={`${tag}_${i}`}>{tag}</span>
        ))}
      </div>
    </section>
  );
};

Title.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
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
