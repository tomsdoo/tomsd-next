"use client";

import { ReactElement } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { routes, siteIcon } from "@/routes/index";

export default function DynamicHead(): ReactElement {
  const siteName = "tomsd";

  const headCandidates = [
    ...routes,
    {
      pathRegexp: /.*/,
      meta: {
        title: siteName,
        description: "tomsd's web site.",
      },
    },
  ];

  const pathname = usePathname();
  const displayingHead = headCandidates.find(({ pathRegexp }) =>
    pathRegexp.test(pathname ?? ""),
  );

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta charSet="UTF-8" />
      <meta name="description" content={displayingHead?.meta.description} />
      <title>{displayingHead?.meta.title}</title>
      <link rel="icon" href={siteIcon} />
    </Head>
  );
}
