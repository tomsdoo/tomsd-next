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
    // @ts-expect-error
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
  "next/link",
  () =>
    function Link({ children }) {
      return <div data-testid="test-next-link">{children}</div>;
    }
);

jest.mock("next/router", () => ({
  useRouter: () => ({ pathname: "/test1" }),
}));

jest.mock("@/routes/index", () => ({
  routes: [1, 2].map((i) => ({
    href: `/test${i}`,
    headerLink: {
      title: `test title ${i}`,
    },
  })),
}));

describe("Layout", () => {
  it("render", async () => {
    render(
      <Layout loaded={true}>
        <div>test</div>
      </Layout>
    );
    expect(await screen.findAllByTestId("test-next-link")).toHaveLength(3);
    expect(
      await screen.findByTestId("css-transition-test")
    ).toBeInTheDocument();
  });
});
