import { ReactElement } from "react";
import DynamicHead from "@/components/heads/head";
import { routes } from "@/routes/index";
import styles from "@/styles/pages/index.module.css";
import getConfig from "next/config";
import RouteMenuItem from "@/components/route-menu/item";

const { publicRuntimeConfig } = getConfig();

export default function Page(): ReactElement {
  console.log(`version: ${publicRuntimeConfig.version as string}`);
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
                <RouteMenuItem route={route}></RouteMenuItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
