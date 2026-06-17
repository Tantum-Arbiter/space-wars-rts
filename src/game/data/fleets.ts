import { Team } from "../core/Constants";

export type ShipClass = "flagship" | "heavyCapital" | "cruiser" | "fighter" | "bomber" | "scout" | "drone";

export interface FleetShipDefinition {
  id: string;
  team: Team;
  shipClass: ShipClass;
  x: number;
  y: number;
  rotation: number;
  launchedBy?: string;
}

export interface ShipVisualDefinition {
  label: string;
  hullColor: number;
  glowColor: number;
  accentColor: number;
  width: number;
  height: number;
}

export const SHIP_VISUALS: Record<ShipClass, ShipVisualDefinition> = {
  flagship: {
    label: "Flagship",
    hullColor: 0x9bb8c8,
    glowColor: 0x38d5ff,
    accentColor: 0xf1fbff,
    width: 150,
    height: 54,
  },
  heavyCapital: {
    label: "Dreadnought",
    hullColor: 0x849bad,
    glowColor: 0x74d5ff,
    accentColor: 0xd5effb,
    width: 108,
    height: 42,
  },
  cruiser: {
    label: "Lance Cruiser",
    hullColor: 0x7892a7,
    glowColor: 0x66f2d2,
    accentColor: 0xc7fff5,
    width: 78,
    height: 30,
  },
  fighter: {
    label: "Interceptor",
    hullColor: 0xa8c2d0,
    glowColor: 0x8ae8ff,
    accentColor: 0xffffff,
    width: 34,
    height: 18,
  },
  bomber: {
    label: "Strike Bomber",
    hullColor: 0x98a8ba,
    glowColor: 0xffd36c,
    accentColor: 0xfff0bf,
    width: 44,
    height: 22,
  },
  scout: {
    label: "Scout",
    hullColor: 0x9fbfd0,
    glowColor: 0xfff0bf,
    accentColor: 0xffffff,
    width: 30,
    height: 16,
  },
  drone: {
    label: "Repair Drone",
    hullColor: 0x8fbba4,
    glowColor: 0x8ef2a1,
    accentColor: 0xd8ffe1,
    width: 32,
    height: 18,
  },
};

export const STARTING_FLEETS: FleetShipDefinition[] = [
  { id: "player-flagship", team: "player", shipClass: "flagship", x: 520, y: 950, rotation: 0 },
  { id: "player-dreadnought", team: "player", shipClass: "heavyCapital", x: 330, y: 840, rotation: 0.1 },
  { id: "player-cruiser-a", team: "player", shipClass: "cruiser", x: 360, y: 1060, rotation: -0.05 },
  { id: "player-cruiser-b", team: "player", shipClass: "cruiser", x: 620, y: 780, rotation: 0.14 },
  { id: "player-fighter-a", team: "player", shipClass: "fighter", x: 710, y: 900, rotation: 0.06 },
  { id: "player-fighter-b", team: "player", shipClass: "fighter", x: 740, y: 970, rotation: -0.08 },
  { id: "player-bomber-a", team: "player", shipClass: "bomber", x: 650, y: 1090, rotation: 0.04 },
  { id: "enemy-flagship", team: "enemy", shipClass: "flagship", x: 2680, y: 950, rotation: Math.PI },
  { id: "enemy-dreadnought", team: "enemy", shipClass: "heavyCapital", x: 2870, y: 1060, rotation: Math.PI - 0.12 },
  { id: "enemy-cruiser-a", team: "enemy", shipClass: "cruiser", x: 2840, y: 830, rotation: Math.PI + 0.08 },
  { id: "enemy-cruiser-b", team: "enemy", shipClass: "cruiser", x: 2580, y: 1120, rotation: Math.PI - 0.05 },
  { id: "enemy-fighter-a", team: "enemy", shipClass: "fighter", x: 2490, y: 1000, rotation: Math.PI },
  { id: "enemy-fighter-b", team: "enemy", shipClass: "fighter", x: 2460, y: 920, rotation: Math.PI + 0.08 },
  { id: "enemy-bomber-a", team: "enemy", shipClass: "bomber", x: 2545, y: 800, rotation: Math.PI - 0.04 },
];
