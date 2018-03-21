import { GreetQueryArgs } from "../schema/types";

export default (_, args: GreetQueryArgs) => {
  return `${args.greeting || "Hello"} there, ${args.name || "world"}`;
};
