import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/nextjs";

import Skills, { QUERY_SKILLS } from "@/components/articles/skills";
import { MockedProvider } from "@apollo/client/testing";

const arrayLength = 10;
const skills = [...Array(arrayLength)].map((_, i) => ({
  title: `skill ${i}`,
  years: i,
  description: `skill description ${i}`,
  web: i % 2 === 0,
}));

const mocks = [
  {
    request: {
      query: QUERY_SKILLS,
    },
    result: {
      data: {
        skills,
      },
    },
  },
];

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "components/articles/Skills",
  component: Skills,
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <Skills />
  </MockedProvider>
);

export const Default: ComponentStory<typeof Skills> = Template.bind({});
Default.args = {};
Default.storyName = "default";
