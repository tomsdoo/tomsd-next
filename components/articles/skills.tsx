import { gql, useQuery } from "@apollo/client";
import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";
import skillsStyles from "@/styles/components/articles/skills.module.css";

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
        <li key={skill.title} className={`${skillsStyles.item} ${frostedStyles.frosted} ${shadowStyles.shadow_2_8_787878}`}>
          <span className={skillsStyles.skillTitle}>{skill.title}</span>
          <span className={skillsStyles.skillYears}>{skill.years}</span>
          <div className={skillsStyles.skillDescription}>{skill.description}</div>
        </li>
      )}
    </ul>
  );
}
