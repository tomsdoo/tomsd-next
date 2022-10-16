import Head from "next/head";
import ApolloProviderForArticles from "../components/providers/apollo";
import Article from "../components/articles/article";

export default function Page(){
  const message = "hello world";
  return (
    <ApolloProviderForArticles>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="UTF-8" />
        <meta name="description" content="description" />
        <title>title</title>
      </Head>
      <div>
        {message}
      </div>
      <Article articleId={1} />
    </ApolloProviderForArticles>
  );
}
