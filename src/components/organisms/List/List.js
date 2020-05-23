import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getAll } from "../../../BooksAPI";
import noCover from "../../../icons/fallback-thumbnail.png";
import Container from "../../atoms/Container";
import Book from "../../molecules/Book/Book";
import { ROUTES } from "../../pages/Routes/route";
import Chrome from "../../templates/Chrome";
import Bookshelf from "../Bookshelf/Bookshelf";

const List = () => {
  const baseclass = "list";

  const [lastBookChanged, setLastBookChanged] = useState();

  const [state, setState] = useState({
    ourBooks: {
      "Currently Reading": [],
      "Want to Read": [],
      Read: []
    }
  });

  useEffect(() => {
    getAll().then(searchBooks => {
      const currentlyReading = [];
      const wantToRead = [];
      const read = [];

      searchBooks.map(book => {
        switch (book.shelf) {
          case "currentlyReading": {
            currentlyReading.push(book);
            break;
          }
          case "wantToRead": {
            wantToRead.push(book);
            break;
          }
          case "read": {
            read.push(book);
            break;
          }
          default: {
            break;
          }
        }

        setState({
          ...state,
          ourBooks: {
            ...state.ourBooks,
            "Currently Reading": currentlyReading,
            "Want to Read": wantToRead,
            Read: read
          }
        });
      });
    });

    // Resetting the flag allows for moving the same book multiple times.
    setLastBookChanged(null);
  }, [lastBookChanged]);

  return (
    <Container className={baseclass}>
      <Chrome>
        <div className="list-books">
          <div className="list-books-content">
            <div>
              {Object.keys(state.ourBooks).map(bookshelfTitle => (
                <Bookshelf key={bookshelfTitle} title={bookshelfTitle}>
                  {state.ourBooks[bookshelfTitle].map(book => (
                    <Book
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      authors={book.authors}
                      cover={
                        (book.imageLinks && book.imageLinks.thumbnail) ||
                        noCover
                      }
                      shelf={bookshelfTitle}
                      setLastBookChanged={id => setLastBookChanged(id)}
                    />
                  ))}
                </Bookshelf>
              ))}
            </div>
          </div>
          <div className="open-search">
            <NavLink to={ROUTES.SEARCH}>
              <button>Add a book</button>
            </NavLink>
          </div>
        </div>
      </Chrome>
    </Container>
  );
};

export default List;
