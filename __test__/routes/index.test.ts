import { describe, it, expect, jest, beforeAll } from "@jest/globals";
import { routes } from "@/routes/index";

function getPathname(url){
  return new URL(url, "http://localhost:8080").pathname;
}

describe("routes", () => {
  describe("/profile", () => {
    let route: {
      href: string;
      pathRegexp: RegExp;
    };
    beforeAll(() => {
      route = routes.find(({ href }) => href === "/profile");
    });
    it("/profile matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/profile`))).toBe(true);
    });

    it("/profile/ matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/profile/`))).toBe(true);
    });

    it("/profiles doesn't match", () => {
      expect(route?.pathRegexp?.test(getPathname(`/profiles`))).toBe(false);
    });

    it("/profile?id=1 matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/profile?id=1`))).toBe(true);
    });

  });

  describe("/skills", () => {
    let route: {
      href: string;
      pathRegexp: RegExp;
    };
    beforeAll(() => {
      route = routes.find(({ href }) => href === "/skills");
    });

    it("/skills matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/skills`))).toBe(true);
    });

    it("/skills/ matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/skills/`))).toBe(true);
    });

    it("/skills1 doesn't match", () => {
      expect(route?.pathRegexp?.test(getPathname(`/skills1`))).toBe(false);
    });

    it("/skills?id=1 matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/skills?id=1`))).toBe(true);
    });
  });

  describe("/history", () => {
    let route: {
      href: string;
      pathRegexp: RegExp;
    };
    beforeAll(() => {
      route = routes.find(({ href }) => href === "/history");
    });

    it("/history matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/history`))).toBe(true);
    });

    it("/history/ matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/history/`))).toBe(true);
    });

    it("/history1 doesn't match", () => {
      expect(route?.pathRegexp?.test(getPathname(`/history1`))).toBe(false);
    });

    it("/history?id=1 matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/history?id=1`))).toBe(true);
    });
  });

  describe("/links", () => {
    let route: {
      href: string;
      pathRegexp: RegExp;
    };
    beforeAll(() => {
      route = routes.find(({ href }) => href === "/links");
    });

    it("/links matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/links`))).toBe(true);
    });

    it("/links/ matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/links/`))).toBe(true);
    });

    it("/links1 doesn't match", () => {
      expect(route?.pathRegexp?.test(getPathname(`/links1`))).toBe(false);
    });

    it("/links?id=1 matches", () => {
      expect(route?.pathRegexp?.test(getPathname(`/links?id=1`))).toBe(true);
    });
  });

});
