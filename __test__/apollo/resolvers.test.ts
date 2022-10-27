import { beforeAll, describe, it, expect, jest } from "@jest/globals";
import { resolvers } from "@/apollo/resolvers";
import { Artifacts } from "@/modules/contentful";

describe("apollo", () => {
  beforeAll(() => {
    process.env.CONTENTFUL_SPACE_ID = "space";
    process.env.CONTENTFUL_ACCESS_TOKEN = "token";
  });
  describe("resolvers", () => {
    it("artifacts", async () => {
      const mockedValue = [1,2].map(i => ({
        title: `artifact ${i}`,
        link: `link ${i}`,
        description: `description ${i}`,
        image: `image ${i}`,
        orderScore: i
      }));
      const spy = jest.spyOn(Artifacts.prototype, "get").mockReturnValue(Promise.resolve(mockedValue));
      // @ts-expect-error
      expect(await resolvers.Query.artifacts()).toEqual(mockedValue);
      expect(spy).toHaveBeenCalled();
    });
  });
});
