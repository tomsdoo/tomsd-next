import { ReactElement } from "react";
import Link from "next/link";
import DynamicHead from "@/components/heads/head";
import { routes } from "@/routes/index";
import styles from "@/styles/pages/index.module.css";

export default function Page(): ReactElement {
  return (
    <>
      <DynamicHead />
      <div className={styles.screen}>
        <ul className={styles.photoList}>
          {[...Array(20).keys()].map((i) => (
            <li key={i}>
              <img
                style={{ animationDelay: `${i * 50}ms` }}
                className={styles.photo}
                src={`https://picsum.photos/${50 + i}`}
                alt=""
              />
            </li>
          ))}
        </ul>
        <div className={styles.form}>
          <h2 className={styles.formHeading}>tomsd</h2>
          <ul className={styles.menuList}>
            {routes.map((route, index) => (
              <li key={index} className={styles.menuItem}>
                <Link href={route.href}>
                  <a className={styles.menuLink}>
                    <span className={`material-icons ${styles.menuIcon}`}>
                      flag
                    </span>
                    <span className={styles.menuText}>
                      {route.headerLink.title}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
