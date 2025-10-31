import { describe, expect, it, jest } from "@jest/globals";
import { GET } from "@/app/api/status/route";

jest.mock("@@/package.json", () => ({
	version: "dummyVersion",
}));

describe("GET /api/status", () => {
	it("response has version property", async () => {
		const response = await GET();
		const responseJson = await response.json();
		expect(responseJson).toHaveProperty("version", "dummyVersion");
	});
});
