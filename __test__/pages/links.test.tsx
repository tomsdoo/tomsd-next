/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Page from "@/pages/links";
import { render, screen } from "@testing-library/react";

jest.mock(
  "@/components/providers/apollo",
  () =>
    function MockedApolloProvider({ children }) {
      return <div data-testid="mocked-apollo-provider">{children}</div>;
    }
);

jest.mock(
  "@/components/heads/head",
  () =>
    function MockedHead() {
      return <div data-testid="mocked-head">mocked head</div>;
    }
);

jest.mock(
  "@/layouts/covered",
  () =>
    function MockedLayout({ children }) {
      return <div data-testid="mocked-layout">{children}</div>;
    }
);

jest.mock(
  "@/components/articles/artifacts",
  () =>
    function MockedArtifacts() {
      return <div data-testid="mocked-artifacts">mocked artifacts</div>;
    }
);

describe("links page", () => {
  it("render", async () => {
    render(<Page />);
    expect(
      await screen.findByTestId("mocked-apollo-provider")
    ).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-head")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-layout")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-artifacts")).toBeInTheDocument();
  });
});
