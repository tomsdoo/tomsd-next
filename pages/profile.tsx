import DynamicHead from "@/components/heads/head";
import pageStyles from "@/styles/pages/profile.module.css";

export default function Page(){
  return (
    <>
      <DynamicHead />
      <div>
        <div className={pageStyles.cover}></div>
        <div className={pageStyles.screen}>
          <header className={pageStyles.header}>
            wow
          </header>
          <main className={pageStyles.main}>
            <article className={pageStyles.article}>
              content
            </article>
          </main>
        </div>
      </div>
    </>
  );
}
