import { describe, it, expect, beforeAll, jest } from "@jest/globals";
import {
  Artifacts,
  ContentfulClient,
  Histories,
  Profile,
  Skills,
} from "@/modules/contentful";

describe("contentful", () => {
  beforeAll(() => {
    process.env.CONTENTFUL_SPACE_ID = "space";
    process.env.CONTENTFUL_ACCESS_TOKEN = "token";
  });

  describe("ContentfulClient", () => {
    it("getEntries()", async () => {
      const spy = jest
        .spyOn(ContentfulClient.prototype, "getEntries")
        .mockReturnValue(
          Promise.resolve({
            stringifySafe: () => "",
            toPlainObject: () => ({}),
            total: 0,
            skip: 0,
            limit: 0,
            items: [],
          })
        );
      const client = new ContentfulClient();
      await client.getEntries({
        content_type: "test",
      });
      expect(spy).toHaveBeenCalledWith({
        content_type: "test",
      });
    });
  });

  describe("Profile", () => {
    it("get()", async () => {
      const spy = jest
        .spyOn(ContentfulClient.prototype, "getEntries")
        // @ts-expect-error
        .mockReturnValue(
          Promise.resolve({
            items: [
              {
                fields: {
                  json: { name: "test" },
                },
              },
            ],
          })
        );
      expect(await new Profile().get()).toEqual({ name: "test" });
      expect(spy).toHaveBeenCalledWith({
        content_type: "anydoc",
        "fields.name": "tomsd-page-profile",
      });
    });
  });

  describe("Skills", () => {
    it("get()", async () => {
      const mockedSkills = [
        {
          fields: {
            title: "skill 1",
            years: 1,
            description: "description of skill 1",
            web: true,
          },
        },
        {
          fields: {
            title: "skill 2",
            years: 2,
            description: "description of skill 2",
            web: false,
          },
        },
      ];
      const spy = jest
        .spyOn(ContentfulClient.prototype, "getEntries")
        // @ts-expect-error
        .mockReturnValue(
          Promise.resolve({
            items: mockedSkills,
          })
        );
      expect(await new Skills().get()).toEqual(
        mockedSkills.map(({ fields }) => fields)
      );
      expect(spy).toHaveBeenCalledWith({
        content_type: "skills",
        limit: 1000,
      });
    });
  });

  describe("Histories", () => {
    it("get()", async () => {
      const mockedHistories = [
        {
          fields: {
            title: "history 1",
            start: "2000-01-01T00:00:00Z",
            end: "2000-01-02T00:00:00Z",
            companyDescription: "comapny description 1",
            description: "description 1",
            badges: ["history 1- badge 1", "history 1 - badge 2"],
          },
        },
        {
          fields: {
            title: "history 2",
            start: "2000-02-01T00:00:00Z",
            end: "2000-02-02T00:00:00Z",
            companyDescription: "comapny description 2",
            description: "description 2",
            badges: ["history 2- badge 1", "history 2 - badge 2"],
          },
        },
      ];
      const spy = jest
        .spyOn(ContentfulClient.prototype, "getEntries")
        // @ts-expect-error
        .mockReturnValue(
          Promise.resolve({
            items: mockedHistories,
          })
        );
      expect(await new Histories().get()).toEqual(
        mockedHistories.map(({ fields }) => fields)
      );
      expect(spy).toHaveBeenCalledWith({
        content_type: "history",
        limit: 1000,
      });
    });
  });

  describe("Artifacts", () => {
    it("get()", async () => {
      const mockedItems = [1, 2].map((i) => ({
        fields: {
          title: `artifact ${i}`,
          link: `artifact link ${i}`,
          description: `artifact description ${i}`,
          image: `artifact image ${i}`,
          orderScore: i,
        },
      }));

      const spy = jest
        .spyOn(ContentfulClient.prototype, "getEntries")
        // @ts-expect-error
        .mockReturnValue(
          Promise.resolve({
            items: mockedItems,
          })
        );
      expect(await new Artifacts().get()).toEqual(
        mockedItems.map(({ fields }) => fields)
      );
      expect(spy).toHaveBeenCalledWith({
        content_type: "artifact",
        limit: 1000,
      });
    });
  });
});
