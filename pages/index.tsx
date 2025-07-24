import { ReactElement } from "react";
import DynamicHead from "@/components/heads/head";
import { routes } from "@/routes/index";
import styles from "@/styles/pages/index.module.css";
import getConfig from "next/config";
import RouteMenuForm from "@/components/home/route-menu/form";
import RotatingImage from "@/components/home/images/rotating-image";

const { publicRuntimeConfig } = getConfig();

export default function Page(): ReactElement {
  console.log(`version: ${publicRuntimeConfig.version as string}`);
  return (
    <>
      <DynamicHead />
      <div className={styles.screen}>
        <ul className={styles.photoList}>
          {[...Array(20).keys()].map((i) => (
            <li key={i}>
              <RotatingImage
                src={`https://picsum.photos/${50 + i}`}
                animationDelay={i * 50}
              ></RotatingImage>
            </li>
          ))}
        </ul>
        <RouteMenuForm className={styles.form} routes={routes}></RouteMenuForm>
      </div>
    </>
  );
}
