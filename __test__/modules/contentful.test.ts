import { describe, it, expect, beforeAll, jest } from "@jest/globals";
import { ContentfulClient, Profile } from "@/modules/contentful";

describe("contentful", () => {
  describe("ContentfulClient", () => {
    beforeAll(() => {
      process.env.CONTENTFUL_SPACE_ID = "space";
      process.env.CONTENTFUL_ACCESS_TOKEN = "token";
    });
    it("getEntries()", async () => {
      const spy = jest.spyOn(ContentfulClient.prototype, "getEntries").mockReturnValue(Promise.resolve({ stringifySafe: () => "", toPlainObject: () => ({}), total: 0, skip: 0, limit: 0, items: [] }));
      const client = new ContentfulClient();
      await client.getEntries({
        content_type: "test"
      });
      expect(spy).toHaveBeenCalledWith({
        content_type: "test"
      });
    });
  });

  describe("Profile", () => {
    beforeAll(() => {
      process.env.CONTENTFUL_SPACE_ID = "space";
      process.env.CONTENTFUL_ACCESS_TOKEN = "token";
    });
    it("get()", async () => {
      const spy = jest
        .spyOn(ContentfulClient.prototype, "getEntries")
        // @ts-expect-error
        .mockReturnValue(Promise.resolve({
          items: [
            {
              fields: {
                json: { name: "test" }
              }
            }
          ]
        }));
      expect(await new Profile().get()).toEqual({ name: "test" });
      expect(spy).toHaveBeenCalledWith({
        content_type: "anydoc",
        "fields.name": "tomsd-page-profile"
      });
    });
  });
});
