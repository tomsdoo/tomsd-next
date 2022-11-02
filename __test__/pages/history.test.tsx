/*
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Page from "@/pages/history";
import { render, screen } from "@testing-library/react";

jest.mock(
  "@/components/providers/apollo",
  () =>
    function MockedProvider({ children }) {
      return <div data-testid="mocked-provider">{children}</div>;
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
  "@/components/articles/history",
  () =>
    function MockedHistory() {
      return <div data-testid="mocked-history">mocked history</div>;
    }
);

describe("History page", () => {
  it("render", async () => {
    render(<Page />);
    expect(await screen.findByTestId("mocked-provider")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-head")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-layout")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-history")).toBeInTheDocument();
  });
});
