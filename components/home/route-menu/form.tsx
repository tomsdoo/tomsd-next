import RouteMenuList from "@/components/home/route-menu/list";
import styles from "@/styles/components/route-menu/form.module.css";
import type { Route } from "@/routes/index";

export default function RouteMenuForm({
  routes,
  className,
}: {
  routes: Route[];
  className?: string;
}) {
  const combinedClassName = className
    ? `${styles.form} ${className}`
    : styles.form;
  return (
    <div className={combinedClassName}>
      <h2 className={styles.formHeading}>tomsd</h2>
      <RouteMenuList routes={routes}></RouteMenuList>
    </div>
  );
}
