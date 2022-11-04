/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Badges } from "@/components/articles/stories";
import { render, screen } from "@testing-library/react";

describe("stories", () => {
  describe("Badges", () => {
    it("render", async () => {
      const badges = ["badge 1", "badge 2"];

      const { container } = render(
        <Badges data-testid="test" badges={badges} />
      );
      expect(await screen.findByTestId("test")).toBeInTheDocument();
      expect(await screen.findByText("#badge 1")).toBeInTheDocument();
      expect(await screen.findByText("#badge 2")).toBeInTheDocument();
      expect(
        container.querySelector(`[data-testid='test']`).childNodes
      ).toHaveLength(2);
    });
  });
});
