"use client";

import { ReactElement, ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "@/styles/layouts/covered.module.css";
import upwardStyles from "@/styles/transitions/upward.module.css";
import Header from "@/components/layouts/covered/header";

interface Props {
  children: ReactNode;
  loaded: boolean;
}

export default function Layout({
  children,
  loaded,
  ...props
}: Props): ReactElement {
  const nodeRef = useRef(null);

  return (
    <div {...props}>
      <div className={styles.cover}></div>
      <div className={styles.screen}>
        <Header
          className={styles.header}
          widthCoordinatedClassName={styles.widthCoordinated}
        ></Header>
        <CSSTransition
          nodeRef={nodeRef}
          in={loaded}
          appear={loaded}
          timeout={100}
          classNames={{ ...upwardStyles }}
        >
          <main className={styles.main} ref={nodeRef}>
            <div className={`${styles.widthCoordinated} ${styles.innerMain}`}>
              {children}
            </div>
          </main>
        </CSSTransition>
      </div>
    </div>
  );
}
