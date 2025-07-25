/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Layout from "@/layouts/covered";
import { render, screen } from "@testing-library/react";

jest.mock("react", () => {
  return {
    // @ts-expect-error type coordination
    ...jest.requireActual("react"),
    useRef: () => undefined,
  };
});

jest.mock("react-transition-group", () => ({
  CSSTransition: ({ children }) => (
    <div data-testid="css-transition-test">{children}</div>
  ),
}));

jest.mock(
  "@/components/layouts/covered/header",
  () =>
    function Header() {
      return <div data-testid="mocked-header"></div>;
    },
);

describe("Layout", () => {
  it("render", async () => {
    render(
      <Layout loaded={true}>
        <div>test</div>
      </Layout>,
    );
    expect(await screen.findAllByTestId("mocked-header")).toHaveLength(1);
    expect(
      await screen.findByTestId("css-transition-test"),
    ).toBeInTheDocument();
  });
});
