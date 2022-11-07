/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "@/pages/profile";

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
  "@/components/providers/apollo",
  () =>
    function MockedProvider({ children }) {
      return <div data-testid="mocked-provider">{children}</div>;
    }
);

jest.mock(
  "@/components/articles/profile",
  () =>
    function MockedProfile() {
      return <div data-testid="mocked-profile">mocked profile</div>;
    }
);

describe("profile page", () => {
  it("render", async () => {
    render(<Page />);

    expect(await screen.findByTestId("mocked-head")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-layout")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-provider")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-profile")).toBeInTheDocument();
  });
});
