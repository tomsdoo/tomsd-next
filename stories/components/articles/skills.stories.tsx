import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

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
} as Meta<typeof Skills>;

export const Default: StoryObj<typeof Skills> = {
  args: {},
  storyName: "default",
  render: () => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Skills />
    </MockedProvider>
  ),
};
