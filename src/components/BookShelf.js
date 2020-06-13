import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const shelves = ["currentlyReading", "wantToRead", "read"];
    const shelveNames = ["Currently Reading", "Want To Read", "Read"];
    const { moveBook, booksOnShelf } = this.props;

    return (
      <div>
        {shelves.map((shelf, i) => {
          return (
            <div key={i} className="list-books-content">
              <div>
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelveNames[i]}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {booksOnShelf
                          .filter((book) => book.shelf === shelf)
                          .map((book) => (
                            <Book
                              moveBook={moveBook}
                              key={book.id}
                              book={book}
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
