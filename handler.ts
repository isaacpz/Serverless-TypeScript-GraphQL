import { GraphQLServerLambda } from "graphql-yoga";
import { resolvers, typeDefs } from "./src/server";

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
