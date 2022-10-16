import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../modules/apolloClient";

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
