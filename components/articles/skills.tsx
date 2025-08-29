"use client";

import { ReactElement } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import skillsStyles from "@/styles/components/articles/skills.module.css";
import Skill from "@/components/articles/skill";
import { extendSkill } from "@/modules/misc/operationsForSkill";

export const QUERY_SKILLS = gql(`
  query skills {
    skills {
      title
      years
      description
      web
    }
  }
  `);

interface Skill {
  title: string;
  years: number;
  description: string;
  web: boolean;
}

export default function Skills(): ReactElement {
  const { loading, error, data } = useQuery<{ skills: Skill[] }>(QUERY_SKILLS);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (data == null) {
    return <div>no data</div>;
  }

  const skills = data.skills
    .slice()
    .map(extendSkill)
    .sort((a, b) => b.score - a.score);

  return (
    <ul className={skillsStyles.list}>
      {skills.map((skill) => (
        <li key={skill.title}>
          <Skill skill={skill} />
        </li>
      ))}
    </ul>
  );
}
