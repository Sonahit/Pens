import React from "react";
import PropTypes from "prop-types";
import NewsDescription from "./NewsDescription";
import NewsTitle from "./NewsTitle";
import NewsContent from "./NewsContent";

export default function NewsPage(props) {
  const { match } = props;
  return (
    <section className="news_container">
      <NewsTitle path={match.path} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
      <NewsDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales enim
          justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis, semper
          aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi. Mauris at dui consequat
          ligula eleifend ultricies sed et metus.
        </p>
      </NewsDescription>
      <NewsContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales enim
        justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis, semper
        aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi. Mauris at dui consequat
        ligula eleifend ultricies sed et metus. Vivamus volutpat et diam sit amet lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales enim justo, sit amet mollis ante porta vitae. Sed quis
        aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis, semper aliquam eros. Duis vulputate, ipsum at volutpat
        vestibulum, dui risus sagittis odio, non euismod velit massa ac mi. Mauris at dui consequat ligula eleifend ultricies sed et metus. Vivamus
        volutpat et diam sit amet lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem
        consectetur quis. Integer sodales enim justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit,
        hendrerit quis nisi quis, semper aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit
        massa ac mi. Mauris at dui consequat ligula eleifend ultricies sed et metus. Vivamus volutpat et diam sit amet lobortis.
      </NewsContent>
    </section>
  );
}

NewsPage.propTypes = {
  match: PropTypes.object.isRequired
};
