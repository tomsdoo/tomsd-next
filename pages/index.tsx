import Head from "next/head";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/api/gql"
  })
});

const QUERY_ARTICLE = gql(`
  query {
    article(id: 1) {
      id
      title
      content
    }
  }
`);

const Article = () => {
  const { loading, error, data } = useQuery(QUERY_ARTICLE);
  if(loading){return <div>loading</div>;}
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
      <Article />
    </ApolloProvider>
  );
}
