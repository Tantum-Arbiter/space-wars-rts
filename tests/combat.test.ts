import { describe, expect, it } from "vitest";
import {
  applyDamage,
  applySubsystemEffect,
  calculateBattleScore,
  calculateBattleStars,
  calculateResearchReward,
  getBattleResult,
  getSurvivalWaveComposition,
  shouldUseEmergencyAbility,
  type CombatState,
} from "../src/game/core/rules";

const baseShip: CombatState = {
  hull: 1000,
  maxHull: 1000,
  shield: 300,
  maxShield: 300,
  shieldRegen: 10,
  speed: 100,
  damage: 80,
  cooldown: 1,
  isDead: false,
};

describe("combat rules", () => {
  it("damage reduces shields before hull", () => {
    const result = applyDamage(baseShip, 100);
    expect(result.shield).toBe(228);
    expect(result.hull).toBe(972);
    expect(result.isDead).toBe(false);
  });

  it("damage types change shield and hull pressure", () => {
    const torpedo = applyDamage(baseShip, 100, "torpedo");
    const lance = applyDamage(baseShip, 100, "lance");

    expect(torpedo.shield).toBe(252);
    expect(torpedo.hull).toBeCloseTo(938.64);
    expect(lance.shield).toBe(212);
    expect(lance.hull).toBeCloseTo(988.96);
  });

  it("destroyed ships are marked dead", () => {
    const result = applyDamage({ ...baseShip, hull: 20, shield: 0 }, 60);
    expect(result.isDead).toBe(true);
  });

  it("shield generator destruction stops shield regeneration", () => {
    const result = applySubsystemEffect(baseShip, "shield");
    expect(result.shield).toBe(0);
    expect(result.shieldRegen).toBe(0);
  });

  it("engine subsystem damage slows ships", () => {
    const result = applySubsystemEffect(baseShip, "engine");
    expect(result.speed).toBe(30);
  });

  it("hangar subsystem damage slows strike craft reloads", () => {
    const result = applySubsystemEffect(baseShip, "hangar");
    expect(result.cooldown).toBe(1.3);
  });

  it("win conditions distinguish victory defeat and ongoing", () => {
    expect(getBattleResult(100, 0)).toBe("victory");
    expect(getBattleResult(0, 100)).toBe("defeat");
    expect(getBattleResult(100, 100)).toBe("ongoing");
  });

  it("enemy emergency ability triggers once from low hull or shield", () => {
    expect(shouldUseEmergencyAbility({ ...baseShip, hull: 410 }, false)).toBe(true);
    expect(shouldUseEmergencyAbility({ ...baseShip, shield: 50 }, false)).toBe(true);
    expect(shouldUseEmergencyAbility({ ...baseShip, hull: 410 }, true)).toBe(false);
    expect(shouldUseEmergencyAbility(baseShip, false)).toBe(false);
  });

  it("battle score rewards strong victories and penalizes losses", () => {
    const strong = calculateBattleScore("Victory", 180, 82, {
      enemyShipsDestroyed: 6,
      playerShipsLost: 0,
      nodesCaptured: 3,
      storePurchases: 2,
      abilitiesUsed: 3,
      subsystemsDestroyed: 4,
    });
    const messy = calculateBattleScore("Victory", 520, 18, {
      enemyShipsDestroyed: 1,
      playerShipsLost: 5,
      nodesCaptured: 0,
      storePurchases: 0,
      abilitiesUsed: 0,
      subsystemsDestroyed: 0,
    });

    expect(strong.rating).toBe("S");
    expect(messy.rating).toBe("C");
    expect(strong.score).toBeGreaterThan(messy.score);
  });

  it("battle stars track victory quality", () => {
    expect(calculateBattleStars("Defeat", 120, 100)).toBe(0);
    expect(calculateBattleStars("Victory", 500, 25)).toBe(1);
    expect(calculateBattleStars("Victory", 500, 48)).toBe(2);
    expect(calculateBattleStars("Victory", 300, 72)).toBe(3);
  });

  it("research rewards scale with stars and survival progress", () => {
    expect(calculateResearchReward("Defeat", 0)).toBe(1);
    expect(calculateResearchReward("Victory", 1)).toBe(2);
    expect(calculateResearchReward("Victory", 2)).toBe(3);
    expect(calculateResearchReward("Victory", 3)).toBe(4);
    expect(calculateResearchReward("Victory", 3, 5)).toBe(5);
  });

  it("survival waves escalate from strike craft into capital threats", () => {
    const first = getSurvivalWaveComposition(1);
    const fifth = getSurvivalWaveComposition(5);

    expect(first.ships).toEqual(["fighter", "fighter"]);
    expect(fifth.ships).toContain("heavyCapital");
    expect(fifth.ships.length).toBeGreaterThan(first.ships.length);
    expect(fifth.salvageReward).toBeGreaterThan(first.salvageReward);
  });
});
