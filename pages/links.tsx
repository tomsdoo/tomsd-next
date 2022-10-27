import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import pageStyles from "@/styles/pages/skills.module.css";
import ApolloProvider from "@/components/providers/apollo";
import Artifacts from "@/components/articles/artifacts";

export default function Page() {
  return (
    <ApolloProvider>
      <DynamicHead />
      <Layout loaded={true}>
        <article className={pageStyles.article}>
          <Artifacts />
        </article>
      </Layout>
    </ApolloProvider>
  );
}
