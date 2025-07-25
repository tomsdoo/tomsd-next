/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import RouteMenuItem from "@/components/home/route-menu/item";
import { render, screen } from "@testing-library/react";

describe("RouteMenuItem component", () => {
  it("render", async () => {
    const route = {
      href: "dummyHref",
      pathRegexp: /dummy/,
      headerLink: {
        title: "dummyTitle",
      },
      meta: {
        title: "dummyMetaTitle",
        description: "dummyMetaDescription",
      },
    };

    render(<RouteMenuItem route={route}></RouteMenuItem>);
    expect(await screen.findByText("dummyTitle")).toBeInTheDocument();
  });
});
