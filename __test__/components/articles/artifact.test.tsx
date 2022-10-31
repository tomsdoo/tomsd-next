/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import Artifact from "@/components/articles/artifact";
import { render, screen } from "@testing-library/react";

describe("Artifact component", () => {
  it("render", async () => {
    const artifact = {
      link: "link",
      title: "title",
      image: "image",
      description: "description",
    };
    const { container } = render(<Artifact artifact={artifact} />);
    expect(await screen.findByText("title")).toBeInTheDocument();
    expect(await screen.findByText("description")).toBeInTheDocument();
    expect(await screen.findByAltText("image: title")).toBeInTheDocument();
    const anchor = container.querySelector(`a[href='link']`);
    expect(anchor).not.toBeNull();
    expect(anchor.childNodes).toHaveLength(3);
    const titleDiv = anchor.childNodes[0];
    expect(titleDiv).toHaveProperty("textContent", "title");
    const descriptionDiv = anchor.childNodes[1];
    expect(descriptionDiv).toHaveProperty("textContent", "description");
    const img = anchor.childNodes[2] as HTMLImageElement;
    expect(img.getAttribute("src")).toBe("image");
    expect(img.getAttribute("alt")).toBe("image: title");
  });
});
