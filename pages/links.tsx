import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import pageStyles from "@/styles/pages/skills.module.css";
import ApolloProvider from "@/components/providers/apollo";

import { gql, useQuery } from "@apollo/client";
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

function Artifacts(){
  const { loading, error, data } = useQuery(QUERY_ARTIFACTS);
  if(loading){return <div>loading</div>;}
  if(error){return <div>error</div>;}

  return (
    <ul>
      {data.artifacts.map(artifact => <li>{artifact.title}</li>)}
    </ul>
  );
}

export default function Page(){
  return (
    <ApolloProvider>
      <DynamicHead />
      <Layout loaded={true}>
        <Artifacts />
      </Layout>
    </ApolloProvider>
  );
}
