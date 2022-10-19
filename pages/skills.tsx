import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import pageStyles from "@/styles/pages/skills.module.css";
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
