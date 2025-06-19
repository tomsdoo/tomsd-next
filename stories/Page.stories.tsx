import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";
import { within, userEvent } from "storybook/test";
import { Page } from "./Page";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Page>;

export const LoggedOut: StoryObj<typeof Page> = {
  render: (args) => <Page {...args} />,
};

export const LoggedIn: StoryObj<typeof Page> = {
  render: (args) => <Page {...args} />,
  // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", { name: /Log in/i });
    await userEvent.click(loginButton);
  },
};
