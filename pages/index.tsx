import ApolloProviderForArticles from "../components/providers/apollo";
import DynamicHead from "../components/heads/head";
import Article from "../components/articles/article";

export default function Page(){
  const message = "hello world";
  return (
    <ApolloProviderForArticles>
      <DynamicHead />
      <div>
        {message}
      </div>
      <Article articleId={1} />
    </ApolloProviderForArticles>
  );
}
