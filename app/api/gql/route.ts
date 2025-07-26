import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/apollo/type-defs";
import { resolvers } from "@/apollo/resolvers";
import { GraphQLError } from "graphql";
import type { NextRequest } from "next/server";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextRequest) => {
    const requestedWith = req.headers.get("x-requested-with");
    if (requestedWith !== "tomsd-client") {
      console.log("えらー");
      throw new GraphQLError("Invalid request", {
        extensions: {
          code: "BAD_USER_INPUT",
          http: { status: 401 },
        },
      });
    }

    return {
      req,
    };
  },
});

export async function POST(request: NextRequest) {
  return await handler(request);
}
