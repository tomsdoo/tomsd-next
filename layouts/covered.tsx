import { ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import styles from "@/styles/layouts/covered.module.css";
import upwardStyles from "@/styles/transitions/upward.module.css";

type Props = {
  children: ReactNode;
  loaded: boolean;
};

export default function Layout({ children, loaded, ...props }: Props){
  const nodeRef = useRef(null);

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
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <a className={styles.link}>tomsd</a>
            </Link>
          </div>
          <ul className={styles.links}>
            <Link href={links[0].href}>
              <a className={styles.link}>{links[0].title}</a>
            </Link>
            <Link href="/skills">
              <a className={styles.link}>skills</a>
            </Link>
            <Link href="/history">
              <a className={styles.link}>history</a>
            </Link>
            <Link href="/links">
              <a className={styles.link}>links</a>
            </Link>
          </ul>
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
