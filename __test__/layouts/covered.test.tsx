/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Layout from "@/layouts/covered";
import { render, screen } from "@testing-library/react";
import { StoreProvider } from "@/app/store-provider";

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

jest.mock("@/lib/store", () => ({
  makeStore: jest.fn(() => ({
    dispatch: jest.fn(),
    getState: jest.fn(() => ({
      "visited-pages": {},
    })),
    subscribe: jest.fn(),
    replaceReducer: jest.fn(),
    [Symbol.observable]: jest.fn(),
  })),
}));

jest.mock("@reduxjs/toolkit/query", () => ({
  setupListeners: jest.fn(() => jest.fn()),
}));

describe("Layout", () => {
  it("render", async () => {
    render(
      <StoreProvider>
        <Layout loaded={true}>
          <div>test</div>
        </Layout>
      </StoreProvider>,
    );
    expect(await screen.findAllByTestId("mocked-header")).toHaveLength(1);
    expect(
      await screen.findByTestId("css-transition-test"),
    ).toBeInTheDocument();
  });
});
