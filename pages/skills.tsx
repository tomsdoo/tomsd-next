import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import pageStyles from "@/styles/pages/profile.module.css";

export default function Page(){
  return (
    <>
      <DynamicHead />
      <Layout>
        <article className={pageStyles.article}>
          skills
        </article>
      </Layout>
    </>
  );
}
