import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Artifact from "@/components/articles/artifact";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "components/articles/Artifact",
  component: Artifact,
} as ComponentMeta<typeof Artifact>;

const Template: ComponentStory<typeof Artifact> = (args) => (
  <div style={{ width: "min(20rem, calc(100vw - 2rem))" }}>
    <Artifact {...args} />
  </div>
);

export const Default: ComponentStory<typeof Artifact> = Template.bind({});
Default.args = {
  artifact: {
    link: "https://www.google.com",
    title: "title",
    description: "description",
    image: "https://picsum.photos/200",
  },
};
Default.storyName = "default";
