import { beforeAll, describe, it, expect, jest } from "@jest/globals";
import { resolvers } from "@/apollo/resolvers";
import { Artifacts, Profile, Skills } from "@/modules/contentful";

describe("apollo", () => {
  beforeAll(() => {
    process.env.CONTENTFUL_SPACE_ID = "space";
    process.env.CONTENTFUL_ACCESS_TOKEN = "token";
  });
  describe("resolvers", () => {
    it("artifacts", async () => {
      const mockedValue = [1, 2].map((i) => ({
        title: `artifact ${i}`,
        link: `link ${i}`,
        description: `description ${i}`,
        image: `image ${i}`,
        orderScore: i,
      }));
      const spy = jest
        .spyOn(Artifacts.prototype, "get")
        .mockReturnValue(Promise.resolve(mockedValue));
      // @ts-expect-error
      expect(await resolvers.Query.artifacts()).toEqual(mockedValue);
      expect(spy).toHaveBeenCalled();
    });

    it("profile", async () => {
      const mockedValue = {
        name: "test",
        photo: "photo",
        title: "title",
        description: "description",
        location: "location",
        certificate: [],
        favorites: ["test1"],
        links: [],
      };
      const spy = jest
        .spyOn(Profile.prototype, "get")
        .mockReturnValue(Promise.resolve(mockedValue));
      // @ts-expect-error
      expect(await resolvers.Query.profile()).toEqual(mockedValue);
      expect(spy).toHaveBeenCalled();
    });

    it("skills", async () => {
      const mockedValue = [1,2].map((i) => ({
        title: `skill ${i}`,
        years: i,
        description: `description ${i}`,
        web: i % 2 === 0
      }));

      const spy = jest
        .spyOn(Skills.prototype, "get")
        .mockReturnValue(Promise.resolve(mockedValue));
      // @ts-expect-error
      expect(await resolvers.Query.skills()).toEqual(mockedValue);
      expect(spy).toHaveBeenCalled();
    });
  });
});
