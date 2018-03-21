import * as path from "path";
import { importSchema } from "graphql-import";
import { GreetQueryArgs } from "./schema/types";

export const typeDefs = importSchema(
  path.join(__dirname, "schema/schema.graphql")
);

export const resolvers = {
  Query: {
    greet: (_, args: GreetQueryArgs) => {
      return `${args.greeting || "hello"} there, ${args.name || "world"}`;
    }
  }
};
