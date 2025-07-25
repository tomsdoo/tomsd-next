/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import RotatingImage from "@/components/home/images/rotating-image";
import { render } from "@testing-library/react";

describe("RouteMenuItem component", () => {
  it("render", async () => {
    render(
      <RotatingImage
        src={"https://picsum.photos/50"}
        animationDelay={1}
      ></RotatingImage>,
    );
    expect(
      document.querySelector("img[src='https://picsum.photos/50']"),
    ).toBeInTheDocument();
  });
});
