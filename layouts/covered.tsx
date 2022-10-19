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

  return (
    <div {...props}>
      <div className={styles.cover}></div>
      <div className={styles.screen}>
        <header className={styles.header}>
          <Link href="/profile">profile</Link>
          <Link href="/skills">skills</Link>
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
