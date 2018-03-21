import * as path from "path";
import { importSchema } from "graphql-import";
import { GreetQueryArgs } from "./schema/types";
import { IResolvers } from "graphql-yoga/dist/src/types";
import greetResolver from "./resolvers/greetResolver";

export const typeDefs = importSchema(
  path.join(__dirname, "schema/schema.graphql")
);

export const resolvers: IResolvers = {
  Query: {
    greet: greetResolver
  }
};
