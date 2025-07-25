import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import RotatingImage from "@/components/home/images/rotating-image";

export default {
  title: "components/home/images/RotatingImage",
  component: RotatingImage,
} as Meta<typeof RotatingImage>;

export const Default: StoryObj<typeof RotatingImage> = {
  args: {
    src: "https://picsum.photos/50",
    animationDelay: 1000,
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
      <div style={{ width: "100px" }}>
        <RotatingImage {...args}></RotatingImage>
      </div>
    </div>
  ),
};
