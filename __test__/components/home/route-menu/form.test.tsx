/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import RouteMenuForm from "@/components/home/route-menu/form";
import { render, screen } from "@testing-library/react";

describe("RouteMenuForm component", () => {
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

    render(<RouteMenuForm routes={routes}></RouteMenuForm>);
    expect(await screen.findByText("dummyTitle0")).toBeInTheDocument();
    expect(await screen.findByText("dummyTitle1")).toBeInTheDocument();
  });
});
