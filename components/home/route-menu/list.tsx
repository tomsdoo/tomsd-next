import RouteMenuItem from "@/components/home/route-menu/item";
import styles from "@/styles/components/route-menu/list.module.css";
import type { Route } from "@/routes/index";

export default function RouteMenuList({ routes }: { routes: Route[] }) {
  return (
    <ul className={styles.menuList}>
      {routes.map((route, index) => (
        <li key={index}>
          <RouteMenuItem route={route}></RouteMenuItem>
        </li>
      ))}
    </ul>
  );
}
