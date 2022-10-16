import Head from "next/head";
import ApolloProviderForArticles from "../components/providers/apollo";
import Article from "../components/articles/article";

export default function Page(){
  const message = "hello world";
  return (
    <ApolloProviderForArticles>
      <Head>
        <title>test</title>
      </Head>
      <div>
        {message}
      </div>
      <Article articleId={1} />
    </ApolloProviderForArticles>
  );
}
