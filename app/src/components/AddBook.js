import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import PropTypes from "prop-types";

import { getAuthorsQuery, getBooksQuery } from "../graphql/queries";
import { addBookMutation } from "../graphql/mutations";
import "./AddBook.css";

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();

    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };

  render() {
    const { authorsQuery } = this.props;
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label htmlFor="bookName">Book name:</label>
          <input
            type="text"
            id="bookName"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Book name"
          />
        </div>

        <div className="field">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={this.state.genre}
            onChange={this.onChange}
            placeholder="Genre"
          />
        </div>

        <div className="field">
          <label htmlFor="author">Author:</label>
          <select
            id="author"
            name="authorId"
            value={this.state.authorId}
            onChange={this.onChange}
          >
            <option>-- Select Author --</option>
            {authorsQuery.loading
              ? null
              : authorsQuery.authors.map(author => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
          </select>
        </div>

        <span>
          <button type="submit">Go!</button>
        </span>
      </form>
    );
  }
}

AddBook.propTypes = {
  authorsQuery: PropTypes.shape({
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  addBookMutation: PropTypes.func.isRequired
};

export default compose(
  graphql(getAuthorsQuery, { name: "authorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
