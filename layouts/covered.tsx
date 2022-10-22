import { ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/layouts/covered.module.css";
import upwardStyles from "@/styles/transitions/upward.module.css";
import frostedStyles from "@/styles/named/frosted.module.css";

type Props = {
  children: ReactNode;
  loaded: boolean;
};

export default function Layout({ children, loaded, ...props }: Props){
  const nodeRef = useRef(null);
  const router = useRouter();

  const links = [
    { href: "/profile", title: "profile" },
    { href: "/skills", title: "skills" },
    { href: "/history", title: "history" },
    { href: "/links", title: "links" }
  ];

  return (
    <div {...props}>
      <div className={styles.cover}></div>
      <div className={styles.screen}>
        <header className={`${styles.header} ${frostedStyles.frostedALittle}`}>
          <div className={styles.innerHeader}>
            <div className={styles.logo}>
              <Link href="/">
                <a className={styles.link}>tomsd</a>
              </Link>
            </div>
            <ul className={styles.links}>
              {links.map(link => <Link href={link.href}><a className={`${styles.link} ${router.pathname.startsWith(link.href) ? styles.active : ""}`}>{link.title}</a></Link>)}
            </ul>
          </div>
        </header>
        <CSSTransition nodeRef={nodeRef} in={loaded} appear={loaded} timeout={100} classNames={{...upwardStyles}}>
          <main className={styles.main} ref={nodeRef}>
            {children}
          </main>
        </CSSTransition>
      </div>
    </div>
  );
}
