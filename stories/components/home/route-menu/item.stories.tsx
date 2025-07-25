import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import RouteMenuItem from "@/components/home/route-menu/item";

export default {
  title: "components/home/route-menu/RouteMenuItem",
  component: RouteMenuItem,
} as Meta<typeof RouteMenuItem>;

export const Default: StoryObj<typeof RouteMenuItem> = {
  args: {
    route: {
      href: "dummyUrl",
      pathRegexp: /dummy/,
      headerLink: {
        title: "dummyTitle",
      },
      meta: {
        title: "dummyMetaTitle",
        description: "dummyMetaDescription",
      },
    },
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
      <RouteMenuItem {...args}></RouteMenuItem>
    </div>
  ),
};
