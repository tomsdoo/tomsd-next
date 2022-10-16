import { ReactNode } from "react";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: setContext((_, { headers }) => {
    const requestedWith = "tomsd-client";
    return {
      headers: {
        ...headers,
        "x-requested-with": requestedWith
      }
    };
  }).concat(new HttpLink({
    uri: [process.env.ORIGIN, "/api/gql"].join("")
  }))
});

type Props = {
  children: ReactNode
};

export default function MyApolloProvider({ children,  ...props }: Props){
  return (
    <ApolloProvider {...props} client={client}>
      {children}
    </ApolloProvider>
  );
}
