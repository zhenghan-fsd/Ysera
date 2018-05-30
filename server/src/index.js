import express from "express";
import graphqlMiddleware from "express-graphql";
import schema from "./schema/schema";

const app = express();

app.use("/graphql", graphqlMiddleware({ schema, graphiql: true }));

app.listen(3001, () => console.info("Listening on port: 3001"));
