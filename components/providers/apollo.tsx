import { ReactElement, ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/modules/apolloClient";

interface Props {
  children: ReactNode;
}

export default function MyApolloProvider({ children, ...props }: Props): ReactElement {
  return (
    <ApolloProvider {...props} client={client}>
      {children}
    </ApolloProvider>
  );
}
