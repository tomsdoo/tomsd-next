"use client";

import { ReactElement } from "react";
import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import styles from "@/styles/pages/404.module.css";

export default function Page(): ReactElement {
  return (
    <>
      <DynamicHead />
      <Layout loaded={true}>
        <article className={styles.article}>404 NOT FOUND</article>
      </Layout>
    </>
  );
}
