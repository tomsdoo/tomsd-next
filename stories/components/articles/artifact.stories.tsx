import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import Artifact from "@/components/articles/artifact";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "components/articles/Artifact",
  component: Artifact,
} as Meta<typeof Artifact>;

export const Default: StoryObj<typeof Artifact> = {
  args: {
    artifact: {
      link: "https://www.google.com",
      title: "title",
      description: "description",
      image: "https://picsum.photos/200",
    },
  },
  storyName: "default",
  render: (args) => (
    <div style={{ width: "min(20rem, calc(100vw - 2rem))" }}>
      <Artifact {...args} />
    </div>
  ),
};
