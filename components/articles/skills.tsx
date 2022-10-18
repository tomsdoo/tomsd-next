import { gql, useQuery } from "@apollo/client";
import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";

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
    <ul>
      {data.skills.map((skill) =>
        <li className={`${frostedStyles.frosted} ${shadowStyles.shadow_2_8_787878}`}>{skill.title}</li>
      )}
    </ul>
  );
}
