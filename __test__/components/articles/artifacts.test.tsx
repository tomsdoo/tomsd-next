/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import React from "react";
import Artifacts, { QUERY_ARTIFACTS } from "@/components/articles/artifacts";
import { render, screen } from "@testing-library/react";

describe("Artifacts component", () => {
  it("render", async () => {
    const artifacts = [
      {
        link: "link",
        title: "title",
        image: "image",
        description: "description",
        orderScore: 1,
      },
    ];

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

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Artifacts />
      </MockedProvider>
    );
    expect(await screen.findByText("loading")).toBeInTheDocument();
    expect(await screen.findByText("title")).toBeInTheDocument();
  });
});
