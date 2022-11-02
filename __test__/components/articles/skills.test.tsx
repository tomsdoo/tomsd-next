/**
 * @jest-environment jsdom
 */
import { describe, it, expect, jest } from "@jest/globals";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import React from "react";
import Skills, { QUERY_SKILLS } from "@/components/articles/skills";
import { render, screen } from "@testing-library/react";

jest.mock(
  "@/components/articles/skill",
  () =>
    function Skill() {
      return <mocked-skill data-testid="mocked-skill" />;
    }
);

describe("Skills component", () => {
  it("render", async () => {
    const skills = [1, 2].map((i) => ({
      title: `title ${i}`,
      years: i,
      description: `description ${i}`,
      web: i % 2 === 0,
    }));

    const mocks = [
      {
        request: {
          query: QUERY_SKILLS,
        },
        result: {
          data: {
            skills,
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
    expect(await screen.findAllByTestId("mocked-skill")).toHaveLength(2);
  });
});
