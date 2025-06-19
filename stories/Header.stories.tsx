import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import { Header } from "./Header";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Header>;

export const LoggedIn: StoryObj<typeof Header> = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
  render: (args) => <Header {...args} />,
};

export const LoggedOut: StoryObj<typeof Header> = {
  args: {},
  render: (args) => <Header {...args} />,
};
