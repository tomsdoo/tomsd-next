import { useRouter } from "next/router";
import Head from "next/head";

export default function DynamicHead(){
  const siteName = "tomsd";

  const headCandidates = [
    {
      pathRegexp: /^\/profile\/?/,
      title: `profile | ${siteName}`
    },
    {
      pathRegexp: /^\/skills\/?/,
      title: `skills | ${siteName}`
    },
    {
      pathRegexp: /^\/history\/?/,
      title: `history | ${siteName}`
    },
    {
      pathRegexp: /^\/links\/?/,
      title: `links | ${siteName}`
    },
    {
      pathRegexp: /.*/,
      title: "tomsd"
    }
  ];

  const router = useRouter();
  const displayingHead = headCandidates.find(({ pathRegexp }) => pathRegexp.test(router.pathname));

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="UTF-8" />
      <meta name="description" content="description" />
      <title>{displayingHead.title}</title>
    </Head>
  );
}
