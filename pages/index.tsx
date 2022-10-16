import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import MyApolloProvider from "../components/providers/apollo";

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
    <MyApolloProvider>
      <Head>
        <title>test</title>
      </Head>
      <div>
        {message}
      </div>
      <Article aid={2} />
    </MyApolloProvider>
  );
}
