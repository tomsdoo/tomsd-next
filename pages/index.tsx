import Head from "next/head";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql, useQuery } from "@apollo/client";
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

const QUERY_ARTICLE = gql(`
  query article($id: Int!) {
    article(id: $id) {
      id
      title
      content
    }
  }
`);

const Article = ({ aid }) => {
  const { loading, error, data } = useQuery(QUERY_ARTICLE, {
    variables: { id: aid }
  });
  if(loading){console.log(process.env.ORIGIN);return <div>loading</div>;}
  if(error){return <div>error</div>;}

  return (
    <div>
      <div>{data.article.id}</div>
      <div>{data.article.title}</div>
      <div>{data.article.content}</div>
    </div>
  );
};

export default function Page(){
  const message = "hello world";
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>test</title>
      </Head>
      <div>
        {message}
      </div>
      <Article aid={2} />
    </ApolloProvider>
  );
}
