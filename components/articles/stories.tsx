"use client";

import { ReactElement } from "react";
import { gql, useQuery } from "@apollo/client";
import styles from "@/styles/components/articles/stories.module.css";

export const QUERY_STORIES = gql(`
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

export function Badges({ badges, ...props }): ReactElement {
  return (
    <ul {...props} className={styles.storyBadges}>
      {badges.map((badge, index) => (
        <li key={index}>{`#${badge as string}`}</li>
      ))}
    </ul>
  );
}

export function Story({ story }): ReactElement {
  return (
    <div className={styles.story}>
      <div className={styles.storyTitle}>{story.title}</div>
      <div className={styles.storyDescription}>{story.description}</div>
      <div className={styles.storyIssue}>{story.issue}</div>
      <div className={styles.storySolution}>{story.solution}</div>
      <Badges badges={story.badges} />
    </div>
  );
}

export default function Stories() {
  const { loading, error, data } = useQuery(QUERY_STORIES);
  if (loading) {
    return;
  }
  if (error) {
    return;
  }
  const stories = data.stories;

  return (
    <div className={styles.area}>
      <ul className={styles.list}>
        {stories.map((story, index) => (
          <li key={index} className={styles.item}>
            <Story story={story} />
          </li>
        ))}
      </ul>
    </div>
  );
}
