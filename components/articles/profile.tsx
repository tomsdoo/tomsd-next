import { gql, useQuery } from "@apollo/client";
import styles from "@/styles/components/articles/profile.module.css";

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
    <div className={styles.profile}>
      <div className={styles.name}>{data.profile.name}</div>
      <div className={styles.title}>{data.profile.title}</div>
      <div className={styles.description}>{data.profile.description}</div>
      <div className={`${styles.location} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>place</span>
        <div className={styles.content}>{data.profile.location}</div>
      </div>
      <div className={`${styles.certificates} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>verified</span>
        <ul>
          {data.profile.certificates.map(certificate => <li>{certificate.title}</li>)}
        </ul>
      </div>
      <div className={`${styles.favorites} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>favorite</span>
        <ul>
          {data.profile.favorites.map(favorite => <li>{favorite}</li>)}
        </ul>
      </div>
      <div className={`${styles.links} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>link</span>
        <ul>
          {data.profile.links.map(link => <li><a className={styles.link} href={link.url} target="_blank"><img className={styles.image} src={link.image} /><span className={styles.url}>{link.url}</span></a></li>)}
        </ul>
      </div>
    </div>
  );
}
