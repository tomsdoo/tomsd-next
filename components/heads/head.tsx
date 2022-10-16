import Head from "next/head";

export default function DynamicHead(){
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="UTF-8" />
      <meta name="description" content="description" />
      <title>title</title>
    </Head>
  );
}
