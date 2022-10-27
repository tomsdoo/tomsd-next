import { gql, useQuery } from "@apollo/client";
import artifactsStyles from "@/styles/components/articles/artifacts.module.css";
import Artifact from "@/components/articles/artifact";

const QUERY_ARTIFACTS = gql(`
  query artifacts {
    artifacts {
      title
      link
      description
      image
      orderScore
    }
  }
  `);

export default function Artifacts() {
  const { loading, error, data } = useQuery(QUERY_ARTIFACTS);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  const artifacts = [...data.artifacts].sort(
    (a, b) => b.orderScore - a.orderScore
  );

  return (
    <ul className={artifactsStyles.list}>
      {artifacts.map((artifact, index) => (
        <Artifact key={index} artifact={artifact} />
      ))}
    </ul>
  );
}
