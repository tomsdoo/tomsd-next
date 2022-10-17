import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import pageStyles from "@/styles/pages/profile.module.css";
import ApolloProvider from "@/components/providers/apollo";

import { gql, useQuery } from "@apollo/client";
const QUERY_PROFILE = gql(`
  query profile {
    profile {
      name
      photo
      title
      description
      location
      certificates {
        title
        when
      }
      favorites
      links {
        name
        image
        url
        shortName
      }
    }
  }
  `);

function Profile(){
  const { loading, error, data } = useQuery(QUERY_PROFILE);
  if(loading){return <div>loading</div>;}
  if(error){return <div>error</div>;}

  return (
    <div>{data.profile.name}</div>
  );
}

export default function Page(){
  return (
    <ApolloProvider>
      <DynamicHead />
      <Layout>
        <article className={pageStyles.article}>
          <Profile />
        </article>
      </Layout>
    </ApolloProvider>
  );
}
