import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Skill from "@/components/articles/skill";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "components/articles/Skill",
  component: Skill,
} as ComponentMeta<typeof Skill>;

const Template: ComponentStory<typeof Skill> = (args) => (
  <div style={{ width: "min(20rem, calc(100vw - 2rem))" }}>
    <Skill {...args} />
  </div>
);

export const Default: ComponentStory<typeof Skill> = Template.bind({});
Default.args = {
  skill: {
    years: 10,
    title: "JavaScript",
    description:
      "It's a description with some sentences. Yes, this is a test line. And this is the description of the skill.",
  },
};
Default.storyName = "default";
