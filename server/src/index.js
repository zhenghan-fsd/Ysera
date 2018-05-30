import express from "express";
import graphqlMiddleware from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema/schema";

const app = express();

mongoose.connect("mongodb://localhost/graphql");

app.use("/graphql", graphqlMiddleware({ schema, graphiql: true }));

app.listen(3001, () => console.info("Listening on port: 3001"));
