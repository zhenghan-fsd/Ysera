import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import PropTypes from "prop-types";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const listBooks = books =>
  books.map(book => <li key={book.id}>{book.name}</li>);

const BookList = ({ data }) => {
  if (data.loading) {
    return <p>Loading...</p>;
  }

  return <ul id="book-list">{listBooks(data.books)}</ul>;
};

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
