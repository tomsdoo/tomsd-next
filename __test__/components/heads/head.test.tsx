/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import DynamicHead from "@/components/heads/head";
import { render, screen } from "@testing-library/react";

jest.mock("@/routes/index", () => ({
  routes: [...Array(2)].map((_, i) => ({
    pathRegexp: new RegExp(`^/test${i}/?$`),
    headerLink: {
      title: `header title ${i}`,
    },
    meta: {
      title: `meta title ${i}`,
      description: `meta description ${i}`,
    },
  })),
  siteIcon: "siteIcon",
}));

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/test1",
  }),
}));

jest.mock(
  "next/head",
  () =>
    function Head({ children }) {
      return <>{children}</>;
    }
);

describe("DynamicHead component", () => {
  it("render", async () => {
    const { container } = render(<DynamicHead />);
    expect(await screen.findByText("meta title 1")).toBeInTheDocument();
    expect(container.querySelector("meta[name='description']")).toHaveAttribute(
      "content",
      "meta description 1"
    );
    expect(container.querySelector("link[rel='icon']")).toHaveAttribute(
      "href",
      "siteIcon"
    );
  });
});
