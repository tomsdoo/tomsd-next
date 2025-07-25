import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import PhotoList from "@/components/home/images/photo-list";

export default {
  title: "components/home/images/PhotoList",
  component: PhotoList,
} as Meta<typeof PhotoList>;

export const Default: StoryObj<typeof PhotoList> = {
  args: {},
  storyName: "default",
  render: () => (
    <div
      style={{
        color: "#eeeeee",
        background: "#232323",
        width: "min(2-rem, calc(100vw - 2erm))",
      }}
    >
      <PhotoList></PhotoList>
    </div>
  ),
};
