import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import RouteMenuForm from "@/components/home/route-menu/form";

export default {
  title: "components/home/route-menu/RouteMenuForm",
  component: RouteMenuForm,
} as Meta<typeof RouteMenuForm>;

export const Default: StoryObj<typeof RouteMenuForm> = {
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
      <RouteMenuForm {...args}></RouteMenuForm>
    </div>
  ),
};
