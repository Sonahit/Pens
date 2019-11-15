import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

interface Props {
  title: string;
  tags?: Array<String>;
  path: string;
}

const NewsTitle = (props: Props) => {
  const { title, tags, path } = props;
  return (
    <section className="news_title">
      <div className="news_title__link">
        <Link to={path}>{title}</Link>
      </div>
      {tags && (
        <div className="news_title__tags">
          {tags.map((tag, i) => (
            <span key={`${tag}_${i}`}>{tag}</span>
          ))}
        </div>
      )}
    </section>
  );
};

NewsTitle.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  tags: PropTypes.array
};

export default NewsTitle;
