import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import RouteMenuList from "@/components/home/route-menu/list";

export default {
  title: "components/home/route-menu/RouteMenuList",
  component: RouteMenuList,
} as Meta<typeof RouteMenuList>;

export const Default: StoryObj<typeof RouteMenuList> = {
  args: {
    routes: [0, 1, 2].map((i) => ({
      href: `dummyUrl${i}`,
      pathRegexp: new RegExp(`dummy${i}`),
      headerLink: {
        title: `title${i}`,
      },
      meta: {
        title: `dummyMetaTitle${i}`,
        description: `dummyMetaDescription${i}`,
      },
    })),
  },
  storyName: "default",
  render: (args) => (
    <div
      style={{
        color: "#eeeeee",
        background: "#232323",
        width: "min(2-rem, calc(100vw - 2erm))",
      }}
    >
      <RouteMenuList {...args}></RouteMenuList>
    </div>
  ),
};
