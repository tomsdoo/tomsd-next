import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import History, { QUERY_HISTORIES } from "@/components/articles/history";
import { MockedProvider } from "@apollo/client/testing";

const histories = [...Array(3)].map((_, i) => ({
  title: `title ${i}`,
  start: `200${i}-01-01T00:00:00Z`,
  end: `200${i}-12-31T23:59:59Z`,
  badges: [`badge ${i}-1`, `badge ${i}-2`],
  companyDescription: `company description ${i}`,
  description: `description ${i}`,
}));

const mocks = [
  {
    request: {
      query: QUERY_HISTORIES,
    },
    result: {
      data: {
        histories,
      },
    },
  },
];

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "components/articles/History",
  component: History,
} as ComponentMeta<typeof History>;

const Template: ComponentStory<typeof History> = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <div
      style={{
        width: "min(calc(100vw - 4rem), 80vw)",
        padding: "2rem",
        boxShadow: "inset 0 0 3px",
      }}
    >
      <History />
    </div>
  </MockedProvider>
);

export const Default: ComponentStory<typeof History> = Template.bind({});
Default.args = {};
Default.storyName = "default";
