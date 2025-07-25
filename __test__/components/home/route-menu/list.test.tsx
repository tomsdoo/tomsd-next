/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import RouteMenuList from "@/components/home/route-menu/list";
import { render, screen } from "@testing-library/react";

describe("RouteMenuList component", () => {
  it("render", async () => {
    const routes = [0, 1].map((i) => ({
      href: `dummyHref${i}`,
      pathRegexp: new RegExp(`dummy${i}`),
      headerLink: {
        title: `dummyTitle${i}`,
      },
      meta: {
        title: `dummyMetaTitle${i}`,
        description: `dummyMetaDescription${i}`,
      },
    }));

    render(<RouteMenuList routes={routes}></RouteMenuList>);
    expect(await screen.findByText("dummyTitle0")).toBeInTheDocument();
    expect(await screen.findByText("dummyTitle1")).toBeInTheDocument();
  });
});
