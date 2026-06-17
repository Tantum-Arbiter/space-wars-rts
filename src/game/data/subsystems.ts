import type { ShipClass } from "./fleets";

export type SubsystemDataType =
  | "shieldGenerator"
  | "hangar"
  | "engine"
  | "heavyWeapon"
  | "pointDefence"
  | "commandCore"
  | "repairSystem"
  | "sensorArray";

export interface SubsystemDefinition {
  id: string;
  type: SubsystemDataType;
  name: string;
  maxHealth: number;
  targetable: boolean;
  positionOffset: {
    x: number;
    y: number;
  };
  effectsWhenDestroyed: string[];
  tags: string[];
}

export interface SubsystemInstance {
  id: string;
  definitionId: string;
  type: SubsystemDataType;
  currentHealth: number;
  maxHealth: number;
  destroyed: boolean;
  disabled: boolean;
  lastDamagedAtMs: number;
}

export interface ShipSubsystemLoadout {
  shipClass: ShipClass;
  subsystems: SubsystemDefinition[];
}

export const SHIP_SUBSYSTEM_LOADOUTS: ShipSubsystemLoadout[] = [
  {
    shipClass: "flagship",
    subsystems: [
      { id: "flagship_command_core", type: "commandCore", name: "Command Core", maxHealth: 850, targetable: true, positionOffset: { x: 48, y: 0 }, effectsWhenDestroyed: ["increaseIncomingHullDamage", "increaseCooldowns"], tags: ["command", "priority"] },
      { id: "flagship_shield_generator", type: "shieldGenerator", name: "Shield Generator", maxHealth: 900, targetable: true, positionOffset: { x: 6, y: -24 }, effectsWhenDestroyed: ["disableShieldRegen", "dropCurrentShieldToZero"], tags: ["defensive", "priority"] },
      { id: "flagship_engine", type: "engine", name: "Engine Array", maxHealth: 650, targetable: true, positionOffset: { x: -68, y: 0 }, effectsWhenDestroyed: ["reduceMovement"], tags: ["mobility"] },
      { id: "flagship_main_cannon", type: "heavyWeapon", name: "Main Cannon", maxHealth: 750, targetable: true, positionOffset: { x: 72, y: 0 }, effectsWhenDestroyed: ["reduceDamage", "increaseCooldowns"], tags: ["weapon"] },
      { id: "flagship_hangar", type: "hangar", name: "Hangar Bay", maxHealth: 700, targetable: true, positionOffset: { x: -8, y: 25 }, effectsWhenDestroyed: ["disableSquadronLaunch"], tags: ["hangar", "squadron"] },
      { id: "flagship_repair", type: "repairSystem", name: "Repair Bay", maxHealth: 600, targetable: true, positionOffset: { x: -35, y: -22 }, effectsWhenDestroyed: ["disableSubsystemRepair"], tags: ["repair"] },
      { id: "flagship_point_defence", type: "pointDefence", name: "Point Defence", maxHealth: 600, targetable: true, positionOffset: { x: 22, y: 24 }, effectsWhenDestroyed: ["weakenAntiBomber"], tags: ["defensive", "antiBomber"] },
      { id: "flagship_sensors", type: "sensorArray", name: "Sensor Array", maxHealth: 450, targetable: true, positionOffset: { x: 34, y: -27 }, effectsWhenDestroyed: ["reduceWeaponRange"], tags: ["sensor"] },
    ],
  },
  {
    shipClass: "heavyCapital",
    subsystems: [
      { id: "dreadnought_shield_generator", type: "shieldGenerator", name: "Shield Generator", maxHealth: 750, targetable: true, positionOffset: { x: 0, y: -18 }, effectsWhenDestroyed: ["disableShieldRegen"], tags: ["defensive"] },
      { id: "dreadnought_engine", type: "engine", name: "Engine Array", maxHealth: 550, targetable: true, positionOffset: { x: -48, y: 0 }, effectsWhenDestroyed: ["reduceMovement"], tags: ["mobility"] },
      { id: "dreadnought_heavy_cannon", type: "heavyWeapon", name: "Heavy Cannon", maxHealth: 700, targetable: true, positionOffset: { x: 46, y: 0 }, effectsWhenDestroyed: ["reduceDamage"], tags: ["weapon"] },
      { id: "dreadnought_hangar", type: "hangar", name: "Aux Hangar", maxHealth: 600, targetable: true, positionOffset: { x: -12, y: 20 }, effectsWhenDestroyed: ["disableSquadronLaunch"], tags: ["hangar", "squadron"] },
      { id: "dreadnought_point_defence", type: "pointDefence", name: "Point Defence", maxHealth: 500, targetable: true, positionOffset: { x: 18, y: 18 }, effectsWhenDestroyed: ["weakenAntiBomber"], tags: ["defensive", "antiBomber"] },
      { id: "dreadnought_command_core", type: "commandCore", name: "Command Core", maxHealth: 650, targetable: true, positionOffset: { x: 24, y: -15 }, effectsWhenDestroyed: ["increaseCooldowns"], tags: ["command"] },
    ],
  },
  {
    shipClass: "cruiser",
    subsystems: [
      { id: "cruiser_shield_relay", type: "shieldGenerator", name: "Shield Relay", maxHealth: 350, targetable: true, positionOffset: { x: 0, y: -13 }, effectsWhenDestroyed: ["disableShieldRegen"], tags: ["defensive"] },
      { id: "cruiser_engine", type: "engine", name: "Engine System", maxHealth: 300, targetable: true, positionOffset: { x: -34, y: 0 }, effectsWhenDestroyed: ["reduceMovement"], tags: ["mobility"] },
      { id: "cruiser_weapon_battery", type: "heavyWeapon", name: "Weapon Battery", maxHealth: 350, targetable: true, positionOffset: { x: 34, y: 0 }, effectsWhenDestroyed: ["reduceDamage"], tags: ["weapon"] },
      { id: "cruiser_point_defence", type: "pointDefence", name: "Point Defence", maxHealth: 300, targetable: true, positionOffset: { x: 12, y: 13 }, effectsWhenDestroyed: ["weakenAntiBomber"], tags: ["defensive", "antiBomber"] },
    ],
  },
];
