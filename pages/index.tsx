import DynamicHead from "@/components/heads/head";
import styles from "@/styles/pages/index.module.css";

export default function Page(){
  const message = "hello world";
  return (
    <>
      <DynamicHead />
      <div className={styles.screen}>
        <ul className={styles.photoList}>
          {
            [...Array(20).keys()].map(i =>
              <li key={i}>
                <img style={{ animationDelay: `${i * 50}ms` }} className={styles.photo} src={`https://picsum.photos/${50+i}`} />
              </li>
            )
          }
        </ul>
        <div className={styles.form}>
          {message}
        </div>
      </div>
    </>
  );
}
