/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import PhotoList from "@/components/home/images/photo-list";
import { render, screen } from "@testing-library/react";

jest.mock(
  "@/components/home/images/rotating-image",
  () =>
    function RotatingImage() {
      return <mocked-rotating-image data-testid="mocked-rotating-image" />;
    },
);

describe("PhotoList component", () => {
  it("render", async () => {
    render(<PhotoList></PhotoList>);
    expect(await screen.findAllByTestId("mocked-rotating-image")).toHaveLength(
      20,
    );
  });
});
