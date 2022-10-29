import { describe, it, expect } from "@jest/globals";
import { addScore, addScoreWeb, extendSkill } from "@/modules/misc/operationsForSkill";

describe("operationsForSkill", () => {
  describe("addScoreWeb()", () => {
    it("scoreWeb property value will be 100 fi web property value is true", () => {
      expect(addScoreWeb({ web: true, years: 2 })).toHaveProperty("scoreWeb", 100);
    });

    it("scoreWeb property value will be 1 fi web property value is true", () => {
      expect(addScoreWeb({ web: false, years: 2 })).toHaveProperty("scoreWeb", 1);
    });
  });

  describe("addStore()", () => {
    it("score proerty will be added", () => {
      expect(addScore({ web: true, scoreWeb: 100, years: 1 })).toHaveProperty("score", 101);
    });
  });

  describe("extendSkill", () => {
    it("score property value is correct if web flag is true", () => {
      expect(extendSkill({
        web: true,
        years: 1
      })).toHaveProperty("score", 101);
    });

    it("score property value is correct if web flag is false", () => {
      expect(extendSkill({
        web: false,
        years: 1
      })).toHaveProperty("score", 2);
    });
  });
});
