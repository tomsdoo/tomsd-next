import DynamicHead from "@/components/heads/head";
import Layout from "@/layouts/covered";
import pageStyles from "@/styles/pages/profile.module.css";
import frostedStyles from "@/styles/named/frosted.module.css";
import shadowStyles from "@/styles/named/shadow.module.css";

export default function Page(){
  return (
    <>
      <DynamicHead />
      <Layout>
        <article className={`${pageStyles.article} ${frostedStyles.frosted} ${shadowStyles.shadow_2_8_787878}`}>
          skills
        </article>
      </Layout>
    </>
  );
}
