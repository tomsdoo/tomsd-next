import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

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
} as Meta<typeof Artifacts>;

export const Default: StoryObj<typeof Artifacts> = {
  args: {},
  storyName: "default",
  render: () => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Artifacts />
    </MockedProvider>
  ),
};
