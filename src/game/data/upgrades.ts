import { ShipClass } from "./fleets";

export type UpgradeStat = "hull" | "shield" | "damage" | "range" | "salvageIncome";
export type UpgradeCategory = "Command" | "Shields" | "Strike" | "Economy";

export interface UpgradeDefinition {
  id: string;
  name: string;
  description: string;
  category: UpgradeCategory;
  cost: number;
  target: ShipClass | "economy";
  stat: UpgradeStat;
  multiplier: number;
}

export const UPGRADES: UpgradeDefinition[] = [
  {
    id: "flagship_hull_1",
    name: "Reinforced Command Hull I",
    description: "Increase flagship hull by 15%.",
    category: "Command",
    cost: 2,
    target: "flagship",
    stat: "hull",
    multiplier: 1.15,
  },
  {
    id: "fleet_shields_1",
    name: "Harmonic Shield Lattice I",
    description: "Increase all player shields by 10%.",
    category: "Shields",
    cost: 2,
    target: "economy",
    stat: "shield",
    multiplier: 1.1,
  },
  {
    id: "bomber_payload_1",
    name: "Heavy Torpedo Payload I",
    description: "Increase bomber damage by 20%.",
    category: "Strike",
    cost: 2,
    target: "bomber",
    stat: "damage",
    multiplier: 1.2,
  },
  {
    id: "cruiser_lance_1",
    name: "Extended Lance Optics I",
    description: "Increase cruiser weapon range by 12%.",
    category: "Strike",
    cost: 2,
    target: "cruiser",
    stat: "range",
    multiplier: 1.12,
  },
  {
    id: "salvage_yield_1",
    name: "Salvage Yield Routing I",
    description: "Increase salvage income by 20%.",
    category: "Economy",
    cost: 3,
    target: "economy",
    stat: "salvageIncome",
    multiplier: 1.2,
  },
];
