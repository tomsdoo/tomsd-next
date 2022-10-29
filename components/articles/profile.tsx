import { ReactElement } from "react";
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

export default function Profile(): ReactElement {
  const { loading, error, data } = useQuery(QUERY_PROFILE);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.nameArea}>
        <img className={styles.photo} src={data.profile.photo} alt="photo" />
        <div className={styles.name}>{data.profile.name}</div>
      </div>
      <div className={styles.title}>{data.profile.title}</div>
      <div className={styles.description}>{data.profile.description}</div>
      <div className={`${styles.location} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>place</span>
        <div className={styles.content}>{data.profile.location}</div>
      </div>
      <div className={`${styles.certificates} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>verified</span>
        <ul>
          {data.profile.certificates.map((certificate, index) => (
            <li key={index}>{certificate.title}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.favorites} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>favorite</span>
        <ul>
          {data.profile.favorites.map((favorite, index) => (
            <li key={index}>{favorite}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.links} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>link</span>
        <ul className={styles.linkList}>
          {data.profile.links.map((link, index) => (
            <li key={index} className={styles.linkListItem}>
              <a
                className={styles.link}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.image}
                  src={link.image}
                  alt={`image: ${link.shortName}`}
                />
                <span className={styles.url}>{link.url}</span>
                <span className={styles.linkShortName}>{link.shortName}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
