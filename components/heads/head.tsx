import { useRouter } from "next/router";
import Head from "next/head";
import { routes } from "@/routes/index";

export default function DynamicHead(){
  const siteName = "tomsd";

  const headCandidates = [
    ...routes,
    {
      pathRegexp: /.*/,
      meta: {
        title: siteName,
        description: "tomsd's web site."
      }
    }
  ];

  const router = useRouter();
  const displayingHead = headCandidates.find(({ pathRegexp }) => pathRegexp.test(router.pathname));

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="UTF-8" />
      <meta name="description" content={displayingHead.meta.description} />
      <title>{displayingHead.meta.title}</title>
    </Head>
  );
}
