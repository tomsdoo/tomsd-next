/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import React from "react";
import Profile, { QUERY_PROFILE } from "@/components/articles/profile";
import { render, screen } from "@testing-library/react";

describe("Profile component", () => {
  it("render", async () => {
    const profile = {
      name: "name",
      photo: "photo",
      title: "title",
      description: "description",
      location: "location",
      certificates: ["2000-01-01", "2000-12-31"].map((when, i) => ({
        title: `certificate ${i}`,
        when,
      })),
      favorites: ["favorite 1", "favorite 2"],
      links: [1, 2].map((i) => ({
        name: `link name ${i}`,
        image: `link image ${i}`,
        url: `link url ${i}`,
        shortName: `link shortName ${i}`,
      })),
    };

    const mocks = [
      {
        request: {
          query: QUERY_PROFILE,
        },
        result: {
          data: {
            profile,
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Profile />
      </MockedProvider>
    );

    expect(await screen.findByText("name")).toBeInTheDocument();
    expect(await screen.findByAltText("photo")).toBeInTheDocument();
  });
});
