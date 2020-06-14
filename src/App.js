import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookSearch from "./components/BookSearch";
import AddBook from "./components/AddBook";
import { Route } from "react-router-dom";
import BookShelf from "./components/BookShelf";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  moveBook = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState((state) => ({
          books: state.books
            .filter((querybook) => querybook.id !== book.id)
            .concat([book]),
        }));
        console.log(book, shelf);
      });
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <BookShelf booksOnThisShelf={books} moveBook={this.moveBook} />
              </div>
              <AddBook />
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => <BookSearch moveBook={this.moveBook} />}
        />
      </div>
    );
  }
}

export default BooksApp;
