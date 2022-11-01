/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Skill from "@/components/articles/skill";
import { render, screen } from "@testing-library/react";

describe("Skill component", () => {
  it("render", async () => {
    const skill = {
      years: 12,
      title: "title",
      description: "description",
    };

    render(<Skill skill={skill} />);
    expect(await screen.findByText("title")).toBeInTheDocument();
    expect(await screen.findByText("description")).toBeInTheDocument();
    expect(await screen.findByText("5+ yrs")).toBeInTheDocument();
  });
});
