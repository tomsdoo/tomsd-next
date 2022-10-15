import Head from "next/head";

export default function Page(){
  const message = "hello world";
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <div>
        {message}
      </div>
    </>
  );
}
