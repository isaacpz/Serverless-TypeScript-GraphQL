import { GraphQLServerLambda } from "graphql-yoga";

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      return `Hello there, ${name || "world"}`;
    }
  }
};

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
