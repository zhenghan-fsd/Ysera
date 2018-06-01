import React from "react";
import { graphql } from "react-apollo";
import PropTypes from "prop-types";
import { getBookQuery } from "../graphql/queries";
import "./BookDetail.css";

const displayBookDetail = book => {
  if (book) {
    return (
      <div>
        <p>Book Detail</p>
        <h2>name: {book.name}</h2>
        <h6>genre: {book.genre}</h6>
        <h6>author: {book.author.name}</h6>
        <p>Author books:</p>
        <ul>
          {book.author.books.map(authorBook => (
            <li key={authorBook.id}>{authorBook.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <p>No Book Select</p>;
};

const BookDetail = ({ data }) => (
  <div id="book-detail">
    {data.loading ? <p>Loading...</p> : displayBookDetail(data.book)}
  </div>
);

BookDetail.propTypes = {
  bookId: PropTypes.string,
  data: PropTypes.shape({
    book: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired
};

export default graphql(getBookQuery, {
  options: props => ({
    variables: {
      id: props.bookId ? props.bookId : null
    }
  })
})(BookDetail);
