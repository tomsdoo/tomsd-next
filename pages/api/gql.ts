import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "@/apollo/type-defs";
import { resolvers } from "@/apollo/resolvers";
import Cors from "micro-cors";

const cors = Cors();

export const config = {
  api: {
    bodyParser: false
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if(req.method === "OPTIONS"){
    res.end();
    return false;
  }
  if(req.headers?.["x-requested-with"] !== "tomsd-client"){
    res.statusCode = 400;
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({ path: "/api/gql" })(req, res);
});
