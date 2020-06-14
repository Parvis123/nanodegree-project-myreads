import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddBook extends Component {
  render() {
    return (
      <Link className="open-search" to="/search">
        <button>Add a book</button>
      </Link>
    );
  }
}

export default AddBook;
