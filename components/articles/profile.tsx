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

export default function Profile(){
  const { loading, error, data } = useQuery(QUERY_PROFILE);
  if(loading){return <div>loading</div>;}
  if(error){return <div>error</div>;}

  return (
    <>
      <div>{data.profile.name}</div>
      <div>{data.profile.title}</div>
    </>
  );
}
