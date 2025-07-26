import { describe, it, expect, jest } from "@jest/globals";
import { GET } from "@/app/api/status/route";

jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    version: "dummyVersion",
  },
}));

describe("GET /api/status", () => {
  it("response has version property", async () => {
    const response = await GET();
    const responseJson = await response.json();
    expect(responseJson).toHaveProperty("version", "dummyVersion");
  });
});
