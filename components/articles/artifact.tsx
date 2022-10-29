import { ReactElement } from "react";
import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";
import artifactStyles from "@/styles/components/articles/artifact.module.css";

interface Props {
  artifact: {
    title: string;
    image: string;
    description: string;
    link: string;
  };
}

export default function Artifact({ artifact }: Props): ReactElement {
  return (
    <a
      href={artifact.link}
      target="_blank"
      rel="noreferrer"
      className={`${frostedStyles.frosted} ${shadowStyles.shadow_2_8_787878} ${artifactStyles.link}`}
    >
      <div className={artifactStyles.title}>{artifact.title}</div>
      <div className={artifactStyles.description}>{artifact.description}</div>
      <img
        className={artifactStyles.image}
        src={artifact.image}
        alt={`image: ${artifact.title}`}
      />
    </a>
  );
}
