import { ReactElement } from "react";
import { gql, useQuery } from "@apollo/client";
import skillsStyles from "@/styles/components/articles/skills.module.css";
import Skill from "@/components/articles/skill";
import { extendSkill } from "@/modules/misc/operationsForSkill";

const QUERY_SKILLS = gql(`
  query skills {
    skills {
      title
      years
      description
      web
    }
  }
  `);

export default function Skills(): ReactElement {
  const { loading, error, data } = useQuery(QUERY_SKILLS);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
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
