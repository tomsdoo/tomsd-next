import { ReactElement } from "react";
import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import ApolloProvider from "@/components/providers/apollo";
import styles from "@/styles/pages/stories.module.css";
import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";

import { gql, useQuery } from "@apollo/client";

const QUERY_STORIES = gql(`
  query stories {
    stories {
      title
      description
      issue
      solution
      badges
    }
  }
  `);

function Story({ story }): ReactElement {
  return (
    <div>
      <div>{story.title}</div>
      <div>{story.description}</div>
      <div>{story.issue}</div>
      <div>{story.solution}</div>
      <div>{story.badges.join(" ")}</div>
    </div>
  );
}

function Stories(): ReactElement {
  const { loading, error, data } = useQuery(QUERY_STORIES);
  if (loading) {
    return;
  }
  if (error) {
    return;
  }
  const stories = data.stories;

  return (
    <ul className={styles.list}>
      {stories.map((story, index) => (
        <li key={index}>
          <Story story={story} />
        </li>
      ))}
    </ul>
  );
}

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
