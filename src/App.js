import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Read from "./components/Read";
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import BookSearch from "./components/BookSearch";
import AddBook from "./components/AddBook";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  handleSearchPage = (setting) => {
    this.setState({
      showSearchPage: setting,
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BookSearch handleSearchPage={this.handleSearchPage} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <CurrentlyReading />
              <WantToRead />
              <Read />
            </div>
            <AddBook handleSearchPage={this.handleSearchPage} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
