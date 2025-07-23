const siteName = "tomsd";

export type Route = {
  href: string;
  pathRegexp: RegExp;
  headerLink: {
    title: string;
  };
  meta: {
    title: string;
    description: string;
  };
};

export const siteIcon =
  "https://images.ctfassets.net/92wsih6ine68/7bRo9w8rDXNtNwM3JjITrn/be2bc1d8263f05900a1fcb4ead1d12a3/nana.png";

export const routes: Route[] = [
  {
    href: "/profile",
    pathRegexp: /^\/profile\/?$/,
    headerLink: {
      title: "profile",
    },
    meta: {
      title: `profile | ${siteName}`,
      description: "tomsd designs and develops Web and the operations.",
    },
  },
  {
    href: "/skills",
    pathRegexp: /^\/skills\/?$/,
    headerLink: {
      title: "skills",
    },
    meta: {
      title: `skills | ${siteName}`,
      description:
        "tomsd has the experiences of the Web and the system development.",
    },
  },
  {
    href: "/history",
    pathRegexp: /^\/history\/?$/,
    headerLink: {
      title: "history",
    },
    meta: {
      title: `history | ${siteName}`,
      description: "History of tomsd will tell you what he has deed.",
    },
  },
  {
    href: "/links",
    pathRegexp: /^\/links\/?$/,
    headerLink: {
      title: "links",
    },
    meta: {
      title: `links | ${siteName}`,
      description: "Links about tomsd indicate that his artifacts are there.",
    },
  },
  {
    href: "/stories",
    pathRegexp: /^\/stories\/?$/,
    headerLink: {
      title: "stories",
    },
    meta: {
      title: `stories | ${siteName}`,
      description:
        "stories about activities of tomsd are there to be read by you.",
    },
  },
];
