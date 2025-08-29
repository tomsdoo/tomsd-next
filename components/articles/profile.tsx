"use client";

import { ReactElement } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import styles from "@/styles/components/articles/profile.module.css";

export const QUERY_PROFILE = gql(`
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

interface ProfileData {
  name: string;
  photo: string;
  title: string;
  description: string;
  location: string;
  certificates: Array<{ title: string; when: string }>;
  favorites: string[];
  links: Array<{ name: string; image: string; url: string; shortName: string }>;
}

export default function Profile(): ReactElement {
  const { loading, error, data } = useQuery<{ profile: ProfileData }>(
    QUERY_PROFILE,
  );
  if (loading) {
    return (
      <div className={styles.loading}>
        <span className={styles.spinner}></span>
      </div>
    );
  }
  if (error) {
    return <div>error</div>;
  }
  if (data == null) {
    return <div>no data</div>;
  }

  const profile: ProfileData = data.profile;

  return (
    <div className={styles.profile}>
      <div className={styles.nameArea}>
        <img className={styles.photo} src={profile.photo} alt="photo" />
        <div className={styles.name}>{profile.name}</div>
      </div>
      <div className={styles.title}>{profile.title}</div>
      <div className={styles.description}>{profile.description}</div>
      <div className={`${styles.location} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>place</span>
        <div className={styles.content}>{profile.location}</div>
      </div>
      <div className={`${styles.certificates} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>verified</span>
        <ul>
          {profile.certificates.map((certificate, index) => (
            <li key={index}>{certificate.title}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.favorites} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>favorite</span>
        <ul>
          {profile.favorites.map((favorite, index) => (
            <li key={index}>{favorite}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.links} ${styles.iconAndContent}`}>
        <span className={`${styles.icon} material-icons`}>link</span>
        <ul className={styles.linkList}>
          {profile.links.map((link, index) => (
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
