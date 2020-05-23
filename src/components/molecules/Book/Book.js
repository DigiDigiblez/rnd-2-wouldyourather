import "./Book.css";

import camelCase from "lodash.camelcase";
import PropTypes from "prop-types";
import React from "react";

import { update } from "../../../BooksAPI";

const Book = ({ id, title, authors, cover, shelf, setLastBookChanged }) => {
  const baseclass = "book";

  Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    cover: PropTypes.string,
    shelf: PropTypes.string,
    setLastBookChanged: PropTypes.func.isRequired
  };

  Book.defaultProps = {
    shelf: null,
    cover: null,
    authors: []
  };

  const handleShelfChange = ({ target }) =>
    update(id, target.value).then(() => setLastBookChanged(id));

  return (
    <li key={id}>
      <div className={baseclass}>
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 180,
              backgroundImage: `url(${cover})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={handleShelfChange}
              defaultValue={camelCase(shelf)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors &&
            authors.map((author, i) => (
              <span key={author} className="author">
                {author}
                {/* Add comma only if more than one author and not last author */}
                {authors.length > 1 && i <= authors.length - 2 && ","}
              </span>
            ))}
        </div>
      </div>
    </li>
  );
};

export default Book;
