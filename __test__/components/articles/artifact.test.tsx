import { beforeAll, describe, it, expect } from "@jest/globals";
import React from "react";
import Artifact from "@/components/articles/artifact";
import { render } from "@testing-library/react";
import { JSDOM } from "jsdom";

describe("Artifact component", () => {
  beforeAll(() => {
    // @ts-expect-error
    globalThis.window = new JSDOM().window;
    globalThis.document = window.document;
  });

  it("render", () => {
    const artifact = {
      link: "link",
      title: "title",
      image: "image",
      description: "description",
    };
    render(<Artifact artifact={artifact} />);
    // FIXME: screen(@testing-library/react) doesn't work
    // console.log(screen.queryByText("title"));
    const anchor = document.querySelector(`a[href='link']`);
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
