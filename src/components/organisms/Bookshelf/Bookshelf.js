import PropTypes from "prop-types";
import React from "react";

const Bookshelf = ({ title, children }) => {
  const baseclass = "bookshelf";

  Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired
  };

  return (
    <div className={baseclass}>
      <h2 className={`${baseclass}-title`}>{title}</h2>
      <div className={`${baseclass}-searchBooks`}>
        <ol className="books-grid">{children}</ol>
      </div>
    </div>
  );
};

export default Bookshelf;
