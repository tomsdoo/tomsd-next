/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import { MockedProvider } from "@apollo/client/testing/react";
import "@testing-library/jest-dom";
import React from "react";
import Artifacts, { QUERY_ARTIFACTS } from "@/components/articles/artifacts";
import { render, screen } from "@testing-library/react";

jest.mock(
  "@/components/articles/artifact",
  () =>
    function Artifact() {
      return (
        <mocked-artifact data-testid="mocked-artifact">test</mocked-artifact>
      );
    },
);

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
      <MockedProvider mocks={mocks}>
        <Artifacts />
      </MockedProvider>,
    );
    expect(await screen.findByText("loading")).toBeInstanceOf(HTMLDivElement);
    expect(await screen.findByTestId("mocked-artifact")).toBeInTheDocument();
  });
});
