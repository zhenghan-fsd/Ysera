import React, { Component } from "react";

import { graphql } from "react-apollo";
import PropTypes from "prop-types";

import { getBooksQuery } from "../graphql/queries";
import BookDetail from "../components/BookDetail";
import "./BookList.css";

class BookList extends Component {
  state = {
    bookId: null
  };

  onClick = bookId => {
    this.setState({ bookId });
  };

  listBooks = books =>
    books.map(book => (
      // eslint-disable-next-line
      <li key={book.id} onClick={() => this.onClick(book.id)}>
        {book.name}
      </li>
    ));

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ul id="book-list">{this.listBooks(data.books)}</ul>
            <BookDetail bookId={this.state.bookId} />
          </div>
        )}
      </div>
    );
  }
}

BookList.propTypes = {
  data: PropTypes.shape({
    books: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  }).isRequired
};

export default graphql(getBooksQuery)(BookList);
