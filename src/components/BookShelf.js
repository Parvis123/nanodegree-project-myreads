import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const shelvesNames = ["Currently Reading", "Want To Read", "Read"];
    const shelvesVal = ["currentlyReading", "wantToRead", "read"];

    const { moveBook, booksOnThisShelf } = this.props;

    return (
      <div>
        {shelvesVal.map((shelf, i) => {
          return (
            <div key={i} className="list-books-content">
              <div>
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelvesNames[i]}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {booksOnThisShelf
                          .filter((book) => book.shelf === shelf)
                          .map((book) => (
                            <Book
                              moveBook={moveBook}
                              book={book}
                              key={book.id}
                            />
                          ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookShelf;
