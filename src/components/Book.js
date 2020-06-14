import React, { Component } from "react";

class Book extends Component {
  updateBook(shelf) {
    const { book, moveBook } = this.props;
    moveBook(book, shelf);
  }
  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              height: 192,
              width: 128,
              backgroundImage: `url(${
                book.imageLinks !== undefined ? book.imageLinks.thumbnail : ""
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf}
              onChange={(e) => this.updateBook(e.target.value)}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option default value="none">
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    );
  }
}

export default Book;
