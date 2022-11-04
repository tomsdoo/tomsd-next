import { ReactElement } from "react";
import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import ApolloProvider from "@/components/providers/apollo";

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
      <div>{JSON.stringify(story.badges)}</div>
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
    <ul>
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
        <article>
          <Stories />
        </article>
      </Layout>
    </ApolloProvider>
  );
}
