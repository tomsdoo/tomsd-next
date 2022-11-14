import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Profile, { QUERY_PROFILE } from "@/components/articles/profile";
import { MockedProvider } from "@apollo/client/testing";

const mocks = [
  {
    request: {
      query: QUERY_PROFILE,
    },
    result: {
      data: {
        profile: {
          name: "alice",
          photo: "https://picsum.photos/200",
          title: "is a good person",
          location: "wherever",
          certificates: ["2000-01-01", "2000-12-31"].map((when) => ({
            title: `certificate ${when}`,
            when,
          })),
          favorites: ["playing the guitar", "singing songs"],
          links: [1, 2].map((i) => ({
            name: `link ${i}`,
            image: `https://picsum.photos/${35 + i}`,
            url: "https://www.google.com",
            shortName: `name ${i}`,
          })),
        },
      },
    },
  },
];

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "components/articles/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <div
      style={{
        width: "min(calc(100vw - 4rem), 80vw)",
        padding: "2rem",
        boxShadow: "inset 0 0 3px",
      }}
    >
      <Profile />
    </div>
  </MockedProvider>
);

export const Default: ComponentStory<typeof Profile> = Template.bind({});
Default.args = {};
Default.storyName = "default";
