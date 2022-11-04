/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Badges, Story } from "@/components/articles/stories";
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

  describe("Story", () => {
    it("render", async () => {
      const story = {
        title: "title",
        description: "description",
        issue: "issue",
        solution: "solution",
        badges: ["badge 1"],
      };

      render(<Story story={story} />);
      expect(await screen.findByText("title")).toBeInTheDocument();
      expect(await screen.findByText("description")).toBeInTheDocument();
      expect(await screen.findByText("issue")).toBeInTheDocument();
      expect(await screen.findByText("solution")).toBeInTheDocument();
      expect(await screen.findByText("#badge 1")).toBeInTheDocument();
    });
  });
});
