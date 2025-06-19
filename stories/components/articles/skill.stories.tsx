import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import Skill from "@/components/articles/skill";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "components/articles/Skill",
  component: Skill,
} as Meta<typeof Skill>;

export const Default: StoryObj<typeof Skill> = {
  args: {
    skill: {
      years: 10,
      title: "JavaScript",
      description:
        "It's a description with some sentences. Yes, this is a test line. And this is the description of the skill.",
    },
  },
  storyName: "default",
  render: (args) => (
    <div style={{ width: "min(20rem, calc(100vw - 2rem))" }}>
      <Skill {...args} />
    </div>
  ),
};
