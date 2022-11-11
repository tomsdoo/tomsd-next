import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Artifacts, { QUERY_ARTIFACTS } from "@/components/articles/artifacts";
import { MockedProvider } from "@apollo/client/testing";

const arrayLength = 6;
const artifacts = [...Array(arrayLength)].map((_, i) => ({
  link: `link ${i}`,
  title: `title ${i}`,
  image: `https://picsum.photos/${320 + i}/180`,
  description: `description ${i}`,
  orderScore: arrayLength - i,
}));

const mocks = [
  {
    request: {
      query: QUERY_ARTIFACTS,
    },
    result: {
      data: {
        artifacts,
      },
    },
  },
];

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "components/articles/Artifacts",
  component: Artifacts,
} as ComponentMeta<typeof Artifacts>;

const Template: ComponentStory<typeof Artifacts> = (args) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <Artifacts {...args} />
  </MockedProvider>
);

export const Default: ComponentStory<typeof Artifacts> = Template.bind({});
Default.args = {};
Default.storyName = "default";
