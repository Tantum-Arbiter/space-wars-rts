import type { ShipBalance } from "../data/balance";
import { ShipClass } from "../data/fleets";
import { UpgradeDefinition } from "../data/upgrades";

export interface CombatState {
  hull: number;
  maxHull: number;
  shield: number;
  maxShield: number;
  shieldRegen: number;
  speed: number;
  damage: number;
  cooldown: number;
  isDead: boolean;
}

export type DamageType = "laser" | "lance" | "torpedo" | "flak";

export interface DamageProfile {
  shieldPortion: number;
  hullMultiplier: number;
}

export interface ResourceState {
  salvage: number;
  commandPoints: number;
}

export interface UpgradeProfile {
  researchCores: number;
  purchasedUpgrades: string[];
}

export interface ScoreStats {
  enemyShipsDestroyed: number;
  playerShipsLost: number;
  nodesCaptured: number;
  storePurchases: number;
  abilitiesUsed: number;
  subsystemsDestroyed: number;
}

export interface BattleScore {
  score: number;
  rating: "S" | "A" | "B" | "C";
}

export type BattleStars = 0 | 1 | 2 | 3;

export interface SurvivalWaveComposition {
  wave: number;
  ships: ShipClass[];
  salvageReward: number;
}

export type BattleResult = "victory" | "defeat" | "ongoing";

export function getDamageProfile(type: DamageType): DamageProfile {
  if (type === "lance") return { shieldPortion: 0.88, hullMultiplier: 0.92 };
  if (type === "torpedo") return { shieldPortion: 0.48, hullMultiplier: 1.18 };
  if (type === "flak") return { shieldPortion: 0.62, hullMultiplier: 0.78 };
  return { shieldPortion: 0.72, hullMultiplier: 1 };
}

export function applyDamage(state: CombatState, amount: number, type: DamageType = "laser"): CombatState {
  const next = { ...state };
  const profile = getDamageProfile(type);
  const shieldDamage = Math.min(next.shield, amount * profile.shieldPortion);
  next.shield -= shieldDamage;
  next.hull -= Math.max(0, amount - shieldDamage) * profile.hullMultiplier;
  next.isDead = next.hull <= 0;
  return next;
}

export function applySubsystemEffect(state: CombatState, subsystem: "shield" | "engine" | "mainCannon" | "repair" | "bridge" | "hangar"): CombatState {
  const next = { ...state };
  if (subsystem === "shield") {
    next.shield = 0;
    next.shieldRegen = 0;
  } else if (subsystem === "engine") {
    next.speed *= 0.3;
  } else if (subsystem === "mainCannon") {
    next.damage *= 0.45;
    next.cooldown *= 1.45;
  } else if (subsystem === "repair") {
    next.shieldRegen *= 0.35;
  } else if (subsystem === "bridge") {
    next.hull -= next.maxHull * 0.16;
    next.isDead = next.hull <= 0;
  } else if (subsystem === "hangar") {
    next.cooldown *= 1.3;
  }
  return next;
}

export function addEconomyTick(resources: ResourceState, heldSalvageNodes: number, salvageMultiplier = 1): ResourceState {
  return {
    salvage: resources.salvage + (4 + heldSalvageNodes * 8) * salvageMultiplier,
    commandPoints: resources.commandPoints + 1,
  };
}

export function trySpend(resources: ResourceState, cost: Partial<ResourceState>): { ok: boolean; resources: ResourceState } {
  const salvageCost = cost.salvage ?? 0;
  const commandCost = cost.commandPoints ?? 0;
  if (resources.salvage < salvageCost || resources.commandPoints < commandCost) {
    return { ok: false, resources };
  }
  return {
    ok: true,
    resources: {
      salvage: resources.salvage - salvageCost,
      commandPoints: resources.commandPoints - commandCost,
    },
  };
}

export function purchaseUpgrade(profile: UpgradeProfile, upgrade: UpgradeDefinition): { ok: boolean; profile: UpgradeProfile } {
  if (profile.purchasedUpgrades.includes(upgrade.id) || profile.researchCores < upgrade.cost) {
    return { ok: false, profile };
  }
  return {
    ok: true,
    profile: {
      researchCores: profile.researchCores - upgrade.cost,
      purchasedUpgrades: [...profile.purchasedUpgrades, upgrade.id],
    },
  };
}

export function applyUpgradeToBalance(balance: ShipBalance, upgrade: UpgradeDefinition): ShipBalance {
  const next = { ...balance };
  if (upgrade.stat === "hull") {
    next.hull *= upgrade.multiplier;
  } else if (upgrade.stat === "shield") {
    next.shield *= upgrade.multiplier;
  } else if (upgrade.stat === "damage") {
    next.damage *= upgrade.multiplier;
  } else if (upgrade.stat === "range") {
    next.range *= upgrade.multiplier;
  }
  return next;
}

export function getBattleResult(playerFlagshipHull: number, enemyFlagshipHull: number): BattleResult {
  if (enemyFlagshipHull <= 0) return "victory";
  if (playerFlagshipHull <= 0) return "defeat";
  return "ongoing";
}

export function shouldUseEmergencyAbility(state: Pick<CombatState, "hull" | "maxHull" | "shield" | "maxShield">, alreadyUsed: boolean): boolean {
  if (alreadyUsed) return false;
  return state.hull / state.maxHull < 0.42 || state.shield / state.maxShield < 0.18;
}

export function calculateBattleScore(result: "Victory" | "Defeat", battleSeconds: number, flagshipHullPercent: number, stats: ScoreStats): BattleScore {
  const victoryBase = result === "Victory" ? 1000 : 280;
  const speedBonus = Math.max(0, 420 - battleSeconds) * 2;
  const hullBonus = Math.max(0, flagshipHullPercent) * 6;
  const objectiveBonus = stats.nodesCaptured * 90;
  const killBonus = stats.enemyShipsDestroyed * 120 + stats.subsystemsDestroyed * 70;
  const actionBonus = stats.abilitiesUsed * 35 + stats.storePurchases * 25;
  const lossPenalty = stats.playerShipsLost * 160;
  const score = Math.max(0, Math.round(victoryBase + speedBonus + hullBonus + objectiveBonus + killBonus + actionBonus - lossPenalty));

  if (score >= 2600) return { score, rating: "S" };
  if (score >= 2000) return { score, rating: "A" };
  if (score >= 1300) return { score, rating: "B" };
  return { score, rating: "C" };
}

export function calculateBattleStars(result: "Victory" | "Defeat", battleSeconds: number, flagshipHullPercent: number, targetSeconds = 420): BattleStars {
  if (result !== "Victory") return 0;
  if (flagshipHullPercent > 60 && battleSeconds <= targetSeconds) return 3;
  if (flagshipHullPercent > 40) return 2;
  return 1;
}

export function calculateResearchReward(result: "Victory" | "Defeat", stars: BattleStars, survivalWave = 0): number {
  const baseReward = result === "Victory" ? 2 : 1;
  const starBonus = result === "Victory" ? Math.max(0, stars - 1) : 0;
  const survivalBonus = Math.max(0, Math.floor(survivalWave / 3));
  return baseReward + starBonus + survivalBonus;
}

export function getSurvivalWaveComposition(wave: number): SurvivalWaveComposition {
  const clampedWave = Math.max(1, Math.floor(wave));
  const ships: ShipClass[] = ["fighter", "fighter"];

  if (clampedWave >= 2) {
    ships.push("bomber");
  }

  if (clampedWave >= 3) {
    ships.push("cruiser");
  }

  if (clampedWave >= 4) {
    ships.push("fighter", "bomber");
  }

  if (clampedWave >= 5) {
    ships.push("heavyCapital");
  }

  for (let extra = 6; extra <= clampedWave; extra += 1) {
    ships.push(extra % 2 === 0 ? "bomber" : "fighter");
  }

  return {
    wave: clampedWave,
    ships,
    salvageReward: 35 + clampedWave * 15,
  };
}
