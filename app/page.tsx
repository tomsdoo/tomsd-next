import packageJson from "@@/package.json" with { type: "json" };
import type { ReactElement } from "react";
import DynamicHead from "@/components/heads/head";
import PhotoList from "@/components/home/images/photo-list";
import RouteMenuForm from "@/components/home/route-menu/form";
import { routes } from "@/routes/index";
import styles from "@/styles/pages/index.module.css";

export default function Page(): ReactElement {
	console.log(`version: ${packageJson.version as string}`);
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
