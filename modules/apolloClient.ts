import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: setContext((_, { headers }) => {
    const requestedWith = "tomsd-client";
    return {
      headers: {
        ...headers,
        "x-requested-with": requestedWith,
      },
    };
  }).concat(
    new HttpLink({
      uri: [process.env.ORIGIN, "/api/gql"].join(""),
    })
  ),
});
