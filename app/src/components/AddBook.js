import React from "react";
import { graphql } from "react-apollo";
import PropTypes from "prop-types";

import { getAuthorsQuery } from "../queries/queries";

const AddBook = ({ data }) => (
  <form id="add-book">
    <div className="form-group">
      <label htmlFor="bookName">Book name:</label>
      <input
        type="text"
        className="form-control"
        id="bookName"
        placeholder="Book name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        className="form-control"
        id="genre"
        placeholder="Genre"
      />
    </div>

    <div className="form-group">
      <label htmlFor="author">Author:</label>
      <select id="author" className="form-control">
        <option>-- Select Author --</option>
        {data.loading
          ? null
          : data.authors.map(author => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
      </select>
    </div>

    <span className="input-group-btn">
      <button type="button" className="btn btn-default btn-block">
        Go!
      </button>
    </span>
  </form>
);

AddBook.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  }).isRequired
};

export default graphql(getAuthorsQuery)(AddBook);
