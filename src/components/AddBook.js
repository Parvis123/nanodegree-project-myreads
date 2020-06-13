import React, { Component } from "react";

class AddBook extends Component {
  render() {
    return (
      <div className="open-search">
        <button onClick={() => this.props.handleSearchPage(true)}>
          Add a book
        </button>
      </div>
    );
  }
}

export default AddBook;
