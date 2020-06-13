import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: [],
    };
  }

  updateQuery = (query) => {
    if (query === "") {
      this.setState({
        query: "",
        books: [],
      });
    } else {
      this.setState({
        query: query,
      });
      BooksAPI.search(query).then((books) => {
        console.log(books);
        if (books.error) {
          books = [];
        }
        this.setState({
          books: books,
        });
      });
    }
  };
  render() {
    const { books } = this.state;
    const { moveBook } = this.props;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/" />
            <div className="search-books-input-wrapper">
              <input
                onChange={(event) => this.updateQuery(event.target.value)}
                type="text"
                placeholder="Search by title or author"
              />
            </div>
            {/* {console.log(BooksAPI.search(this.state.query))} */}
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {books.map((book) => (
                <Book key={book.id} book={book} moveBook={moveBook} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSearch;
