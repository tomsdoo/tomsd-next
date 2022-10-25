import Link from "next/link";
import DynamicHead from "@/components/heads/head";
import { routes } from "@/routes/index";
import styles from "@/styles/pages/index.module.css";

export default function Page(){
  return (
    <>
      <DynamicHead />
      <div className={styles.screen}>
        <ul className={styles.photoList}>
          {
            [...Array(20).keys()].map(i =>
              <li key={i}>
                <img style={{ animationDelay: `${i * 50}ms` }} className={styles.photo} src={`https://picsum.photos/${50+i}`} />
              </li>
            )
          }
        </ul>
        <div className={styles.form}>
          <ul className={styles.menuList}>
            {routes.map((route, index) => <li key={index} className={styles.menuItem}><Link href={route.href}><a className={styles.menuLink}>{route.headerLink.title}</a></Link></li>)}
          </ul>
        </div>
      </div>
    </>
  );
}
