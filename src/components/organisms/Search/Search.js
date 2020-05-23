import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getAll, search } from "../../../BooksAPI";
import noCover from "../../../icons/fallback-thumbnail.png";
import Container from "../../atoms/Container";
import Book from "../../molecules/Book/Book";
import { ROUTES } from "../../pages/Routes/route";
import Chrome from "../../templates/Chrome";

const Search = () => {
  const baseclass = "search";

  const [searchQuery, setSearchQuery] = useState("");
  const [lastBookChanged, setLastBookChanged] = useState();

  const handleSearchQuery = event => {
    setSearchQuery(event.target.value);
  };

  const [state, setState] = useState({
    ourBooks: [],
    searchBooks: []
  });

  // Get all of our books on mount.
  useEffect(() => {
    getAll().then(books => {
      setState({
        ...state,
        ourBooks: books
      });
    });
  }, []);

  // Get all search results books on search.
  useEffect(() => {
    (searchQuery &&
      search(searchQuery)
        .then(searchBooks => {
          if (searchBooks.error) {
            setState({
              ...state,
              searchBooks: []
            });

            return searchBooks.error;
          }
          if (searchBooks) {
            setState({
              ...state,
              searchBooks
            });
          }
        })
        .catch(err => {})) ||
      setState({
        ...state,
        searchBooks: []
      });
  }, [searchQuery]);

  const retrieveShelfName = bookId => {
    const ourBook = state.ourBooks.find(book => book.id === bookId);

    let shelfName;

    if (ourBook) {
      if (ourBook.shelf === "currentlyReading") shelfName = "Currently Reading";
      else if (ourBook.shelf === "wantToRead") shelfName = "Want to Read";
      else if (ourBook.shelf === "read") shelfName = "Read";
      else shelfName = "None";
    }

    return shelfName;
  };

  return (
    <Chrome>
      <Container className={baseclass}>
        <div className="search-books">
          <div className="search-books-bar">
            <NavLink to={ROUTES.LIST}>
              <button className="close-search">Close</button>
            </NavLink>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                onChange={handleSearchQuery}
                value={searchQuery}
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {state.searchBooks && state.searchBooks.length > 0
                ? state.searchBooks.map(book => (
                    <Book
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      authors={book.authors}
                      cover={
                        (book.imageLinks && book.imageLinks.thumbnail) ||
                        noCover
                      }
                      shelf={retrieveShelfName(book.id) || "None"}
                      setLastBookChanged={id => setLastBookChanged(id)}
                    />
                  ))
                : "No searchBooks match the current search."}
            </ol>
          </div>
        </div>
      </Container>
    </Chrome>
  );
};

export default Search;
