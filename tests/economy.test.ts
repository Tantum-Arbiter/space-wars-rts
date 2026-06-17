import { describe, expect, it } from "vitest";
import { addEconomyTick, trySpend } from "../src/game/core/rules";

describe("economy rules", () => {
  it("captured salvage nodes generate salvage", () => {
    const result = addEconomyTick({ salvage: 100, commandPoints: 0 }, 2);
    expect(result.salvage).toBe(120);
    expect(result.commandPoints).toBe(1);
  });

  it("salvage income can be multiplied by upgrades", () => {
    const result = addEconomyTick({ salvage: 100, commandPoints: 0 }, 1, 1.2);
    expect(result.salvage).toBeCloseTo(114.4);
  });

  it("store purchase fails without enough resources", () => {
    const result = trySpend({ salvage: 20, commandPoints: 0 }, { salvage: 60 });
    expect(result.ok).toBe(false);
    expect(result.resources.salvage).toBe(20);
  });

  it("store purchase deducts correct currency", () => {
    const result = trySpend({ salvage: 120, commandPoints: 5 }, { salvage: 60, commandPoints: 2 });
    expect(result.ok).toBe(true);
    expect(result.resources).toEqual({ salvage: 60, commandPoints: 3 });
  });
});
