import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";
import skillStyles from "@/styles/components/articles/skill.module.css";

export default function Skill({skill}){
  return (
    <div className={`${skillStyles.item} ${frostedStyles.frosted} ${shadowStyles.shadow_2_8_787878}`}>
      <span className={skillStyles.title}>{skill.title}</span>
      <span className={skillStyles.years}>{skill.years}</span>
      <div className={skillStyles.description}>{skill.description}</div>
    </div>
  );
}