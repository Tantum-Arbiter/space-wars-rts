import { ShipClass } from "./fleets";
import type { DamageType } from "../core/rules";

export interface ShipBalance {
  hull: number;
  shield: number;
  shieldRegen: number;
  speed: number;
  range: number;
  damage: number;
  damageType: DamageType;
  cooldown: number;
}

export const SHIP_BALANCE: Record<ShipClass, ShipBalance> = {
  flagship: {
    hull: 5000,
    shield: 2500,
    shieldRegen: 18,
    speed: 32,
    range: 420,
    damage: 120,
    damageType: "lance",
    cooldown: 1.4,
  },
  heavyCapital: {
    hull: 2600,
    shield: 1200,
    shieldRegen: 10,
    speed: 38,
    range: 360,
    damage: 90,
    damageType: "lance",
    cooldown: 1.2,
  },
  cruiser: {
    hull: 1200,
    shield: 650,
    shieldRegen: 8,
    speed: 58,
    range: 260,
    damage: 36,
    damageType: "flak",
    cooldown: 0.6,
  },
  fighter: {
    hull: 120,
    shield: 40,
    shieldRegen: 2,
    speed: 160,
    range: 120,
    damage: 8,
    damageType: "laser",
    cooldown: 0.18,
  },
  bomber: {
    hull: 220,
    shield: 60,
    shieldRegen: 3,
    speed: 110,
    range: 150,
    damage: 180,
    damageType: "torpedo",
    cooldown: 2.2,
  },
  scout: {
    hull: 80,
    shield: 30,
    shieldRegen: 2,
    speed: 190,
    range: 160,
    damage: 4,
    damageType: "laser",
    cooldown: 0.26,
  },
  drone: {
    hull: 90,
    shield: 45,
    shieldRegen: 4,
    speed: 100,
    range: 110,
    damage: 2,
    damageType: "laser",
    cooldown: 1.2,
  },
};
