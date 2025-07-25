import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import Header from "@/components/layouts/covered/header";

export default {
  title: "components/layouts/covered/Header",
  component: Header,
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
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
      <Header
        className="test-class"
        widthCoordinatedClassName="test-with-coordinated-class"
      ></Header>
    </div>
  ),
};
