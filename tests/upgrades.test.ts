import { describe, expect, it } from "vitest";
import { SHIP_BALANCE } from "../src/game/data/balance";
import { UPGRADES } from "../src/game/data/upgrades";
import { applyUpgradeToBalance, purchaseUpgrade } from "../src/game/core/rules";

describe("upgrade rules", () => {
  it("all upgrades are assigned to a category", () => {
    expect(UPGRADES.every((upgrade) => upgrade.category.length > 0)).toBe(true);
    expect(new Set(UPGRADES.map((upgrade) => upgrade.category))).toEqual(new Set(["Command", "Shields", "Strike", "Economy"]));
  });

  it("upgrade applies correct stat modifier", () => {
    const upgrade = UPGRADES.find((item) => item.id === "bomber_payload_1");
    expect(upgrade).toBeDefined();
    const result = applyUpgradeToBalance(SHIP_BALANCE.bomber, upgrade!);
    expect(result.damage).toBe(SHIP_BALANCE.bomber.damage * 1.2);
  });

  it("upgrade purchase persists in returned profile", () => {
    const upgrade = UPGRADES[0];
    const result = purchaseUpgrade({ researchCores: 3, purchasedUpgrades: [] }, upgrade);
    expect(result.ok).toBe(true);
    expect(result.profile.purchasedUpgrades).toContain(upgrade.id);
    expect(result.profile.researchCores).toBe(1);
  });

  it("upgrade cannot be bought twice", () => {
    const upgrade = UPGRADES[0];
    const result = purchaseUpgrade({ researchCores: 3, purchasedUpgrades: [upgrade.id] }, upgrade);
    expect(result.ok).toBe(false);
    expect(result.profile.researchCores).toBe(3);
  });
});
