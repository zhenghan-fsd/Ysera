import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.css";
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div id="app">
      <h1>A Graphql Sample</h1>
      <BookList />
    </div>
  </ApolloProvider>
);

export default App;
