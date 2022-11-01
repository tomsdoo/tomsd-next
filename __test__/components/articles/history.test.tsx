/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import History, {
  Badges,
  HistoryItem,
  QUERY_HISTORIES,
} from "@/components/articles/history";

describe("history", () => {
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

  describe("HistoryItem", () => {
    it("render", async () => {
      const history = {
        companyDescription: "companyDescription",
        title: "title",
        start: "2000-01-01T00:00:00Z",
        end: "2000-12-31T23:59:59Z",
        badges: ["badge 1", "badge 2"],
        description: "description",
      };

      render(<HistoryItem history={history} />);
      expect(await screen.findByText("companyDescription")).toBeInTheDocument();
      expect(
        await screen.findByText((content, element) =>
          /[0-9]{4}\.[0-9]{2} - [0-9]{4}\.[0-9]{2}/.test(content)
        )
      ).toBeInTheDocument();
      expect(await screen.findByText("title")).toBeInTheDocument();
      expect(await screen.findByText("description")).toBeInTheDocument();
    });
  });

  describe("History", () => {
    it("render", async () => {
      const histories = [
        {
          title: "title",
          start: "2000-01-01T00:00:00Z",
          end: "2000-12-31T23:59:59Z",
          badges: ["badge 1", "badge 2"],
          companyDescription: "companyDescription",
          description: "description",
        },
      ];

      const mocks = [
        {
          request: {
            query: QUERY_HISTORIES,
          },
          result: {
            data: {
              histories,
            },
          },
        },
      ];

      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <History />
        </MockedProvider>
      );
      expect(await screen.findByText("title")).toBeInTheDocument();
    });
  });
});
