import DynamicHead from "@/components/heads/head";
import headerStyles from "@/styles/pages/profile.module.css";

export default function Page(){
  return (
    <>
      <DynamicHead />
      <div>
        <header className={headerStyles.header}>
          wow
        </header>
      </div>
    </>
  );
}
