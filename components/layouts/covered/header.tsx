import { useRouter } from "next/router";
import Link from "next/link";
import frostedStyles from "@/styles/named/frosted.module.css";
import { routes } from "@/routes/index";
import styles from "@/styles/components/layouts/covered/header.module.css";

export default function Header({
  className,
  widthCoordinatedClassName,
}: {
  className?: string;
  widthCoordinatedClassName: string;
}) {
  const router = useRouter();

  return (
    <header className={`${className} ${frostedStyles.frostedALittle}`}>
      <div className={`${styles.innerHeader} ${widthCoordinatedClassName}`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.link}>
            tomsd
          </Link>
        </div>
        <ul className={styles.links}>
          {routes.map((route, index) => (
            <li key={index} className={styles.linkItem}>
              <Link
                href={route.href}
                className={`${styles.link} ${
                  router.pathname.startsWith(route.href) ? styles.active : ""
                }`}
              >
                {route.headerLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
