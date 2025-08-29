/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import { MockedProvider } from "@apollo/client/testing/react";
import "@testing-library/jest-dom";
import React from "react";
import Stories, {
  Badges,
  Story,
  QUERY_STORIES,
} from "@/components/articles/stories";
import { render, screen } from "@testing-library/react";

describe("stories", () => {
  describe("Badges", () => {
    it("render", async () => {
      const badges = ["badge 1", "badge 2"];

      const { container } = render(
        <Badges data-testid="test" badges={badges} />,
      );
      expect(await screen.findByTestId("test")).toBeInTheDocument();
      expect(await screen.findByText("#badge 1")).toBeInTheDocument();
      expect(await screen.findByText("#badge 2")).toBeInTheDocument();
      expect(
        container.querySelector(`[data-testid='test']`).childNodes,
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

  describe("Stories", () => {
    it("render", async () => {
      const stories = [1, 2].map((i) => ({
        title: `title ${i}`,
        description: `description ${i}`,
        issue: `issue ${i}`,
        solution: `solution ${i}`,
        badges: [`badge ${i}`],
      }));

      const mocks = [
        {
          request: {
            query: QUERY_STORIES,
          },
          result: {
            data: {
              stories,
            },
          },
        },
      ];

      render(
        <MockedProvider mocks={mocks}>
          <Stories />
        </MockedProvider>,
      );
      expect(await screen.findByText("title 1")).toBeInTheDocument();
    });
  });
});
