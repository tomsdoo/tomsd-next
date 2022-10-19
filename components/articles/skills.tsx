import { gql, useQuery } from "@apollo/client";
import skillsStyles from "@/styles/components/articles/skills.module.css";
import Skill from "@/components/articles/skill";

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

export default function Skills(){
  const { loading, error, data } = useQuery(QUERY_SKILLS);
  if(loading){return <div>loading</div>;}
  if(error){return <div>error</div>;}

  return (
    <ul className={skillsStyles.list}>
      {data.skills.map((skill) =>
        <li key={skill.title}>
          <Skill skill={skill} />
        </li>
      )}
    </ul>
  );
}
