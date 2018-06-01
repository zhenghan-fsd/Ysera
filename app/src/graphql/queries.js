import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
        books {
          name
          genre
          id
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, getBookQuery };
