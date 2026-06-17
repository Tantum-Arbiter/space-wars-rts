export type SquadronType = "fighter" | "bomber" | "scout" | "drone";

export interface SquadronDefinition {
  id: string;
  type: SquadronType;
  name: string;
  craftCount: number;
  maxHealthPerCraft: number;
  speed: number;
  damage: number;
  range: number;
  cooldownMs: number;
  launchCooldownMs: number;
  strongAgainst: string[];
  weakAgainst: string[];
  abilities: string[];
}

export const SQUADRONS: Record<SquadronType, SquadronDefinition> = {
  fighter: {
    id: "fighter_squadron",
    type: "fighter",
    name: "Fighter Squadron",
    craftCount: 4,
    maxHealthPerCraft: 120,
    speed: 160,
    damage: 8,
    range: 120,
    cooldownMs: 180,
    launchCooldownMs: 16000,
    strongAgainst: ["bomber", "scout"],
    weakAgainst: ["flak", "pointDefence", "hullProtect"],
    abilities: ["intercept", "escort"],
  },
  bomber: {
    id: "bomber_squadron",
    type: "bomber",
    name: "Bomber Squadron",
    craftCount: 3,
    maxHealthPerCraft: 220,
    speed: 110,
    damage: 180,
    range: 150,
    cooldownMs: 2200,
    launchCooldownMs: 24000,
    strongAgainst: ["capitalShip", "subsystem", "hangar", "engine"],
    weakAgainst: ["fighter", "flak", "pointDefence"],
    abilities: ["torpedoRun", "subsystemStrike"],
  },
  scout: {
    id: "scout_squadron",
    type: "scout",
    name: "Scout Squadron",
    craftCount: 2,
    maxHealthPerCraft: 80,
    speed: 190,
    damage: 4,
    range: 160,
    cooldownMs: 260,
    launchCooldownMs: 12000,
    strongAgainst: ["sensor", "nebula"],
    weakAgainst: ["fighter", "flak"],
    abilities: ["sensorPing", "markTarget"],
  },
  drone: {
    id: "drone_squadron",
    type: "drone",
    name: "Drone Squadron",
    craftCount: 3,
    maxHealthPerCraft: 90,
    speed: 100,
    damage: 2,
    range: 110,
    cooldownMs: 1200,
    launchCooldownMs: 20000,
    strongAgainst: ["repair", "support"],
    weakAgainst: ["fighter", "flak"],
    abilities: ["repairBeam", "subsystemPatch"],
  },
};
