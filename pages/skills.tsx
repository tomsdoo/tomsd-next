import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import pageStyles from "@/styles/pages/profile.module.css";
import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";
import ApolloProvider from "@/components/providers/apollo";
import Skills from "@/components/articles/skills";

export default function Page(){
  return (
    <ApolloProvider>
      <DynamicHead />
      <Layout>
        <article className={`${pageStyles.article}`}>
          <Skills />
        </article>
      </Layout>
    </ApolloProvider>
  );
}
