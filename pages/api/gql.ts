import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/apollo/type-defs";
import { resolvers } from "@/apollo/resolvers";
import { GraphQLError } from "graphql";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req) => {
    if (req.headers?.["x-requested-with"] !== "tomsd-client") {
      throw new GraphQLError("Invalid request", {
        extensions: {
          code: "BAD_USER_INPUT",
          http: { status: 401 },
        },
      });
    }
    return {};
  },
});
