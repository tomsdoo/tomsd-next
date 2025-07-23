import { ReactElement } from "react";
import Link from "next/link";
import styles from "@/styles/components/route-menu/item.module.css";
import type { Route } from "@/routes/index";

export default function RouteMenuItem({
  route,
}: {
  route: Route;
}): ReactElement {
  return (
    <Link href={route.href} className={styles.menuLink}>
      <span className={`material-icons ${styles.menuIcon}`}>snowing</span>
      <span className={styles.menuText}>{route.headerLink.title}</span>
    </Link>
  );
}
