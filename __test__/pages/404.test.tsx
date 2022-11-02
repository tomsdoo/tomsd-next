/*
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Page from "@/pages/404";
import { render, screen } from "@testing-library/react";

jest.mock(
  "@/layouts/covered",
  () =>
    function Layout({ children }) {
      return <div data-testid="mocked-layout">{children}</div>;
    }
);

jest.mock(
  "@/components/heads/head",
  () =>
    function DynamicHead() {
      return <div data-testid="mocked-head">mocked-head</div>;
    }
);

describe("404 page", () => {
  it("render", async () => {
    render(<Page />);
    expect(await screen.findByTestId("mocked-head")).toBeInTheDocument();
    expect(await screen.findByTestId("mocked-layout")).toBeInTheDocument();
    expect(await screen.findByText("404 NOT FOUND")).toBeInTheDocument();
  });
});
