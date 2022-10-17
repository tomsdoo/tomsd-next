import { ReactNode } from "react";
import Link from "next/link";
import styles from "@/styles/layouts/covered.module.css";

type Props = {
  children: ReactNode
};

export default function Layout({ children, ...props }: Props){
  return (
    <div {...props}>
      <div className={styles.cover}></div>
      <div className={styles.screen}>
        <header className={styles.header}>
          <Link href="/profile">profile</Link>
          <Link href="/skills">skills</Link>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}
