/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Header from "@/components/layouts/covered/header";
import { render, screen } from "@testing-library/react";

jest.mock(
  "next/link",
  () =>
    function Link({ children }) {
      return <div data-testid="test-next-link">{children}</div>;
    },
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

describe("Header", () => {
  it("render", async () => {
    render(
      <Header
        className="test-header-class"
        widthCoordinatedClassName="test-width-coordinated-class"
      ></Header>,
    );
    expect(await screen.findAllByTestId("test-next-link")).toHaveLength(3);
  });
});
