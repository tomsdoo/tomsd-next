"use client";

import { ReactElement } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import artifactsStyles from "@/styles/components/articles/artifacts.module.css";
import Artifact from "@/components/articles/artifact";

export const QUERY_ARTIFACTS = gql(`
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

export default function Artifacts(): ReactElement {
  const { loading, error, data } = useQuery<{
    artifacts: {
      title: string;
      link: string;
      description: string;
      image: string;
      orderScore: number;
    }[];
  }>(QUERY_ARTIFACTS);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  const artifacts = [...(data?.artifacts ?? [])].sort(
    (a, b) => b.orderScore - a.orderScore,
  );

  return (
    <ul className={artifactsStyles.list}>
      {artifacts.map((artifact, index) => (
        <li key={index}>
          <Artifact artifact={artifact} />
        </li>
      ))}
    </ul>
  );
}
