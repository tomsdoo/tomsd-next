import { ReactElement } from "react";
import DynamicHead from "@/components/heads/head";
import { routes } from "@/routes/index";
import styles from "@/styles/pages/index.module.css";
import getConfig from "next/config";
import RouteMenuForm from "@/components/home/route-menu/form";
import PhotoList from "@/components/home/images/photo-list";

const { publicRuntimeConfig } = getConfig();

export default function Page(): ReactElement {
  console.log(`version: ${publicRuntimeConfig.version as string}`);
  return (
    <>
      <DynamicHead />
      <div className={styles.screen}>
        <PhotoList className={styles.photoList}></PhotoList>
        <RouteMenuForm className={styles.form} routes={routes}></RouteMenuForm>
      </div>
    </>
  );
}
