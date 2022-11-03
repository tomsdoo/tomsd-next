/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Page from "@/pages/index";
import { render, screen } from "@testing-library/react";

jest.mock(
  "next/link",
  () =>
    function MockedLink({ children }) {
      return <div data-testid="mocked-link">{children}</div>;
    }
);

jest.mock(
  "@/components/heads/head",
  () =>
    function MockedHead() {
      return <div data-testid="mocked-head">mocked head</div>;
    }
);

jest.mock("@/routes/index", () => ({
  routes: [0, 1].map((i) => ({
    href: `route href ${i}`,
    headerLink: {
      title: `route title ${i}`,
    },
  })),
}));

jest.mock(
  "next/config",
  () =>
    function getConfig() {
      return {
        publicRuntimeConfig: {
          version: "1.0.0",
        },
      };
    }
);

describe("top page", () => {
  it("render", async () => {
    const spy = jest.spyOn(console, "log").mockReturnValue(undefined);
    const { container } = render(<Page />);
    expect(spy).toHaveBeenCalledWith("version: 1.0.0");
    expect(await screen.findByTestId("mocked-head")).toBeInTheDocument();
    expect(container.querySelectorAll("ul li img")).toHaveLength(20);
    expect(await screen.findAllByTestId("mocked-link")).toHaveLength(2);
    expect(await screen.findByText("route title 0")).toBeInTheDocument();
    expect(await screen.findByText("route title 1")).toBeInTheDocument();
  });
});
