import { useRouter } from "next/router";
import Head from "next/head";

export default function DynamicHead(){
  const siteName = "tomsd";

  const headCandidates = [
    {
      pathRegexp: /^\/profile\/?/,
      title: `profile | ${siteName}`,
      description: "tomsd designs and developments Web and the operations."
    },
    {
      pathRegexp: /^\/skills\/?/,
      title: `skills | ${siteName}`,
      description: "tomsd has the experiences of the Web and the system development."
    },
    {
      pathRegexp: /^\/history\/?/,
      title: `history | ${siteName}`,
      description: "History of tomsd will tell you what he has deed."
    },
    {
      pathRegexp: /^\/links\/?/,
      title: `links | ${siteName}`,
      description: "Links about tomsd indicate that his artifacts are there."
    },
    {
      pathRegexp: /.*/,
      title: siteName,
      description: "tomsd's web site."
    }
  ];

  const router = useRouter();
  const displayingHead = headCandidates.find(({ pathRegexp }) => pathRegexp.test(router.pathname));

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="UTF-8" />
      <meta name="description" content={displayingHead.description} />
      <title>{displayingHead.title}</title>
    </Head>
  );
}
