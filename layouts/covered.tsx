"use client";

import { ReactElement, ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "@/styles/layouts/covered.module.css";
import upwardStyles from "@/styles/transitions/upward.module.css";
import Header from "@/components/layouts/covered/header";

import { useSelector } from "react-redux";
import { selectPageMap, visit } from "@/lib/slices/visited-pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

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

  const visitedPages = useSelector(selectPageMap);
  const pathname = usePathname();
  useEffect(() => {
    console.log({ visitedPages });
  }, [pathname]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(visit(pathname));
  }, [pathname]);

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
