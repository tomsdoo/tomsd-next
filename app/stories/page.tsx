import { ReactElement } from "react";
import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import ApolloProvider from "@/components/providers/apollo";
import styles from "@/styles/pages/stories.module.css";
import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";
import Stories from "@/components/articles/stories";

export default function Page(): ReactElement {
  return (
    <ApolloProvider>
      <DynamicHead />
      <Layout loaded={true}>
        <article
          className={`${styles.article} ${frostedStyles.frosted} ${shadowStyles.shadow_2_8_787878}`}
        >
          <Stories />
        </article>
      </Layout>
    </ApolloProvider>
  );
}
