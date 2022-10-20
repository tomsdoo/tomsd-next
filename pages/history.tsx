import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import pageStyles from "@/styles/pages/history.module.css";
import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";
import ApolloProvider from "@/components/providers/apollo";
import History from "@/components/articles/history";

export default function Page(){
  return (
    <ApolloProvider>
      <DynamicHead />
      <Layout loaded={true}>
        <article className={`${pageStyles.article} ${frostedStyles.frosted} ${shadowStyles.shadow_2_8_787878}`}>
          <History />
        </article>
      </Layout>
    </ApolloProvider>
  );
}
