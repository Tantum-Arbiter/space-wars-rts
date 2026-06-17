import * as THREE from "three";
import { AudioManager } from "./core/AudioManager";
import { ENEMY_TEAM, PLAYER_TEAM, Team, WORLD_HEIGHT, WORLD_WIDTH } from "./core/Constants";
import { calculateBattleScore, calculateBattleStars, calculateResearchReward, getDamageProfile, getSurvivalWaveComposition, shouldUseEmergencyAbility, type DamageType } from "./core/rules";
import { SHIP_BALANCE, ShipBalance } from "./data/balance";
import { FleetShipDefinition, SHIP_VISUALS, ShipClass, STARTING_FLEETS } from "./data/fleets";
import { SQUADRONS, SquadronType } from "./data/squadrons";
import { UPGRADES, UpgradeCategory } from "./data/upgrades";

interface FleetMesh {
  id: string;
  team: Team;
  shipClass: ShipClass;
  group: THREE.Group;
  label: HTMLDivElement;
  healthBar: HTMLDivElement;
  shieldBar: HTMLDivElement;
  hull: number;
  maxHull: number;
  shield: number;
  maxShield: number;
  baseShieldRegen: number;
  shieldRegen: number;
  baseSpeed: number;
  speed: number;
  attackRange: number;
  baseDamage: number;
  damage: number;
  damageType: DamageType;
  baseCooldown: number;
  cooldown: number;
  cooldownRemaining: number;
  currentOrder?: "attack" | "capture" | "repair" | "hold";
  hangarLaunchCooldown: number;
  hangarLaunchIndex: number;
  hullProtectUntil: number;
  launchedBy?: string;
  target?: Targetable;
  destination?: THREE.Vector3;
  subsystems: Subsystem[];
  isDead: boolean;
}

type SubsystemType = "shield" | "engine" | "mainCannon" | "hangar" | "repair" | "bridge" | "pointDefense" | "sensors";

interface Subsystem {
  id: string;
  type: SubsystemType;
  name: string;
  parent: FleetMesh;
  mesh: THREE.Mesh;
  damageMarker?: THREE.Group;
  label: HTMLDivElement;
  healthBar: HTMLDivElement;
  health: number;
  maxHealth: number;
  lastDamagedAt: number;
  disabledUntil: number;
  isDestroyed: boolean;
}

type Targetable = FleetMesh | Subsystem;

interface Projectile {
  mesh: THREE.Mesh;
  trail?: THREE.Line;
  team: Team;
  target: Targetable;
  damage: number;
  damageType: DamageType;
  sourceShipClass: ShipClass;
  speed: number;
  previousPosition: THREE.Vector3;
}

interface ObjectiveNode {
  id: string;
  kind: "salvage" | "repair";
  owner?: Team;
  position: THREE.Vector3;
  radius: number;
  mesh: THREE.Mesh;
  ring: THREE.Line;
}

interface NebulaZone {
  id: string;
  position: THREE.Vector3;
  radius: number;
  mesh: THREE.Mesh;
  ring: THREE.Line;
}

interface PlayerProfile {
  researchCores: number;
  purchasedUpgrades: string[];
  bestScore: number;
  bestRating: "S" | "A" | "B" | "C";
  bestStars: number;
  bestSurvivalWave: number;
}

interface BattleStats {
  enemyShipsDestroyed: number;
  playerShipsLost: number;
  nodesCaptured: number;
  storePurchases: number;
  abilitiesUsed: number;
  subsystemsDestroyed: number;
}

const SAVE_KEY = "real-time-space-profile-v1";
const MAP_MARGIN = 72;
type AIState = "Opening" | "Resource Control" | "Intercept Bombers" | "Bomber Strike" | "Defend Flagship" | "Retreat and Repair" | "Final Assault";
type BattleObjectiveId = "select" | "move" | "attack" | "capture" | "store" | "ability" | "subsystem" | "flagship";
type BattleMode = "skirmish" | "tutorial" | "survival";
const UPGRADE_CATEGORIES: UpgradeCategory[] = ["Command", "Shields", "Strike", "Economy"];

const COMMAND_ABILITIES: Record<string, { label: string; description: string; cost: number }> = {
  repair: { label: "Repair", description: "Restore nearby allied hull.", cost: 3 },
  emp: { label: "EMP", description: "Disrupt enemy shields.", cost: 4 },
  barrage: { label: "Barrage", description: "Strike the selected target.", cost: 6 },
};

const BATTLE_OBJECTIVES: Array<{ id: BattleObjectiveId; label: string }> = [
  { id: "select", label: "Select a squad" },
  { id: "move", label: "Move into position" },
  { id: "attack", label: "Focus fire an enemy" },
  { id: "capture", label: "Capture a node" },
  { id: "store", label: "Open the battle store" },
  { id: "ability", label: "Use a command ability" },
  { id: "subsystem", label: "Target a subsystem" },
  { id: "flagship", label: "Destroy the enemy flagship" },
];

export class RealTimeSpaceApp {
  private readonly shell: HTMLDivElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly menu: HTMLDivElement;
  private readonly hudStatus: HTMLDivElement;
  private readonly resourcePanel: HTMLDivElement;
  private readonly flagshipPanel: HTMLDivElement;
  private readonly selectedSummary: HTMLDivElement;
  private readonly commandTray: HTMLDivElement;
  private readonly selectionBox: HTMLDivElement;
  private readonly announcementBanner: HTMLDivElement;
  private readonly orientationOverlay: HTMLDivElement;
  private readonly fpsPanel: HTMLDivElement;
  private readonly abilityPanel: HTMLDivElement;
  private readonly objectivePanel: HTMLDivElement;
  private readonly settingsPanel: HTMLDivElement;
  private readonly subsystemWheel: HTMLDivElement;
  private readonly minimapCanvas: HTMLCanvasElement;
  private readonly minimapContext: CanvasRenderingContext2D;
  private readonly storeOverlay: HTMLDivElement;
  private readonly upgradeOverlay: HTMLDivElement;
  private readonly labelLayer: HTMLDivElement;
  private readonly scene = new THREE.Scene();
  private readonly clock = new THREE.Clock();
  private readonly audio = new AudioManager();
  private readonly renderer: THREE.WebGLRenderer;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointerNdc = new THREE.Vector2();
  private readonly ships: FleetMesh[] = [];
  private readonly projectiles: Projectile[] = [];
  private readonly objectiveNodes: ObjectiveNode[] = [];
  private readonly nebulaZones: NebulaZone[] = [];
  private readonly groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private readonly selectedShips = new Set<FleetMesh>();
  private readonly selectionRings = new Map<FleetMesh, THREE.Line>();
  private readonly commandMarkers: THREE.Object3D[] = [];
  private readonly completedObjectives = new Set<BattleObjectiveId>();
  private readonly battleStats: BattleStats = {
    enemyShipsDestroyed: 0,
    playerShipsLost: 0,
    nodesCaptured: 0,
    storePurchases: 0,
    abilitiesUsed: 0,
    subsystemsDestroyed: 0,
  };
  private readonly profile: PlayerProfile;
  private resultOverlay?: HTMLDivElement;
  private animationId = 0;
  private salvage = 120;
  private commandPoints = 0;
  private economyTimer = 0;
  private nebulaHintTimer = 0;
  private cameraShakeTime = 0;
  private cameraShakeStrength = 0;
  private salvageMultiplier = 1;
  private reinforcementIndex = 0;
  private enemyReinforcementIndex = 0;
  private battleElapsed = 0;
  private aiTimer = 0;
  private aiState: AIState = "Opening";
  private battleMode: BattleMode = "skirmish";
  private selectedUpgradeCategory: UpgradeCategory = "Command";
  private survivalWave = 0;
  private survivalTimer = 0;
  private survivalNextWaveIn = 10;
  private readonly survivalMaxWaves = 5;
  private enemyEmergencyUsed = false;
  private lowQualityMode = false;
  private damageNumbersEnabled = true;
  private fpsAccumulator = 0;
  private fpsFrames = 0;
  private isBattleStarted = false;
  private isTutorialMode = false;
  private battleEnded = false;
  private isPaused = false;
  private isStoreOpen = false;
  private isFollowingFlagship = false;
  private isDragging = false;
  private isBoxSelecting = false;
  private boxSelectArmed = false;
  private dragStarted = false;
  private longPressTimer?: number;
  private longPressHandled = false;
  private lastTapShipClass?: ShipClass;
  private lastTapAt = 0;
  private previousPointer = new THREE.Vector2();
  private dragStartPointer = new THREE.Vector2();
  private pinchDistance?: number;

  constructor(root: HTMLDivElement) {
    this.shell = document.createElement("div");
    this.shell.className = "game-shell";
    root.append(this.shell);

    this.canvas = document.createElement("canvas");
    this.canvas.className = "game-canvas";
    this.shell.append(this.canvas);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    this.renderer.setClearColor(0x050914);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.camera = new THREE.PerspectiveCamera(48, 16 / 9, 1, 6000);
    this.camera.position.set(520, 560, 950);
    this.camera.lookAt(520, 0, 950);

    this.labelLayer = document.createElement("div");
    this.labelLayer.style.position = "absolute";
    this.labelLayer.style.inset = "0";
    this.labelLayer.style.pointerEvents = "none";
    this.shell.append(this.labelLayer);

    this.profile = this.loadProfile();
    this.menu = this.createMenu();
    const hud = this.createHud();
    this.hudStatus = hud.status;
    this.resourcePanel = hud.resources;
    this.flagshipPanel = hud.flagships;
    this.selectedSummary = hud.summary;
    this.commandTray = hud.tray;
    this.selectionBox = this.createSelectionBox();
    this.announcementBanner = this.createAnnouncementBanner();
    this.orientationOverlay = this.createOrientationOverlay();
    this.fpsPanel = this.createFpsPanel();
    this.abilityPanel = this.createAbilityPanel();
    this.objectivePanel = this.createObjectivePanel();
    this.settingsPanel = this.createSettingsPanel();
    this.subsystemWheel = this.createSubsystemWheel();
    const minimap = this.createMinimap();
    this.minimapCanvas = minimap.canvas;
    this.minimapContext = minimap.context;
    this.storeOverlay = this.createStoreOverlay();
    this.upgradeOverlay = this.createUpgradeOverlay();
  }

  start(): void {
    this.setupScene();
    this.bindEvents();
    this.resize();
    this.animate();
  }

  private setupScene(): void {
    this.scene.background = new THREE.Color(0x050914);
    this.scene.fog = new THREE.FogExp2(0x050914, 0.00016);

    this.scene.add(new THREE.AmbientLight(0xbddaff, 0.6));

    const keyLight = new THREE.DirectionalLight(0xc9f4ff, 1.6);
    keyLight.position.set(-420, 900, 520);
    this.scene.add(keyLight);

    const enemyLight = new THREE.PointLight(0xff775d, 2.2, 1300);
    enemyLight.position.set(2680, 280, 950);
    this.scene.add(enemyLight);

    this.createStarfield();
    this.createBattlefield();
    this.createNebulaZones();
    this.createObjectives();
    this.applyPersistentUpgradeModifiers();
    STARTING_FLEETS.forEach((ship) => this.createShip(ship));
    this.updateResourcePanel();
    this.updateFlagshipPanel();
  }

  private createMenu(): HTMLDivElement {
    const menu = document.createElement("div");
    menu.className = "menu-overlay";
    menu.innerHTML = `
      <h1 class="menu-title">Real Time Space</h1>
      <p class="menu-subtitle">3D tactical fleet prototype: command original capital ships, escorts, fighters, and bombers in a browser battlefield.</p>
      <div class="menu-record">Best ${this.profile.bestRating} | ${this.profile.bestScore.toLocaleString()} score | ${this.renderStarText(this.profile.bestStars)} | Wave ${this.profile.bestSurvivalWave}</div>
      <div class="menu-actions">
        <button class="start-button" type="button" data-menu-start>Start Battle</button>
        <button class="secondary-button" type="button" data-menu-tutorial>Tutorial</button>
        <button class="secondary-button" type="button" data-menu-survival>Survival</button>
        <button class="secondary-button" type="button" data-menu-upgrades>Upgrades</button>
      </div>
    `;
    menu.querySelector("[data-menu-start]")?.addEventListener("click", () => {
      this.startBattle("skirmish");
    });
    menu.querySelector("[data-menu-tutorial]")?.addEventListener("click", () => {
      this.startBattle("tutorial");
    });
    menu.querySelector("[data-menu-survival]")?.addEventListener("click", () => {
      this.startBattle("survival");
    });
    menu.querySelector("[data-menu-upgrades]")?.addEventListener("click", () => {
      this.openUpgradeOverlay();
    });
    this.shell.append(menu);
    return menu;
  }

  private startBattle(mode: BattleMode): void {
    void this.audio.prime();
    this.audio.play("start");
    this.battleMode = mode;
    this.isTutorialMode = mode === "tutorial";
    this.isBattleStarted = true;
    this.menu.classList.add("is-hidden");
    this.objectivePanel.classList.toggle("is-visible", this.isTutorialMode);
    this.hudStatus.textContent = mode === "survival" ? "Survival ready" : this.isTutorialMode ? "Tutorial ready" : "Battle ready";
    if (this.isTutorialMode) {
      this.announce("Tutorial mode active");
    } else if (mode === "survival") {
      this.salvage += 80;
      this.survivalWave = 0;
      this.survivalTimer = 0;
      this.survivalNextWaveIn = 8;
      this.updateResourcePanel();
      this.announce("Survival mode: enemy waves inbound");
    }
    this.updateObjectiveProgress();
  }

  private createHud(): { status: HTMLDivElement; resources: HTMLDivElement; flagships: HTMLDivElement; summary: HTMLDivElement; tray: HTMLDivElement } {
    const hud = document.createElement("div");
    hud.className = "hud";
    hud.innerHTML = `
      <div class="hud-panel">Tap a blue ship to select. Use group buttons or Box for squads. Tap enemy ships to focus fire. Tap open space to move. Drag to pan. Pinch or wheel to zoom.</div>
      <div class="hud-stack">
        <div class="hud-panel resource-panel">Salvage 120 | Command 0</div>
        <div class="hud-panel hud-status">Menu</div>
        <div class="hud-panel flagship-panel"></div>
      </div>
    `;
    this.shell.append(hud);

    const tray = document.createElement("div");
    tray.className = "command-tray";
    tray.innerHTML = `
      <div class="selection-summary">No units selected</div>
      <div class="command-buttons">
        <details class="command-group command-group-secondary">
          <summary>Fleet</summary>
          <button type="button" data-group="all" title="Select every player ship" aria-label="Select every player ship">All</button>
          <button type="button" data-group="capital" title="Select flagship and dreadnoughts" aria-label="Select capital ships">Capital</button>
          <button type="button" data-group="cruiser" title="Select lance cruisers" aria-label="Select cruisers">Cruisers</button>
          <button type="button" data-group="strike" title="Select fighters and bombers" aria-label="Select strike craft">Strike</button>
        </details>
        <details class="command-group command-group-primary" open>
          <summary>Orders</summary>
          <button type="button" data-action="box" title="Drag a selection box" aria-label="Drag a selection box">Box</button>
          <button type="button" data-action="guard" title="Guard the player flagship" aria-label="Guard the player flagship">Guard</button>
          <button type="button" data-action="retreat" title="Retreat selected ships to repairs" aria-label="Retreat selected ships">Retreat</button>
          <button type="button" data-action="subsystem" title="Target the next enemy subsystem" aria-label="Target enemy subsystem">Systems</button>
          <button type="button" data-action="protect" title="Brace selected capital ships" aria-label="Brace selected capital ships">Protect</button>
        </details>
        <details class="command-group command-group-secondary">
          <summary>Squadrons</summary>
          <button type="button" data-launch="fighter" title="Launch fighter squadron" aria-label="Launch fighter squadron">Fighter</button>
          <button type="button" data-launch="bomber" title="Launch bomber squadron" aria-label="Launch bomber squadron">Bomber</button>
          <button type="button" data-launch="scout" title="Launch scout squadron" aria-label="Launch scout squadron">Scout</button>
          <button type="button" data-launch="drone" title="Launch repair drone squadron" aria-label="Launch repair drone squadron">Drone</button>
        </details>
        <details class="command-group command-group-primary" open>
          <summary>Ops</summary>
          <button type="button" data-action="store" title="Open the battle store" aria-label="Open battle store">Store</button>
          <button type="button" data-action="follow" title="Toggle flagship follow camera" aria-label="Toggle flagship follow camera">Follow</button>
          <button type="button" data-action="pause" title="Pause or resume battle" aria-label="Pause or resume battle">Pause</button>
        </details>
        <details class="command-group command-group-secondary">
          <summary>Utility</summary>
          <button type="button" data-action="settings" title="Open display and audio settings" aria-label="Open display and audio settings">Settings</button>
        </details>
      </div>
    `;
    tray.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("button");
      if (!button || !this.isBattleStarted || this.battleEnded) return;

      const group = button.dataset.group;
      if (group) {
        this.selectGroup(group);
      }

      if (button.dataset.action === "box") {
        this.boxSelectArmed = true;
        this.commandTray.classList.add("is-box-armed");
        this.hudStatus.textContent = "Drag a selection box";
      }

      if (button.dataset.action === "store") {
        this.openStore();
      }

      if (button.dataset.action === "subsystem") {
        this.targetNextEnemySubsystem();
      }

      if (button.dataset.action === "guard") {
        this.guardFlagship();
      }

      if (button.dataset.action === "retreat") {
        this.retreatSelectedShips();
      }

      if (button.dataset.action === "protect") {
        this.activateHullProtectMode();
      }

      if (button.dataset.launch) {
        this.manualLaunchSquadron(button.dataset.launch as SquadronType);
      }

      if (button.dataset.action === "follow") {
        this.toggleFollowFlagship(button);
      }

      if (button.dataset.action === "pause") {
        this.togglePause(button);
      }

      if (button.dataset.action === "settings") {
        this.toggleSettingsPanel(button);
      }
    });
    this.shell.append(tray);

    return {
      status: hud.querySelector(".hud-status") as HTMLDivElement,
      resources: hud.querySelector(".resource-panel") as HTMLDivElement,
      flagships: hud.querySelector(".flagship-panel") as HTMLDivElement,
      summary: tray.querySelector(".selection-summary") as HTMLDivElement,
      tray,
    };
  }

  private createSelectionBox(): HTMLDivElement {
    const box = document.createElement("div");
    box.className = "selection-box";
    this.shell.append(box);
    return box;
  }

  private createAnnouncementBanner(): HTMLDivElement {
    const banner = document.createElement("div");
    banner.className = "battle-announcement";
    this.shell.append(banner);
    return banner;
  }

  private createOrientationOverlay(): HTMLDivElement {
    const overlay = document.createElement("div");
    overlay.className = "orientation-warning";
    overlay.innerHTML = `
      <div>
        <h2>Rotate Device</h2>
        <p>Landscape gives the fleet controls and 3D camera enough room.</p>
      </div>
    `;
    this.shell.append(overlay);
    return overlay;
  }

  private createFpsPanel(): HTMLDivElement {
    const panel = document.createElement("div");
    panel.className = "fps-panel";
    panel.textContent = "FPS --";
    this.shell.append(panel);
    return panel;
  }

  private createAbilityPanel(): HTMLDivElement {
    const panel = document.createElement("div");
    panel.className = "ability-panel";
    panel.innerHTML = Object.entries(COMMAND_ABILITIES)
      .map(([id, ability]) => `
        <button type="button" data-ability="${id}" title="${ability.description}">
          <strong>${ability.label}</strong>
          <small>${ability.description}</small>
          <span data-ability-status>${ability.cost} command</span>
        </button>
      `)
      .join("");
    panel.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("[data-ability]") as HTMLButtonElement | null;
      if (!button || !this.isBattleStarted || this.battleEnded || this.isStoreOpen) return;
      this.useAbility(button.dataset.ability ?? "");
    });
    this.shell.append(panel);
    return panel;
  }

  private createObjectivePanel(): HTMLDivElement {
    const panel = document.createElement("div");
    panel.className = "objective-panel";
    panel.innerHTML = `
      <strong>Battle Objectives</strong>
      <ul>
        ${BATTLE_OBJECTIVES.map((objective) => `<li data-objective="${objective.id}">${objective.label}</li>`).join("")}
      </ul>
    `;
    this.shell.append(panel);
    return panel;
  }

  private createSettingsPanel(): HTMLDivElement {
    const panel = document.createElement("div");
    panel.className = "settings-panel";
    panel.innerHTML = `
      <strong>Settings</strong>
      <button class="is-active" type="button" data-action="numbers" title="Toggle floating combat numbers">Floating Numbers <span>On</span></button>
      <button type="button" data-action="quality" title="Toggle graphics quality">Graphics Quality <span>High</span></button>
      <button type="button" data-action="audio" title="Toggle audio">Audio <span>${this.audio.isMuted ? "Muted" : "On"}</span></button>
    `;
    panel.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("button") as HTMLButtonElement | null;
      if (!button || !this.isBattleStarted || this.battleEnded) return;

      if (button.dataset.action === "quality") {
        this.toggleQualityMode(button);
      }

      if (button.dataset.action === "audio") {
        this.toggleAudio(button);
      }

      if (button.dataset.action === "numbers") {
        this.toggleDamageNumbers(button);
      }
    });
    this.shell.append(panel);
    return panel;
  }

  private createSubsystemWheel(): HTMLDivElement {
    const wheel = document.createElement("div");
    wheel.className = "subsystem-wheel";
    wheel.addEventListener("pointerdown", (event) => event.stopPropagation());
    wheel.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("[data-subsystem-id]") as HTMLButtonElement | null;
      if (!button) return;
      const subsystem = this.ships.flatMap((ship) => ship.subsystems).find((candidate) => candidate.id === button.dataset.subsystemId);
      const selected = this.getSelectedShips();
      if (!subsystem || subsystem.isDestroyed || selected.length === 0) {
        this.audio.play("error");
        this.hideSubsystemWheel();
        return;
      }
      this.issueAttackCommand(subsystem, selected);
      this.hudStatus.textContent = `Target: ${subsystem.name}`;
      this.announce(`Subsystem targeted: ${subsystem.name}`);
      this.hideSubsystemWheel();
    });
    this.shell.append(wheel);
    return wheel;
  }

  private createMinimap(): { canvas: HTMLCanvasElement; context: CanvasRenderingContext2D } {
    const canvas = document.createElement("canvas");
    canvas.className = "minimap";
    canvas.width = 240;
    canvas.height = 144;
    canvas.addEventListener("pointerdown", (event) => this.onMinimapPointer(event));
    this.shell.append(canvas);

    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Unable to create minimap canvas context");
    }
    return { canvas, context };
  }

  private createStoreOverlay(): HTMLDivElement {
    const overlay = document.createElement("div");
    overlay.className = "store-overlay";
    overlay.innerHTML = `
      <div class="store-panel">
        <div class="store-header">
          <h2>Battle Store</h2>
          <button type="button" data-store-close>Close</button>
        </div>
        <div class="store-wallet"></div>
        <div class="store-items">
          <section class="store-section">
            <h3>Ships</h3>
            <button type="button" data-purchase="fighter"><span><strong>Deploy Interceptor Pair</strong><small>Fast screeners for bombers and captures.</small></span><span class="store-cost" data-cost-status>60 salvage</span></button>
            <button type="button" data-purchase="bomber"><span><strong>Deploy Strike Bomber</strong><small>Torpedo craft for capital pressure.</small></span><span class="store-cost" data-cost-status>90 salvage</span></button>
            <button type="button" data-purchase="cruiser"><span><strong>Call Lance Cruiser</strong><small>Reliable midline fire support.</small></span><span class="store-cost" data-cost-status>160 salvage</span></button>
          </section>
          <section class="store-section">
            <h3>Recovery</h3>
            <button type="button" data-purchase="repair"><span><strong>Repair Flagship</strong><small>Restore a chunk of flagship hull.</small></span><span class="store-cost" data-cost-status>80 salvage</span></button>
            <button type="button" data-purchase="shield"><span><strong>Emergency Shields</strong><small>Instant shield reserve for the flagship.</small></span><span class="store-cost" data-cost-status>4 command</span></button>
          </section>
          <section class="store-section">
            <h3>Tactics</h3>
            <button type="button" data-purchase="emp"><span><strong>EMP Strike</strong><small>Disrupt shields and enemy reloads.</small></span><span class="store-cost" data-cost-status>130 salvage</span></button>
            <button type="button" data-purchase="barrage"><span><strong>Barrage Strike</strong><small>Damage up to three ships near target.</small></span><span class="store-cost" data-cost-status>180 salvage</span></button>
          </section>
        </div>
      </div>
    `;
    overlay.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.matches("[data-store-close]")) {
        this.audio.play("toggle");
        this.closeStore();
        return;
      }

      const purchaseButton = target.closest("[data-purchase]") as HTMLButtonElement | null;
      if (purchaseButton) {
        this.purchaseStoreItem(purchaseButton.dataset.purchase ?? "");
      }
    });
    this.shell.append(overlay);
    return overlay;
  }

  private createUpgradeOverlay(): HTMLDivElement {
    const overlay = document.createElement("div");
    overlay.className = "store-overlay upgrade-overlay";
    overlay.innerHTML = `
      <div class="store-panel upgrade-panel">
        <div class="store-header">
          <h2>Fleet Upgrades</h2>
          <button type="button" data-upgrade-close>Close</button>
        </div>
        <div class="upgrade-currency"></div>
        <div class="upgrade-tabs"></div>
        <div class="store-items upgrade-items"></div>
        <div class="upgrade-footer">
          <button type="button" data-upgrade-grant>Debug +3 Cores</button>
          <button type="button" data-upgrade-reset>Reset Save</button>
        </div>
      </div>
    `;
    overlay.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.matches("[data-upgrade-close]")) {
        this.closeUpgradeOverlay();
        return;
      }
      if (target.matches("[data-upgrade-grant]")) {
        this.audio.play("purchase");
        this.profile.researchCores += 3;
        this.saveProfile();
        this.renderUpgradeOverlay();
        return;
      }
      if (target.matches("[data-upgrade-reset]")) {
        this.audio.play("toggle");
        this.profile.researchCores = 3;
        this.profile.purchasedUpgrades = [];
        this.profile.bestScore = 0;
        this.profile.bestRating = "C";
        this.profile.bestStars = 0;
        this.profile.bestSurvivalWave = 0;
        this.saveProfile();
        this.renderUpgradeOverlay();
        return;
      }

      const categoryButton = target.closest("[data-upgrade-category]") as HTMLButtonElement | null;
      if (categoryButton) {
        const category = categoryButton.dataset.upgradeCategory as UpgradeCategory | undefined;
        if (category && UPGRADE_CATEGORIES.includes(category)) {
          this.audio.play("toggle");
          this.selectedUpgradeCategory = category;
          this.renderUpgradeOverlay();
        }
        return;
      }

      const purchaseButton = target.closest("[data-upgrade-id]") as HTMLButtonElement | null;
      if (purchaseButton) {
        this.purchaseUpgrade(purchaseButton.dataset.upgradeId ?? "");
      }
    });
    this.shell.append(overlay);
    return overlay;
  }

  private openUpgradeOverlay(): void {
    this.audio.play("toggle");
    this.closeSettingsPanel();
    this.renderUpgradeOverlay();
    this.upgradeOverlay.classList.add("is-visible");
  }

  private closeUpgradeOverlay(): void {
    this.audio.play("toggle");
    this.upgradeOverlay.classList.remove("is-visible");
  }

  private renderUpgradeOverlay(): void {
    const currency = this.upgradeOverlay.querySelector(".upgrade-currency");
    const tabs = this.upgradeOverlay.querySelector(".upgrade-tabs");
    const items = this.upgradeOverlay.querySelector(".upgrade-items");
    if (!currency || !tabs || !items) return;

    currency.textContent = `Research Cores: ${this.profile.researchCores} | Upgrades Owned: ${this.profile.purchasedUpgrades.length}/${UPGRADES.length}`;
    tabs.innerHTML = UPGRADE_CATEGORIES.map((category) => {
      const categoryUpgrades = UPGRADES.filter((upgrade) => upgrade.category === category);
      const ownedCount = categoryUpgrades.filter((upgrade) => this.profile.purchasedUpgrades.includes(upgrade.id)).length;
      return `<button type="button" data-upgrade-category="${category}" class="${category === this.selectedUpgradeCategory ? "is-active" : ""}" title="${ownedCount}/${categoryUpgrades.length} owned">${category} <span>${ownedCount}/${categoryUpgrades.length}</span></button>`;
    }).join("");

    const visibleUpgrades = UPGRADES.filter((upgrade) => upgrade.category === this.selectedUpgradeCategory);
    items.innerHTML = visibleUpgrades.map((upgrade) => {
      const owned = this.profile.purchasedUpgrades.includes(upgrade.id);
      const disabled = owned || this.profile.researchCores < upgrade.cost;
      return `
        <button type="button" data-upgrade-id="${upgrade.id}" class="${owned ? "is-owned" : ""}" ${disabled ? "disabled" : ""} title="${owned ? "Already owned" : disabled ? "Not enough research cores" : "Purchase upgrade"}">
          <span>
            <strong>${upgrade.name}</strong>
            <small>${upgrade.description}</small>
          </span>
          <span class="upgrade-cost">${owned ? "Owned" : `${upgrade.cost} cores`}</span>
        </button>
      `;
    }).join("");
  }

  private purchaseUpgrade(upgradeId: string): void {
    const upgrade = UPGRADES.find((candidate) => candidate.id === upgradeId);
    if (!upgrade || this.profile.purchasedUpgrades.includes(upgradeId) || this.profile.researchCores < upgrade.cost) {
      this.audio.play("error");
      return;
    }
    this.audio.play("purchase");
    this.profile.researchCores -= upgrade.cost;
    this.profile.purchasedUpgrades.push(upgrade.id);
    this.saveProfile();
    this.renderUpgradeOverlay();
  }

  private loadProfile(): PlayerProfile {
    try {
      const saved = window.localStorage.getItem(SAVE_KEY);
      if (saved) {
        const profile = JSON.parse(saved) as PlayerProfile;
        return {
          researchCores: Number.isFinite(profile.researchCores) ? profile.researchCores : 3,
          purchasedUpgrades: Array.isArray(profile.purchasedUpgrades) ? profile.purchasedUpgrades : [],
          bestScore: Number.isFinite(profile.bestScore) ? profile.bestScore : 0,
          bestRating: ["S", "A", "B", "C"].includes(profile.bestRating) ? profile.bestRating : "C",
          bestStars: Number.isFinite(profile.bestStars) ? Math.max(0, Math.min(3, Math.floor(profile.bestStars))) : 0,
          bestSurvivalWave: Number.isFinite(profile.bestSurvivalWave) ? Math.max(0, Math.floor(profile.bestSurvivalWave)) : 0,
        };
      }
    } catch {
      window.localStorage.removeItem(SAVE_KEY);
    }
    return { researchCores: 3, purchasedUpgrades: [], bestScore: 0, bestRating: "C", bestStars: 0, bestSurvivalWave: 0 };
  }

  private saveProfile(): void {
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(this.profile));
  }

  private renderStarText(stars: number): string {
    const earned = Math.max(0, Math.min(3, Math.floor(stars)));
    return `${earned}/3 stars`;
  }

  private createStarfield(): void {
    const positions = new Float32Array(1400 * 3);
    const colors = new Float32Array(1400 * 3);
    for (let i = 0; i < 1400; i += 1) {
      positions[i * 3] = THREE.MathUtils.randFloatSpread(4200) + WORLD_WIDTH / 2;
      positions[i * 3 + 1] = THREE.MathUtils.randFloat(80, 1500);
      positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(3200) + WORLD_HEIGHT / 2;
      const brightness = THREE.MathUtils.randFloat(0.35, 1);
      colors[i * 3] = brightness * 0.75;
      colors[i * 3 + 1] = brightness * 0.9;
      colors[i * 3 + 2] = brightness;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 5, vertexColors: true, transparent: true, opacity: 0.9 });
    this.scene.add(new THREE.Points(geometry, material));
  }

  private createBattlefield(): void {
    const grid = new THREE.GridHelper(Math.max(WORLD_WIDTH, WORLD_HEIGHT), 24, 0x24465a, 0x142536);
    grid.position.set(WORLD_WIDTH / 2, -4, WORLD_HEIGHT / 2);
    this.scene.add(grid);

    this.scene.add(this.createRing(520, 950, 260, 0x38d5ff, 0.3));
    this.scene.add(this.createRing(2680, 950, 260, 0xff704b, 0.3));

    for (const [x, z, radius] of [
      [1460, 790, 70],
      [1600, 980, 92],
      [1760, 860, 74],
      [1530, 1130, 66],
      [1840, 1060, 82],
    ]) {
      const asteroid = new THREE.Mesh(
        new THREE.IcosahedronGeometry(radius, 1),
        new THREE.MeshStandardMaterial({ color: 0x5d7178, roughness: 0.92, metalness: 0.05 }),
      );
      asteroid.position.set(x, THREE.MathUtils.randFloat(8, 42), z);
      asteroid.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      this.scene.add(asteroid);
    }
  }

  private createNebulaZones(): void {
    const definition = { id: "central-nebula", x: 1660, z: 980, radius: 360 };
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(definition.radius, definition.radius * 0.88, 74, 72, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x9f8cff,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    mesh.position.set(definition.x, 38, definition.z);
    this.scene.add(mesh);

    const ring = this.createRing(definition.x, definition.z, definition.radius, 0x9f8cff, 0.55);
    ring.position.y = 6;
    this.scene.add(ring);

    for (const radius of [definition.radius * 0.42, definition.radius * 0.7]) {
      const inner = this.createRing(definition.x, definition.z, radius, 0x65eaff, 0.18);
      inner.position.y = 7;
      this.scene.add(inner);
    }

    this.nebulaZones.push({
      id: definition.id,
      position: new THREE.Vector3(definition.x, 0, definition.z),
      radius: definition.radius,
      mesh,
      ring,
    });
  }

  private createObjectives(): void {
    const objectives: Array<{ id: string; kind: ObjectiveNode["kind"]; x: number; z: number; radius: number }> = [
      { id: "salvage-west", kind: "salvage", x: 1180, z: 780, radius: 130 },
      { id: "salvage-mid", kind: "salvage", x: 1600, z: 980, radius: 140 },
      { id: "salvage-east", kind: "salvage", x: 2020, z: 1120, radius: 130 },
      { id: "repair-north", kind: "repair", x: 1500, z: 620, radius: 120 },
      { id: "repair-south", kind: "repair", x: 1740, z: 1320, radius: 120 },
    ];

    for (const definition of objectives) {
      const color = definition.kind === "salvage" ? 0xffd36c : 0x8ef2a1;
      const mesh = new THREE.Mesh(
        definition.kind === "salvage" ? new THREE.OctahedronGeometry(28, 0) : new THREE.CylinderGeometry(28, 40, 16, 24),
        new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.18, emissive: color, emissiveIntensity: 0.16 }),
      );
      mesh.position.set(definition.x, definition.kind === "salvage" ? 30 : 8, definition.z);
      this.scene.add(mesh);

      const ring = this.createRing(definition.x, definition.z, definition.radius, color, 0.52);
      ring.position.y = 4;
      this.scene.add(ring);

      this.objectiveNodes.push({
        id: definition.id,
        kind: definition.kind,
        position: new THREE.Vector3(definition.x, 0, definition.z),
        radius: definition.radius,
        mesh,
        ring,
      });
    }
  }

  private createRing(x: number, z: number, radius: number, color: number, opacity: number): THREE.Line {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 96; i += 1) {
      const angle = (i / 96) * Math.PI * 2;
      points.push(new THREE.Vector3(x + Math.cos(angle) * radius, 2, z + Math.sin(angle) * radius));
    }
    return new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity }),
    );
  }

  private createShip(definition: FleetShipDefinition): void {
    const visual = SHIP_VISUALS[definition.shipClass];
    const teamGlow = definition.team === PLAYER_TEAM ? visual.glowColor : 0xff704b;
    const group = new THREE.Group();
    group.name = definition.id;
    group.position.copy(this.clampWorldPosition(new THREE.Vector3(definition.x, 34, definition.y)));
    group.rotation.y = -definition.rotation;

    const hull = this.createHull(definition.shipClass, visual.width, visual.height, visual.hullColor);
    group.add(hull);

    const glow = new THREE.PointLight(teamGlow, definition.shipClass === "flagship" ? 2.4 : 1.1, visual.width * 4);
    glow.position.set(-visual.width * 0.48, 0, 0);
    group.add(glow);

    const engine = new THREE.Mesh(
      new THREE.SphereGeometry(Math.max(4, visual.height * 0.13), 12, 8),
      new THREE.MeshBasicMaterial({ color: teamGlow, transparent: true, opacity: 0.85 }),
    );
    engine.position.set(-visual.width * 0.55, 0, 0);
    group.add(engine);

    const trail = new THREE.Mesh(
      new THREE.ConeGeometry(Math.max(5, visual.height * 0.18), visual.width * 0.42, 16, 1, true),
      new THREE.MeshBasicMaterial({
        color: teamGlow,
        transparent: true,
        opacity: definition.shipClass === "flagship" ? 0.2 : 0.28,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    trail.rotation.z = Math.PI / 2;
    trail.position.set(-visual.width * 0.74, 0, 0);
    group.add(trail);

    group.traverse((object) => {
      object.userData.shipId = definition.id;
    });

    const label = document.createElement("div");
    label.textContent = visual.label;
    label.style.position = "absolute";
    label.style.color = definition.team === PLAYER_TEAM ? "#b9f5ff" : "#ffc4b5";
    label.style.font = `${definition.shipClass === "flagship" ? 15 : 12}px Arial, sans-serif`;
    label.style.textShadow = "0 1px 8px #000";
    label.style.transform = "translate(-50%, 0)";
    label.className = "ship-label";
    label.innerHTML = `
      <span>${visual.label}</span>
      <span class="ship-bars">
        <span class="ship-bar ship-bar-shield"><span></span></span>
        <span class="ship-bar ship-bar-hull"><span></span></span>
      </span>
      <span class="ship-hangar-status"></span>
    `;
    this.labelLayer.append(label);
    const shieldBar = label.querySelector(".ship-bar-shield span") as HTMLDivElement;
    const healthBar = label.querySelector(".ship-bar-hull span") as HTMLDivElement;
    const balance = this.getShipBalance(definition.team, definition.shipClass);

    this.scene.add(group);
    const ship: FleetMesh = {
      id: definition.id,
      team: definition.team,
      shipClass: definition.shipClass,
      group,
      label,
      healthBar,
      shieldBar,
      hull: balance.hull,
      maxHull: balance.hull,
      shield: balance.shield,
      maxShield: balance.shield,
      baseShieldRegen: balance.shieldRegen,
      shieldRegen: balance.shieldRegen,
      baseSpeed: balance.speed,
      speed: balance.speed,
      attackRange: balance.range,
      baseDamage: balance.damage,
      damage: balance.damage,
      damageType: balance.damageType,
      baseCooldown: balance.cooldown,
      cooldown: balance.cooldown,
      cooldownRemaining: THREE.MathUtils.randFloat(0, balance.cooldown),
      currentOrder: definition.team === ENEMY_TEAM ? "hold" : undefined,
      hangarLaunchCooldown: this.shipClassUsesSubsystems(definition.shipClass) ? THREE.MathUtils.randFloat(12, 18) : 0,
      hangarLaunchIndex: 0,
      hullProtectUntil: 0,
      launchedBy: definition.launchedBy,
      subsystems: [],
      isDead: false,
    };
    if (this.shipClassUsesSubsystems(definition.shipClass)) {
      ship.subsystems = this.createSubsystems(ship);
    }
    this.updateBars(ship);
    this.ships.push(ship);
  }

  private shipClassUsesSubsystems(shipClass: ShipClass): boolean {
    return ["flagship", "heavyCapital", "cruiser"].includes(shipClass);
  }

  private createSubsystems(parent: FleetMesh): Subsystem[] {
    const layouts: Record<"flagship" | "heavyCapital" | "cruiser", Array<{ type: SubsystemType; name: string; x: number; z: number; color: number; health: number }>> = {
      flagship: [
        { type: "bridge", name: "Command Core", x: 48, z: 0, color: 0xff704b, health: 460 },
        { type: "shield", name: "Shield Generator", x: 6, z: -24, color: 0x65eaff, health: 420 },
        { type: "engine", name: "Engine Array", x: -68, z: 0, color: 0xffd36c, health: 390 },
        { type: "mainCannon", name: "Main Cannon", x: 72, z: 0, color: 0xff9b80, health: 420 },
        { type: "hangar", name: "Hangar Bay", x: -8, z: 25, color: 0xb58cff, health: 380 },
        { type: "repair", name: "Repair Bay", x: -35, z: -22, color: 0x8ef2a1, health: 360 },
        { type: "pointDefense", name: "Point Defence", x: 22, z: 24, color: 0xf1fbff, health: 340 },
        { type: "sensors", name: "Sensor Array", x: 34, z: -27, color: 0xfff0bf, health: 300 },
      ],
      heavyCapital: [
        { type: "shield", name: "Shield Generator", x: 0, z: -18, color: 0x65eaff, health: 320 },
        { type: "engine", name: "Engine Array", x: -48, z: 0, color: 0xffd36c, health: 300 },
        { type: "mainCannon", name: "Heavy Cannon", x: 46, z: 0, color: 0xff9b80, health: 330 },
        { type: "hangar", name: "Aux Hangar", x: -12, z: 20, color: 0xb58cff, health: 280 },
        { type: "pointDefense", name: "Point Defence", x: 18, z: 18, color: 0xf1fbff, health: 260 },
        { type: "bridge", name: "Command Core", x: 24, z: -15, color: 0xff704b, health: 310 },
      ],
      cruiser: [
        { type: "shield", name: "Shield Relay", x: 0, z: -13, color: 0x65eaff, health: 190 },
        { type: "engine", name: "Engine System", x: -34, z: 0, color: 0xffd36c, health: 210 },
        { type: "mainCannon", name: "Weapon Battery", x: 34, z: 0, color: 0xff9b80, health: 220 },
        { type: "pointDefense", name: "Point Defence", x: 12, z: 13, color: 0xf1fbff, health: 190 },
      ],
    };
    const definitions = layouts[parent.shipClass as "flagship" | "heavyCapital" | "cruiser"] ?? [];

    return definitions.map((definition) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(parent.shipClass === "cruiser" ? 5 : 7, 12, 8),
        new THREE.MeshBasicMaterial({ color: definition.color, transparent: true, opacity: 0.9 }),
      );
      mesh.position.set(definition.x, 16, definition.z);
      mesh.userData.shipId = parent.id;
      mesh.userData.subsystemId = `${parent.id}-${definition.type}`;
      parent.group.add(mesh);

      const label = document.createElement("div");
      label.className = "subsystem-label";
      label.innerHTML = `
        <span>${definition.name}</span>
        <span class="subsystem-bar"><span></span></span>
      `;
      this.labelLayer.append(label);
      const healthBar = label.querySelector(".subsystem-bar span") as HTMLDivElement;

      return {
        id: `${parent.id}-${definition.type}`,
        type: definition.type,
        name: definition.name,
        parent,
        mesh,
        damageMarker: undefined,
        label,
        healthBar,
        health: definition.health,
        maxHealth: definition.health,
        lastDamagedAt: 0,
        disabledUntil: 0,
        isDestroyed: false,
      };
    });
  }

  private getShipBalance(team: Team, shipClass: ShipClass): ShipBalance {
    const base = SHIP_BALANCE[shipClass];
    const balance = { ...base };
    if (team !== PLAYER_TEAM) {
      return balance;
    }

    for (const upgrade of UPGRADES) {
      if (!this.profile.purchasedUpgrades.includes(upgrade.id)) continue;
      if (upgrade.target !== shipClass && !(upgrade.target === "economy" && upgrade.stat !== "salvageIncome")) continue;

      if (upgrade.stat === "hull") {
        balance.hull *= upgrade.multiplier;
      } else if (upgrade.stat === "shield") {
        balance.shield *= upgrade.multiplier;
      } else if (upgrade.stat === "damage") {
        balance.damage *= upgrade.multiplier;
      } else if (upgrade.stat === "range") {
        balance.range *= upgrade.multiplier;
      }
    }

    return balance;
  }

  private applyPersistentUpgradeModifiers(): void {
    this.salvageMultiplier = 1;
    for (const upgrade of UPGRADES) {
      if (this.profile.purchasedUpgrades.includes(upgrade.id) && upgrade.stat === "salvageIncome") {
        this.salvageMultiplier *= upgrade.multiplier;
      }
    }
  }

  private createHull(shipClass: ShipClass, width: number, height: number, color: number): THREE.Mesh {
    const shape = new THREE.Shape();
    shape.moveTo(width * 0.55, 0);
    shape.lineTo(width * 0.18, -height * 0.5);
    shape.lineTo(-width * 0.48, -height * 0.34);
    shape.lineTo(-width * 0.34, 0);
    shape.lineTo(-width * 0.48, height * 0.34);
    shape.lineTo(width * 0.18, height * 0.5);
    shape.lineTo(width * 0.55, 0);

    if (shipClass === "fighter") {
      shape.autoClose = true;
    }

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: shipClass === "flagship" ? 26 : Math.max(8, height * 0.55),
      bevelEnabled: true,
      bevelSize: shipClass === "flagship" ? 6 : 3,
      bevelThickness: shipClass === "flagship" ? 5 : 2,
      bevelSegments: 1,
    });
    geometry.center();
    geometry.rotateX(Math.PI / 2);

    return new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({ color, roughness: 0.48, metalness: 0.38, emissive: color, emissiveIntensity: 0.04 }),
    );
  }

  private bindEvents(): void {
    window.addEventListener("resize", () => this.resize());
    this.canvas.addEventListener("pointerdown", (event) => this.onPointerDown(event));
    this.canvas.addEventListener("pointermove", (event) => this.onPointerMove(event));
    this.canvas.addEventListener("pointerup", (event) => this.onPointerUp(event));
    this.canvas.addEventListener("pointercancel", () => {
      this.cancelLongPress();
      this.resetPointerState();
    });
    this.canvas.addEventListener("wheel", (event) => {
      event.preventDefault();
      this.zoom(event.deltaY > 0 ? 1.08 : 0.92);
    }, { passive: false });
    this.canvas.addEventListener("touchmove", (event) => this.onTouchMove(event), { passive: false });
    this.canvas.addEventListener("touchend", () => {
      this.pinchDistance = undefined;
    });
  }

  private onPointerDown(event: PointerEvent): void {
    if (!this.isBattleStarted) return;
    this.hideSubsystemWheel();
    this.isDragging = true;
    this.dragStarted = false;
    this.longPressHandled = false;
    this.isBoxSelecting = this.boxSelectArmed;
    this.dragStartPointer.set(event.clientX, event.clientY);
    this.previousPointer.set(event.clientX, event.clientY);
    this.canvas.setPointerCapture(event.pointerId);
    if (this.isBoxSelecting) {
      this.updateSelectionBox(event.clientX, event.clientY);
      this.selectionBox.classList.add("is-visible");
    } else {
      this.scheduleLongPress(event.clientX, event.clientY);
    }
  }

  private onPointerMove(event: PointerEvent): void {
    if (!this.isDragging || !this.isBattleStarted) return;
    const dx = event.clientX - this.previousPointer.x;
    const dy = event.clientY - this.previousPointer.y;
    if (Math.hypot(dx, dy) > 2) {
      this.dragStarted = true;
      this.cancelLongPress();
      if (this.isBoxSelecting) {
        this.updateSelectionBox(event.clientX, event.clientY);
        this.previousPointer.set(event.clientX, event.clientY);
        return;
      }
      this.stopFollowingFlagship();
      this.camera.position.x -= dx * 2.2;
      this.camera.position.z -= dy * 2.2;
      this.clampCamera();
    }
    this.previousPointer.set(event.clientX, event.clientY);
  }

  private onPointerUp(event: PointerEvent): void {
    if (!this.isBattleStarted) return;
    this.isDragging = false;
    this.cancelLongPress();
    this.canvas.releasePointerCapture(event.pointerId);
    if (this.longPressHandled) {
      this.longPressHandled = false;
      return;
    }
    if (this.isBoxSelecting) {
      this.finishBoxSelection(event.clientX, event.clientY);
      this.isBoxSelecting = false;
      this.boxSelectArmed = false;
      this.commandTray.classList.remove("is-box-armed");
      this.selectionBox.classList.remove("is-visible");
      return;
    }
    if (!this.dragStarted) {
      this.handleTap(event.clientX, event.clientY);
    }
  }

  private onTouchMove(event: TouchEvent): void {
    if (event.touches.length !== 2 || !this.isBattleStarted) return;
    event.preventDefault();
    const [a, b] = Array.from(event.touches);
    const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    if (this.pinchDistance) {
      this.zoom(distance > this.pinchDistance ? 0.97 : 1.03);
    }
    this.pinchDistance = distance;
  }

  private onMinimapPointer(event: PointerEvent): void {
    if (!this.isBattleStarted || this.battleEnded) return;
    event.preventDefault();
    event.stopPropagation();
    const rect = this.minimapCanvas.getBoundingClientRect();
    const xRatio = THREE.MathUtils.clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const zRatio = THREE.MathUtils.clamp((event.clientY - rect.top) / rect.height, 0, 1);
    this.camera.position.x = xRatio * WORLD_WIDTH;
    this.camera.position.z = zRatio * WORLD_HEIGHT + 360;
    this.stopFollowingFlagship();
    this.clampCamera();
    this.audio.play("move", 0.55);
    this.hudStatus.textContent = "Camera repositioned";
  }

  private scheduleLongPress(clientX: number, clientY: number): void {
    this.cancelLongPress();
    this.longPressTimer = window.setTimeout(() => {
      const ship = this.findShipAtScreen(clientX, clientY);
      if (!ship || ship.team !== ENEMY_TEAM || ship.shipClass !== "flagship" || ship.isDead) return;
      this.longPressHandled = true;
      this.isDragging = false;
      this.dragStarted = true;
      this.openSubsystemWheel(ship, clientX, clientY);
    }, 560);
  }

  private cancelLongPress(): void {
    if (this.longPressTimer !== undefined) {
      window.clearTimeout(this.longPressTimer);
      this.longPressTimer = undefined;
    }
  }

  private findShipAtScreen(clientX: number, clientY: number): FleetMesh | undefined {
    this.setPointerNdc(clientX, clientY);
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const hits = this.raycaster.intersectObjects(this.scene.children, true);
    const shipId = hits.map((hit) => hit.object.userData.shipId as string | undefined).find(Boolean);
    return this.ships.find((candidate) => candidate.id === shipId);
  }

  private openSubsystemWheel(ship: FleetMesh, clientX: number, clientY: number): void {
    const selected = this.getSelectedShips();
    if (selected.length === 0) {
      this.audio.play("error");
      this.announce("Select ships before subsystem targeting");
      return;
    }
    const subsystems = ship.subsystems.filter((subsystem) => !subsystem.isDestroyed);
    if (subsystems.length === 0) {
      this.audio.play("error");
      this.announce("Enemy flagship systems already destroyed");
      return;
    }

    this.subsystemWheel.innerHTML = `
      <div class="subsystem-wheel-core">Systems</div>
      ${subsystems
        .map((subsystem, index) => {
          const angle = (index / Math.max(1, subsystems.length)) * Math.PI * 2 - Math.PI / 2;
          const radius = 92;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return `<button type="button" data-subsystem-id="${subsystem.id}" style="--wheel-x: ${x}px; --wheel-y: ${y}px">${subsystem.name}</button>`;
        })
        .join("")}
    `;
    const rect = this.shell.getBoundingClientRect();
    this.subsystemWheel.style.left = `${THREE.MathUtils.clamp(clientX - rect.left, 136, rect.width - 136)}px`;
    this.subsystemWheel.style.top = `${THREE.MathUtils.clamp(clientY - rect.top, 136, rect.height - 136)}px`;
    this.subsystemWheel.classList.add("is-visible");
    this.audio.play("subsystem");
    this.hudStatus.textContent = "Choose subsystem";
  }

  private hideSubsystemWheel(): void {
    this.subsystemWheel.classList.remove("is-visible");
  }

  private handleTap(clientX: number, clientY: number): void {
    this.setPointerNdc(clientX, clientY);
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const shipHits = this.raycaster.intersectObjects(this.scene.children, true);
    const subsystemId = shipHits.map((hit) => hit.object.userData.subsystemId as string | undefined).find(Boolean);
    const subsystem = this.ships.flatMap((candidate) => candidate.subsystems).find((candidate) => candidate.id === subsystemId);
    const shipId = shipHits.map((hit) => hit.object.userData.shipId as string | undefined).find(Boolean);
    const ship = this.ships.find((candidate) => candidate.id === shipId);
    const selected = this.getSelectedShips();

    if (subsystem && subsystem.parent.team === ENEMY_TEAM && selected.length > 0 && !subsystem.isDestroyed) {
      this.issueAttackCommand(subsystem, selected);
      this.hudStatus.textContent = `Target: ${subsystem.name}`;
      this.announce(`Subsystem targeted: ${subsystem.name}`);
      this.completeObjective("subsystem");
      return;
    }

    if (ship?.team === PLAYER_TEAM && !ship.isDead) {
      if (this.isDoubleTapOnShipClass(ship.shipClass)) {
        this.selectVisibleShipClass(ship.shipClass);
        return;
      }
      this.selectShips([ship], `Selected: ${SHIP_VISUALS[ship.shipClass].label}`);
      return;
    }

    if (ship?.team === ENEMY_TEAM && selected.length > 0 && !ship.isDead) {
      this.issueAttackCommand(ship, selected);
      this.hudStatus.textContent = `Attack: ${SHIP_VISUALS[ship.shipClass].label}`;
      this.completeObjective("attack");
      return;
    }

    if (selected.length > 0) {
      const destination = new THREE.Vector3();
      this.raycaster.ray.intersectPlane(this.groundPlane, destination);
      this.issueMoveCommand(this.clampWorldPosition(destination), selected);
      this.hudStatus.textContent = `Move: ${selected.length} unit${selected.length === 1 ? "" : "s"}`;
    }
  }

  private selectShips(ships: FleetMesh[], statusText?: string): void {
    this.clearSelection();
    for (const ship of ships) {
      if (ship.team !== PLAYER_TEAM || ship.isDead) continue;
      this.selectedShips.add(ship);
      this.showSelectionRing(ship);
    }
    this.updateSelectedSummary();
    this.hudStatus.textContent = statusText ?? `Selected: ${this.selectedShips.size} unit${this.selectedShips.size === 1 ? "" : "s"}`;
    if (this.selectedShips.size > 0) {
      this.audio.play("select");
      this.completeObjective("select");
    }
  }

  private isDoubleTapOnShipClass(shipClass: ShipClass): boolean {
    const now = performance.now();
    const isDoubleTap = this.lastTapShipClass === shipClass && now - this.lastTapAt < 420;
    this.lastTapShipClass = shipClass;
    this.lastTapAt = now;
    return isDoubleTap;
  }

  private selectVisibleShipClass(shipClass: ShipClass): void {
    const ships = this.ships.filter(
      (ship) => ship.team === PLAYER_TEAM && !ship.isDead && ship.shipClass === shipClass && this.isWorldPositionVisible(ship.group.position),
    );
    this.selectShips(ships, `Selected visible ${SHIP_VISUALS[shipClass].label}: ${ships.length}`);
    this.announce(`Selected visible ${SHIP_VISUALS[shipClass].label}s`);
  }

  private isWorldPositionVisible(position: THREE.Vector3): boolean {
    const projected = position.clone().project(this.camera);
    return projected.z < 1 && projected.x >= -1 && projected.x <= 1 && projected.y >= -1 && projected.y <= 1;
  }

  private showSelectionRing(ship: FleetMesh): void {
    this.selectionRings.get(ship)?.removeFromParent();
    const visual = SHIP_VISUALS[ship.shipClass];
    const radius = Math.max(visual.width, visual.height) * 0.68;
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 96; i += 1) {
      const angle = (i / 96) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 3, Math.sin(angle) * radius));
    }
    const ring = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineBasicMaterial({ color: 0x72eaff, transparent: true, opacity: 0.9 }),
    );
    ring.position.copy(ship.group.position);
    ring.position.y = 0;
    this.selectionRings.set(ship, ring);
    this.scene.add(ring);
  }

  private clearSelection(): void {
    for (const ring of this.selectionRings.values()) {
      ring.removeFromParent();
    }
    this.selectionRings.clear();
    this.selectedShips.clear();
  }

  private getSelectedShips(): FleetMesh[] {
    return [...this.selectedShips].filter((ship) => !ship.isDead);
  }

  private updateSelectedSummary(): void {
    const selected = this.getSelectedShips();
    if (selected.length === 0) {
      this.selectedSummary.innerHTML = `<span class="selection-empty">No units selected</span>`;
      return;
    }

    const counts = selected.reduce<Record<string, number>>((summary, ship) => {
      const label = SHIP_VISUALS[ship.shipClass].label;
      summary[label] = (summary[label] ?? 0) + 1;
      return summary;
    }, {});

    const averageHull = Math.round(
      selected.reduce((total, ship) => total + (ship.hull / ship.maxHull) * 100, 0) / selected.length,
    );
    const averageShield = Math.round(
      selected.reduce((total, ship) => total + (ship.shield / ship.maxShield) * 100, 0) / selected.length,
    );
    const orders = selected.reduce<Record<string, number>>((summary, ship) => {
      const order = ship.currentOrder ?? (ship.target ? "attack" : ship.destination ? "move" : "idle");
      const label = order.charAt(0).toUpperCase() + order.slice(1);
      summary[label] = (summary[label] ?? 0) + 1;
      return summary;
    }, {});
    const composition = Object.entries(counts)
      .map(([label, count]) => `${count} ${label}`)
      .join(" | ");
    const orderSummary = Object.entries(orders)
      .map(([label, count]) => `${label} ${count}`)
      .join(" / ");

    this.selectedSummary.innerHTML = `
      <div class="selection-main">${composition}</div>
      <div class="selection-meta">
        <span>Hull ${averageHull}%</span>
        <span>Shield ${averageShield}%</span>
        <span>Orders ${orderSummary}</span>
      </div>
    `;
  }

  private selectGroup(group: string): void {
    const selectors: Record<string, (ship: FleetMesh) => boolean> = {
      all: (ship) => ship.team === PLAYER_TEAM,
      capital: (ship) => ship.team === PLAYER_TEAM && ["flagship", "heavyCapital"].includes(ship.shipClass),
      cruiser: (ship) => ship.team === PLAYER_TEAM && ship.shipClass === "cruiser",
      strike: (ship) => ship.team === PLAYER_TEAM && ["fighter", "bomber"].includes(ship.shipClass),
    };
    const predicate = selectors[group];
    if (!predicate) return;
    this.selectShips(this.ships.filter((ship) => predicate(ship) && !ship.isDead));
  }

  private targetNextEnemySubsystem(): void {
    const selected = this.getSelectedShips();
    if (selected.length === 0) {
      this.hudStatus.textContent = "Select ships first";
      this.announce("Select ships before subsystem targeting");
      this.audio.play("error");
      return;
    }

    const enemyFlagship = this.getFlagship(ENEMY_TEAM);
    if (!enemyFlagship) {
      this.hudStatus.textContent = "No enemy flagship";
      return;
    }

    const priority: SubsystemType[] = ["shield", "pointDefense", "hangar", "mainCannon", "engine", "sensors", "repair", "bridge"];
    const subsystem = priority
      .map((type) => enemyFlagship.subsystems.find((candidate) => candidate.type === type && !candidate.isDestroyed))
      .find((candidate): candidate is Subsystem => Boolean(candidate));

    if (!subsystem) {
      this.hudStatus.textContent = "All systems destroyed";
      this.announce("Enemy flagship systems already destroyed");
      this.audio.play("error");
      return;
    }

    this.issueAttackCommand(subsystem, selected);
    this.hudStatus.textContent = `Target: ${subsystem.name}`;
    this.announce(`Subsystem targeted: ${subsystem.name}`);
    this.completeObjective("subsystem");
  }

  private issueMoveCommand(destination: THREE.Vector3, ships: FleetMesh[], order?: FleetMesh["currentOrder"]): void {
    this.clearCommandMarkers();
    this.audio.play("move");
    this.completeObjective("move");
    const safeDestination = this.clampWorldPosition(destination);
    const spacing = 44;
    const columns = Math.ceil(Math.sqrt(ships.length));
    ships.forEach((ship, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns);
      const offset = new THREE.Vector3(
        (column - (columns - 1) / 2) * spacing,
        0,
        (row - Math.floor((ships.length - 1) / columns) / 2) * spacing,
      );
      ship.destination = this.clampWorldPosition(safeDestination.clone().add(offset));
      ship.target = undefined;
      ship.currentOrder = order;
      this.createCommandMarker(ship.destination, 0x72eaff);
    });
    this.updateSelectedSummary();
  }

  private issueAttackCommand(target: Targetable, ships: FleetMesh[]): void {
    this.clearCommandMarkers();
    this.audio.play(this.isSubsystem(target) ? "subsystem" : "attack");
    this.completeObjective(this.isSubsystem(target) ? "subsystem" : "attack");
    const targetPosition = this.getTargetPosition(target);
    ships.forEach((ship, index) => {
      ship.target = target;
      ship.currentOrder = "attack";
      const angle = (index / Math.max(1, ships.length)) * Math.PI * 2;
      const radius = ship.attackRange * 0.72;
      ship.destination = this.clampWorldPosition(
        targetPosition
          .clone()
          .add(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)),
      );
      this.createCommandLine(ship.group.position, targetPosition, 0xffd36c);
    });
    this.createAttackReticle(target);
    this.updateSelectedSummary();
  }

  private guardFlagship(): void {
    const selected = this.getSelectedShips();
    const flagship = this.getFlagship(PLAYER_TEAM);
    if (selected.length === 0 || !flagship) {
      this.audio.play("error");
      this.announce(selected.length === 0 ? "Select ships before guard order" : "No flagship to guard");
      return;
    }

    this.clearCommandMarkers();
    selected.forEach((ship, index) => {
      const angle = (index / Math.max(1, selected.length)) * Math.PI * 2;
      const radius = flagship === ship ? 0 : 190;
      ship.currentOrder = "hold";
      ship.target = undefined;
      ship.destination = this.clampWorldPosition(flagship.group.position.clone().add(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)));
      this.createCommandMarker(ship.destination, 0x8ef2a1);
    });
    this.audio.play("move");
    this.hudStatus.textContent = "Guard flagship";
    this.announce(`Guard order assigned to ${selected.length} ship${selected.length === 1 ? "" : "s"}`);
    this.updateSelectedSummary();
  }

  private retreatSelectedShips(): void {
    const selected = this.getSelectedShips();
    if (selected.length === 0) {
      this.audio.play("error");
      this.announce("Select ships before retreat order");
      return;
    }

    const repairBeacon = this.objectiveNodes
      .filter((node) => node.kind === "repair" && node.owner === PLAYER_TEAM)
      .sort((a, b) => a.position.distanceTo(selected[0].group.position) - b.position.distanceTo(selected[0].group.position))[0];
    const fallback = repairBeacon?.position ?? this.getFlagship(PLAYER_TEAM)?.group.position;
    if (!fallback) {
      this.audio.play("error");
      this.announce("No retreat point available");
      return;
    }

    this.issueMoveCommand(fallback, selected, "repair");
    this.hudStatus.textContent = repairBeacon ? "Retreat to repair beacon" : "Retreat to flagship";
    this.announce(`Retreat order assigned to ${selected.length} ship${selected.length === 1 ? "" : "s"}`);
  }

  private activateHullProtectMode(): void {
    const protectedShips = this.getSelectedShips().filter((ship) => ship.subsystems.length > 0 && !ship.isDead);
    if (protectedShips.length === 0) {
      this.audio.play("error");
      this.announce("Select a capital ship for Hull Protect");
      return;
    }

    for (const ship of protectedShips) {
      ship.hullProtectUntil = this.battleElapsed + 16;
      ship.currentOrder = "hold";
      this.recalculateSubsystemStats(ship);
      this.createAbilityPulse(ship.group.position, 0x65eaff, 92);
      this.createFloatingText(ship.group.position.clone().add(new THREE.Vector3(0, 76, 0)), "hull protect", "shield");
    }
    this.audio.play("toggle");
    this.hudStatus.textContent = "Hull Protect active";
    this.announce(`Hull Protect active on ${protectedShips.length} ship${protectedShips.length === 1 ? "" : "s"}`);
  }

  private createCommandMarker(position: THREE.Vector3, color: number): void {
    const marker = this.createRing(position.x, position.z, 22, color, 0.9);
    marker.position.y = 5;
    this.scene.add(marker);
    this.commandMarkers.push(marker);
  }

  private createCommandLine(from: THREE.Vector3, to: THREE.Vector3, color: number): void {
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(from.x, 6, from.z),
        new THREE.Vector3(to.x, 6, to.z),
      ]),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.65 }),
    );
    this.scene.add(line);
    this.commandMarkers.push(line);
  }

  private createAttackReticle(target: Targetable): void {
    const targetPosition = this.getTargetPosition(target);
    const reticle = this.createRing(targetPosition.x, targetPosition.z, 86, 0xffd36c, 0.9);
    reticle.position.y = 8;
    this.scene.add(reticle);
    this.commandMarkers.push(reticle);
  }

  private clearCommandMarkers(): void {
    for (const marker of this.commandMarkers) {
      marker.removeFromParent();
    }
    this.commandMarkers.length = 0;
  }

  private updateSelectionBox(clientX: number, clientY: number): void {
    const left = Math.min(this.dragStartPointer.x, clientX);
    const top = Math.min(this.dragStartPointer.y, clientY);
    const width = Math.abs(clientX - this.dragStartPointer.x);
    const height = Math.abs(clientY - this.dragStartPointer.y);
    this.selectionBox.style.left = `${left}px`;
    this.selectionBox.style.top = `${top}px`;
    this.selectionBox.style.width = `${width}px`;
    this.selectionBox.style.height = `${height}px`;
  }

  private finishBoxSelection(clientX: number, clientY: number): void {
    const rect = this.canvas.getBoundingClientRect();
    const left = Math.min(this.dragStartPointer.x, clientX) - rect.left;
    const right = Math.max(this.dragStartPointer.x, clientX) - rect.left;
    const top = Math.min(this.dragStartPointer.y, clientY) - rect.top;
    const bottom = Math.max(this.dragStartPointer.y, clientY) - rect.top;

    const selected = this.ships.filter((ship) => {
      if (ship.team !== PLAYER_TEAM || ship.isDead) return false;
      const screenPosition = this.worldToScreen(ship.group.position);
      return screenPosition.x >= left && screenPosition.x <= right && screenPosition.y >= top && screenPosition.y <= bottom;
    });

    this.selectShips(selected, selected.length > 0 ? `Box selected: ${selected.length}` : "No units in box");
  }

  private worldToScreen(position: THREE.Vector3): THREE.Vector2 {
    const rect = this.canvas.getBoundingClientRect();
    const projected = position.clone().project(this.camera);
    return new THREE.Vector2(
      (projected.x * 0.5 + 0.5) * rect.width,
      (-projected.y * 0.5 + 0.5) * rect.height,
    );
  }

  private setPointerNdc(clientX: number, clientY: number): void {
    const rect = this.canvas.getBoundingClientRect();
    this.pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointerNdc.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
  }

  private animate = (): void => {
    this.animationId = window.requestAnimationFrame(this.animate);
    const delta = this.clock.getDelta();
    this.updateFps(delta);
    if (this.isBattleStarted && !this.battleEnded && !this.isStoreOpen && !this.isPaused) {
      this.battleElapsed += delta;
      this.updateShips(delta);
      this.updateAI(delta);
      this.updateHullProtectModes();
      this.updateHangarLaunches(delta);
      this.updateCombat(delta);
      this.updateSquadronSupport(delta);
      this.updateProjectiles(delta);
      this.updateSubsystemRepairs(delta);
      this.updateEconomy(delta);
      this.updateSurvival(delta);
      this.updateNebulaHint(delta);
      this.updateDamageMarkers();
      this.updateSubsystemDisables();
      this.updateFlagshipPanel();
      this.updateFollowCamera(delta);
    }
    this.updateLabels();
    this.drawMinimap();
    const shakeOffset = this.getCameraShakeOffset(delta);
    this.camera.position.add(shakeOffset);
    this.renderer.render(this.scene, this.camera);
    this.camera.position.sub(shakeOffset);
  };

  private updateShips(delta: number): void {
    for (const ship of this.ships) {
      if (ship.isDead) continue;
      if (!ship.destination) continue;
      const target = ship.destination.clone();
      target.y = ship.group.position.y;
      const offset = target.sub(ship.group.position);
      const distance = offset.length();
      if (distance < 8) {
        ship.destination = undefined;
        continue;
      }
      const direction = offset.normalize();
      ship.group.position.addScaledVector(direction, Math.min(distance, ship.speed * delta));
      ship.group.position.copy(this.clampWorldPosition(ship.group.position));
      ship.group.rotation.y = Math.atan2(-direction.z, direction.x);
      const ring = this.selectionRings.get(ship);
      if (ring) {
        ring.position.set(ship.group.position.x, 0, ship.group.position.z);
      }
    }
  }

  private updateAI(delta: number): void {
    this.aiTimer += delta;
    if (this.aiTimer < 3.4) {
      return;
    }
    this.aiTimer = 0;

    const enemyFlagship = this.getFlagship(ENEMY_TEAM);
    const playerFlagship = this.getFlagship(PLAYER_TEAM);
    if (!enemyFlagship || !playerFlagship) {
      return;
    }

    const damagedEnemy = this.ships.find(
      (ship) => ship.team === ENEMY_TEAM && !ship.isDead && ship.shipClass !== "flagship" && ship.hull / ship.maxHull < 0.34,
    );

    if (playerFlagship.hull / playerFlagship.maxHull < 0.38 || this.battleElapsed > 85) {
      this.setAIState("Final Assault");
      this.commandEnemyAttack(playerFlagship, this.getEnemyShips());
      return;
    }

    if (shouldUseEmergencyAbility(enemyFlagship, this.enemyEmergencyUsed)) {
      this.useEnemyEmergencyAbility(enemyFlagship, playerFlagship);
      return;
    }

    if (enemyFlagship.hull / enemyFlagship.maxHull < 0.5 || this.playerPressureNear(enemyFlagship)) {
      this.setAIState("Defend Flagship");
      this.commandEnemyAttack(this.findNearestPlayer(enemyFlagship) ?? playerFlagship, this.getEnemyShips());
      return;
    }

    if (this.commandEnemyFightersAgainstBombers(enemyFlagship)) {
      this.setAIState("Intercept Bombers");
      return;
    }

    if (damagedEnemy) {
      const repair = this.findClosestObjective(damagedEnemy.group.position, "repair");
      if (repair) {
        this.setAIState("Retreat and Repair");
        this.commandEnemyMove(damagedEnemy, repair.position, "repair");
        return;
      }
    }

    if (this.battleElapsed < 20) {
      this.setAIState("Opening");
      this.sendEnemyCapturers();
      return;
    }

    const enemyOwnedNodes = this.objectiveNodes.filter((node) => node.kind === "salvage" && node.owner === ENEMY_TEAM).length;
    if (enemyOwnedNodes < 2 && this.battleElapsed < 55) {
      this.setAIState("Resource Control");
      this.sendEnemyCapturers();
      return;
    }

    this.setAIState("Bomber Strike");
    const bombers = this.getEnemyShips().filter((ship) => ship.shipClass === "bomber" || ship.shipClass === "fighter");
    const escorts = this.getEnemyShips().filter((ship) => ship.shipClass === "cruiser");
    this.commandEnemyAttack(playerFlagship, [...bombers, ...escorts]);
  }

  private updateSurvival(delta: number): void {
    if (this.battleMode !== "survival" || this.survivalWave >= this.survivalMaxWaves) {
      return;
    }

    this.survivalTimer += delta;
    this.survivalNextWaveIn = Math.max(0, this.survivalNextWaveIn - delta);
    if (this.survivalNextWaveIn > 0) {
      return;
    }

    this.spawnSurvivalWave();
    this.survivalNextWaveIn = Math.max(18, 34 - this.survivalWave * 2);
    this.updateResourcePanel();
  }

  private spawnSurvivalWave(): void {
    const playerFlagship = this.getFlagship(PLAYER_TEAM);
    if (!playerFlagship) return;

    this.survivalWave += 1;
    const composition = getSurvivalWaveComposition(this.survivalWave);
    this.salvage += composition.salvageReward;
    this.commandPoints += 2;

    composition.ships.forEach((shipClass, index) => {
      const lane = index - (composition.ships.length - 1) / 2;
      const spawnZ = THREE.MathUtils.clamp(playerFlagship.group.position.z + lane * 110, 360, WORLD_HEIGHT - 280);
      const spawnX = WORLD_WIDTH - 120 + (index % 2) * 80;
      const ship = this.spawnEnemyReinforcement(shipClass, spawnX, spawnZ);
      ship.target = playerFlagship;
      ship.currentOrder = "attack";
      ship.destination = this.clampWorldPosition(playerFlagship.group.position.clone().add(new THREE.Vector3(260 + index * 18, 0, lane * 70)));
    });

    this.createAbilityPulse(new THREE.Vector3(WORLD_WIDTH - 120, 0, playerFlagship.group.position.z), 0xff704b, 170);
    this.audio.play("start");
    this.hudStatus.textContent = `Wave ${this.survivalWave}/${this.survivalMaxWaves}`;
    this.announce(`Survival wave ${this.survivalWave}: ${composition.ships.length} contacts inbound`);
  }

  private updateHangarLaunches(delta: number): void {
    for (const ship of this.ships) {
      if (ship.isDead) continue;
      const cap = this.getHangarSquadronCap(ship);
      if (cap <= 0) continue;

      ship.hangarLaunchCooldown = Math.max(0, ship.hangarLaunchCooldown - delta);
      const activeSquadrons = this.getActiveSquadronCount(ship);
      if (activeSquadrons >= cap || ship.hangarLaunchCooldown > 0) continue;

      const sequence: SquadronType[] = ["fighter", "fighter", "bomber", "scout", "drone"];
      this.launchHangarSquadron(ship, sequence[ship.hangarLaunchIndex % sequence.length]);
    }
  }

  private getHangarSquadronCap(ship: FleetMesh): number {
    const hangar = ship.subsystems.find((subsystem) => subsystem.type === "hangar");
    if (!hangar || hangar.isDestroyed) return 0;
    if (ship.shipClass === "flagship") return 3;
    if (ship.shipClass === "heavyCapital") return 4;
    return 0;
  }

  private getActiveSquadronCount(ship: FleetMesh): number {
    return this.ships.filter((candidate) => candidate.launchedBy === ship.id && !candidate.isDead).length;
  }

  private getHangarStatusText(ship: FleetMesh): string {
    const hasHangar = ship.subsystems.some((subsystem) => subsystem.type === "hangar");
    if (!hasHangar) return "";
    const cap = this.getHangarSquadronCap(ship);
    const active = this.getActiveSquadronCount(ship);
    if (cap <= 0) return "Hangar offline";
    if (active >= cap) return `Squadrons ${active}/${cap}`;
    return `Squadrons ${active}/${cap} | Launch ${Math.ceil(ship.hangarLaunchCooldown)}s`;
  }

  private manualLaunchSquadron(type: SquadronType): void {
    const parent = this.getSelectedShips().find((ship) => this.getHangarSquadronCap(ship) > 0);
    if (!parent) {
      this.audio.play("error");
      this.announce("Select a ship with an active hangar");
      return;
    }
    const activeSquadrons = this.getActiveSquadronCount(parent);
    if (activeSquadrons >= this.getHangarSquadronCap(parent)) {
      this.audio.play("error");
      this.announce("Squadron cap reached");
      return;
    }
    if (parent.hangarLaunchCooldown > 0) {
      this.audio.play("error");
      this.announce(`Hangar launch ready in ${Math.ceil(parent.hangarLaunchCooldown)}s`);
      return;
    }
    this.launchHangarSquadron(parent, type);
  }

  private launchHangarSquadron(parent: FleetMesh, squadronType: SquadronType): void {
    const squadronClass: ShipClass = squadronType;
    const activeSquadrons = this.getActiveSquadronCount(parent);
    const launchOffset = new THREE.Vector3(
      parent.team === PLAYER_TEAM ? -96 : 96,
      0,
      (activeSquadrons - 1.5) * 44,
    );
    const launchPosition = this.clampWorldPosition(parent.group.position.clone().add(launchOffset));
    const index = parent.team === PLAYER_TEAM ? ++this.reinforcementIndex : ++this.enemyReinforcementIndex;
    this.createShip({
      id: `${parent.team}-hangar-${parent.id}-${index}`,
      team: parent.team,
      shipClass: squadronClass,
      x: launchPosition.x,
      y: launchPosition.z,
      rotation: parent.team === PLAYER_TEAM ? 0 : Math.PI,
      launchedBy: parent.id,
    });

    const squadron = this.ships[this.ships.length - 1];
    squadron.currentOrder = "attack";
    squadron.target = this.findNearestEnemy(squadron);
    if (squadron.target) {
      const targetPosition = this.getTargetPosition(squadron.target);
      const approach = targetPosition.clone().sub(squadron.group.position).normalize();
      squadron.destination = this.clampWorldPosition(targetPosition.clone().addScaledVector(approach, -squadron.attackRange * 0.76));
    }

    parent.hangarLaunchIndex += 1;
    parent.hangarLaunchCooldown = SQUADRONS[squadronType].launchCooldownMs / 1000;
    this.createAbilityPulse(parent.group.position, parent.team === PLAYER_TEAM ? 0x65eaff : 0xff704b, 86);
    if (parent.team === PLAYER_TEAM) {
      this.announce(`${SHIP_VISUALS[parent.shipClass].label} launched ${SHIP_VISUALS[squadronClass].label} squadron`);
    }
  }

  private spawnEnemyReinforcement(shipClass: ShipClass, x: number, z: number): FleetMesh {
    this.enemyReinforcementIndex += 1;
    this.createShip({
      id: `enemy-wave-${this.enemyReinforcementIndex}`,
      team: ENEMY_TEAM,
      shipClass,
      x,
      y: z,
      rotation: Math.PI,
    });
    return this.ships[this.ships.length - 1];
  }

  private setAIState(nextState: AIState): void {
    if (this.aiState === nextState) {
      return;
    }
    this.aiState = nextState;
    this.announce(`Enemy AI: ${nextState}`);
    this.updateResourcePanel();
  }

  private sendEnemyCapturers(): void {
    const salvageNodes = this.objectiveNodes.filter((node) => node.kind === "salvage");
    const enemyShips = this.getEnemyShips().filter((ship) => ["fighter", "bomber", "cruiser"].includes(ship.shipClass));

    enemyShips.forEach((ship, index) => {
      const node = salvageNodes[index % salvageNodes.length];
      this.commandEnemyMove(ship, node.position, "capture");
    });

    const capitalShips = this.getEnemyShips().filter((ship) => ship.shipClass === "flagship" || ship.shipClass === "heavyCapital");
    const guardPoint = new THREE.Vector3(2260, 0, 950);
    capitalShips.forEach((ship, index) => {
      this.commandEnemyMove(ship, guardPoint.clone().add(new THREE.Vector3(index * 90, 0, index % 2 === 0 ? -80 : 80)), "hold");
    });
  }

  private useEnemyEmergencyAbility(enemyFlagship: FleetMesh, playerFlagship: FleetMesh): void {
    this.enemyEmergencyUsed = true;
    this.setAIState("Defend Flagship");
    enemyFlagship.shield = Math.min(enemyFlagship.maxShield, enemyFlagship.shield + enemyFlagship.maxShield * 0.62);
    enemyFlagship.hull = Math.min(enemyFlagship.maxHull, enemyFlagship.hull + enemyFlagship.maxHull * 0.08);
    enemyFlagship.cooldownRemaining = Math.max(enemyFlagship.cooldownRemaining, 1.2);
    this.updateBars(enemyFlagship);
    this.createAbilityPulse(enemyFlagship.group.position, 0xff9b80, 180);
    this.createFloatingText(enemyFlagship.group.position.clone().add(new THREE.Vector3(0, 88, 0)), "+emergency shields", "shield");
    this.announce("Enemy flagship emergency shields online");
    this.audio.play("subsystem");

    const defenders = this.getEnemyShips().filter((ship) => ship !== enemyFlagship);
    defenders.forEach((ship, index) => {
      const angle = (index / Math.max(1, defenders.length)) * Math.PI * 2;
      ship.currentOrder = "hold";
      ship.target = this.findNearestPlayer(enemyFlagship) ?? playerFlagship;
      ship.destination = this.clampWorldPosition(
        enemyFlagship.group.position
          .clone()
          .add(new THREE.Vector3(Math.cos(angle) * 240, 0, Math.sin(angle) * 240)),
      );
    });
  }

  private commandEnemyFightersAgainstBombers(enemyFlagship: FleetMesh): boolean {
    const playerBombers = this.ships.filter((ship) => ship.team === PLAYER_TEAM && ship.shipClass === "bomber" && !ship.isDead);
    const enemyFighters = this.getEnemyShips().filter((ship) => ship.shipClass === "fighter");
    if (playerBombers.length === 0 || enemyFighters.length === 0) {
      return false;
    }

    const bombersThreateningCapital = playerBombers.filter(
      (bomber) => bomber.group.position.distanceTo(enemyFlagship.group.position) < 980 || bomber.target === enemyFlagship,
    );
    const targets = bombersThreateningCapital.length > 0 ? bombersThreateningCapital : playerBombers;

    enemyFighters.forEach((fighter, index) => {
      const target = targets
        .slice()
        .sort((a, b) => fighter.group.position.distanceTo(a.group.position) - fighter.group.position.distanceTo(b.group.position))[index % targets.length];
      fighter.currentOrder = "attack";
      fighter.target = target;
      const approach = target.group.position.clone().sub(fighter.group.position).normalize();
      fighter.destination = this.clampWorldPosition(target.group.position.clone().addScaledVector(approach, -fighter.attackRange * 0.58));
    });
    return true;
  }

  private commandEnemyMove(ship: FleetMesh, destination: THREE.Vector3, order: FleetMesh["currentOrder"]): void {
    if (ship.isDead) return;
    ship.currentOrder = order;
    ship.target = undefined;
    ship.destination = this.clampWorldPosition(destination);
    ship.destination.y = ship.group.position.y;
  }

  private commandEnemyAttack(target: FleetMesh, ships: FleetMesh[]): void {
    ships.forEach((ship, index) => {
      if (ship.isDead) return;
      ship.currentOrder = "attack";
      ship.target = target;
      const angle = (index / Math.max(1, ships.length)) * Math.PI * 2;
      ship.destination = this.clampWorldPosition(
        target.group.position
          .clone()
          .add(new THREE.Vector3(Math.cos(angle) * ship.attackRange * 0.65, 0, Math.sin(angle) * ship.attackRange * 0.65)),
      );
    });
  }

  private getTargetPosition(target: Targetable): THREE.Vector3 {
    if (this.isSubsystem(target)) {
      return target.mesh.getWorldPosition(new THREE.Vector3());
    }
    return target.group.position.clone();
  }

  private getTargetTeam(target: Targetable): Team {
    return this.isSubsystem(target) ? target.parent.team : target.team;
  }

  private isTargetDestroyed(target: Targetable): boolean {
    return this.isSubsystem(target) ? target.isDestroyed || target.parent.isDead : target.isDead;
  }

  private isSubsystem(target: Targetable): target is Subsystem {
    return "parent" in target;
  }

  private getEnemyShips(): FleetMesh[] {
    return this.ships.filter((ship) => ship.team === ENEMY_TEAM && !ship.isDead);
  }

  private getFlagship(team: Team): FleetMesh | undefined {
    return this.ships.find((ship) => ship.team === team && ship.shipClass === "flagship" && !ship.isDead);
  }

  private findNearestPlayer(ship: FleetMesh): FleetMesh | undefined {
    return this.findNearestShip(ship, PLAYER_TEAM);
  }

  private findNearestShip(source: FleetMesh, team: Team): FleetMesh | undefined {
    let closest: FleetMesh | undefined;
    let closestDistance = Number.POSITIVE_INFINITY;
    for (const candidate of this.ships) {
      if (candidate.isDead || candidate.team !== team) continue;
      const distance = source.group.position.distanceTo(candidate.group.position);
      if (distance < closestDistance) {
        closest = candidate;
        closestDistance = distance;
      }
    }
    return closest;
  }

  private findEnemyInRange(ship: FleetMesh): FleetMesh | undefined {
    return this.ships.find(
      (candidate) =>
        !candidate.isDead &&
        candidate.team !== ship.team &&
        ship.group.position.distanceTo(candidate.group.position) <= this.getEffectiveRange(ship),
    );
  }

  private findClosestObjective(position: THREE.Vector3, kind: ObjectiveNode["kind"]): ObjectiveNode | undefined {
    return this.objectiveNodes
      .filter((node) => node.kind === kind)
      .sort((a, b) => a.position.distanceTo(position) - b.position.distanceTo(position))[0];
  }

  private playerPressureNear(enemyFlagship: FleetMesh): boolean {
    return this.ships.some(
      (ship) =>
        ship.team === PLAYER_TEAM &&
        !ship.isDead &&
        ship.group.position.distanceTo(enemyFlagship.group.position) < 520,
    );
  }

  private isInsideNebula(position: THREE.Vector3): boolean {
    return this.nebulaZones.some((zone) => position.distanceTo(zone.position) <= zone.radius);
  }

  private isSubsystemDestroyed(ship: FleetMesh, type: SubsystemType): boolean {
    return ship.subsystems.some((subsystem) => subsystem.type === type && subsystem.isDestroyed);
  }

  private isSubsystemOffline(ship: FleetMesh, type: SubsystemType): boolean {
    return ship.subsystems.some((subsystem) => subsystem.type === type && (subsystem.isDestroyed || subsystem.disabledUntil > this.battleElapsed));
  }

  private getEffectiveRange(ship: FleetMesh): number {
    const sensorMultiplier = this.isSubsystemOffline(ship, "sensors") ? 0.72 : 1;
    const nebulaMultiplier = this.isInsideNebula(ship.group.position) ? 0.72 : 1;
    const scoutMultiplier = this.hasScoutSupport(ship) ? 1.12 : 1;
    return ship.attackRange * sensorMultiplier * nebulaMultiplier * scoutMultiplier;
  }

  private hasScoutSupport(ship: FleetMesh): boolean {
    return this.ships.some(
      (candidate) =>
        candidate.team === ship.team &&
        candidate.shipClass === "scout" &&
        !candidate.isDead &&
        candidate.group.position.distanceTo(ship.group.position) <= 420,
    );
  }

  private getEffectiveShieldRegen(ship: FleetMesh): number {
    const nebulaMultiplier = this.isInsideNebula(ship.group.position) ? 0.35 : 1;
    return ship.shieldRegen * nebulaMultiplier;
  }

  private recalculateSubsystemStats(ship: FleetMesh): void {
    const protectMultiplier = this.isHullProtectActive(ship) ? 0.65 : 1;
    ship.speed = ship.baseSpeed * (this.isSubsystemOffline(ship, "engine") ? 0.3 : 1) * protectMultiplier;
    ship.damage = ship.baseDamage * (this.isSubsystemOffline(ship, "mainCannon") ? 0.45 : 1) * (this.isHullProtectActive(ship) ? 0.5 : 1);
    ship.cooldown = ship.baseCooldown;
    if (this.isSubsystemOffline(ship, "mainCannon")) {
      ship.cooldown *= 1.45;
    }
    if (this.isSubsystemOffline(ship, "bridge")) {
      ship.cooldown *= 1.4;
    }
    ship.shieldRegen = ship.baseShieldRegen;
    if (this.isSubsystemOffline(ship, "shield")) {
      ship.shieldRegen = 0;
    } else if (this.isSubsystemOffline(ship, "repair")) {
      ship.shieldRegen *= 0.35;
    }
  }

  private isHullProtectActive(ship: FleetMesh): boolean {
    return ship.hullProtectUntil > this.battleElapsed;
  }

  private updateHullProtectModes(): void {
    for (const ship of this.ships) {
      if (ship.isDead || ship.hullProtectUntil <= 0 || ship.hullProtectUntil > this.battleElapsed) continue;
      ship.hullProtectUntil = 0;
      this.recalculateSubsystemStats(ship);
      this.createFloatingText(ship.group.position.clone().add(new THREE.Vector3(0, 68, 0)), "protect ended", "shield");
    }
  }

  private updateCombat(delta: number): void {
    for (const ship of this.ships) {
      if (ship.isDead) continue;

      ship.shield = Math.min(ship.maxShield, ship.shield + this.getEffectiveShieldRegen(ship) * delta);
      ship.cooldownRemaining = Math.max(0, ship.cooldownRemaining - delta);

      if (ship.team === ENEMY_TEAM && (ship.currentOrder === "capture" || ship.currentOrder === "repair" || ship.currentOrder === "hold")) {
        const closeThreat = this.findEnemyInRange(ship);
        if (!closeThreat) {
          continue;
        }
        ship.target = closeThreat;
      }

      if (!ship.target || this.isTargetDestroyed(ship.target) || this.getTargetTeam(ship.target) === ship.team) {
        ship.target = this.findNearestEnemy(ship);
      }

      if (!ship.target) continue;

      const targetPosition = this.getTargetPosition(ship.target);
      const distance = ship.group.position.distanceTo(targetPosition);
      const effectiveRange = this.getEffectiveRange(ship);
      if (distance > effectiveRange) {
        if (ship.team === ENEMY_TEAM && ship.currentOrder === "attack") {
          const approach = targetPosition.clone().sub(ship.group.position).normalize();
          ship.destination = this.clampWorldPosition(targetPosition.clone().addScaledVector(approach, -effectiveRange * 0.78));
        }
        continue;
      }

      ship.destination = undefined;
      ship.group.rotation.y = Math.atan2(
        -(targetPosition.z - ship.group.position.z),
        targetPosition.x - ship.group.position.x,
      );

      if (ship.cooldownRemaining <= 0) {
        this.fireProjectile(ship, ship.target);
        ship.cooldownRemaining = ship.cooldown;
      }
    }
    this.updateFlagshipPanel();
  }

  private updateSquadronSupport(delta: number): void {
    for (const drone of this.ships) {
      if (drone.isDead || drone.shipClass !== "drone") continue;
      const damagedAlly = this.ships
        .filter((ship) => ship.team === drone.team && !ship.isDead && ship !== drone && drone.group.position.distanceTo(ship.group.position) <= 180)
        .sort((a, b) => a.hull / a.maxHull - b.hull / b.maxHull)[0];
      if (!damagedAlly) continue;

      damagedAlly.hull = Math.min(damagedAlly.maxHull, damagedAlly.hull + 22 * delta);
      damagedAlly.shield = Math.min(damagedAlly.maxShield, damagedAlly.shield + 14 * delta);
      this.repairMostDamagedSubsystem(damagedAlly, 0.01 * delta);
      if (Math.random() < delta * 0.8) {
        this.createFloatingText(damagedAlly.group.position.clone().add(new THREE.Vector3(0, 54, 0)), "+drone", "repair");
      }
      this.updateBars(damagedAlly);
    }
  }

  private findNearestEnemy(ship: FleetMesh): FleetMesh | undefined {
    let closest: FleetMesh | undefined;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (const candidate of this.ships) {
      if (candidate.isDead || candidate.team === ship.team) continue;
      const distance = ship.group.position.distanceTo(candidate.group.position);
      const flagshipBias = candidate.shipClass === "flagship" ? 0.82 : 1;
      const score = distance * flagshipBias;
      if (score < closestDistance) {
        closest = candidate;
        closestDistance = score;
      }
    }

    return closest;
  }

  private fireProjectile(source: FleetMesh, target: Targetable): void {
    const maxProjectiles = this.lowQualityMode ? 70 : 120;
    if (this.projectiles.length >= maxProjectiles) {
      this.removeProjectile(0);
    }
    this.audio.play("attack", source.team === PLAYER_TEAM ? 0.75 : 0.42);
    const color = source.team === PLAYER_TEAM ? 0x65eaff : 0xff704b;
    const geometry =
      source.shipClass === "bomber"
        ? new THREE.SphereGeometry(6, 12, 8)
        : new THREE.CapsuleGeometry(3, 18, 4, 8);
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(source.group.position);
    mesh.position.y += 8;
    mesh.lookAt(this.getTargetPosition(target));
    this.scene.add(mesh);
    this.createMuzzleFlash(source.group.position, color);

    const trail = this.lowQualityMode
      ? undefined
      : new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([mesh.position.clone(), mesh.position.clone()]),
          new THREE.LineBasicMaterial({ color, transparent: true, opacity: source.shipClass === "bomber" ? 0.7 : 0.46 }),
        );
    if (trail) {
      this.scene.add(trail);
    }

    this.projectiles.push({
      mesh,
      trail,
      team: source.team,
      target,
      damage: source.damage,
      damageType: source.damageType,
      sourceShipClass: source.shipClass,
      speed: source.shipClass === "bomber" ? 260 : 520,
      previousPosition: mesh.position.clone(),
    });
  }

  private updateProjectiles(delta: number): void {
    for (let i = this.projectiles.length - 1; i >= 0; i -= 1) {
      const projectile = this.projectiles[i];

      if (this.isTargetDestroyed(projectile.target)) {
        this.removeProjectile(i);
        continue;
      }

      const targetPosition = this.getTargetPosition(projectile.target);
      targetPosition.y += 8;
      const offset = targetPosition.sub(projectile.mesh.position);
      const distance = offset.length();

      if (distance < 16) {
        this.applyDamage(projectile.target, projectile.damage, projectile.team, projectile.damageType, projectile.sourceShipClass);
        this.audio.play("impact", projectile.team === PLAYER_TEAM ? 0.75 : 0.5);
        this.createImpact(projectile.mesh.position, projectile.team);
        this.removeProjectile(i);
        continue;
      }

      projectile.previousPosition.copy(projectile.mesh.position);
      projectile.mesh.position.addScaledVector(offset.normalize(), Math.min(distance, projectile.speed * delta));
      projectile.mesh.lookAt(this.getTargetPosition(projectile.target));
      this.updateProjectileTrail(projectile);
    }
  }

  private updateEconomy(delta: number): void {
    this.economyTimer += delta;

    for (const node of this.objectiveNodes) {
      const nearbyPlayer = this.hasTeamInRadius(PLAYER_TEAM, node.position, node.radius);
      const nearbyEnemy = this.hasTeamInRadius(ENEMY_TEAM, node.position, node.radius);

      if (nearbyPlayer !== nearbyEnemy) {
        const previousOwner = node.owner;
        node.owner = nearbyPlayer ? PLAYER_TEAM : ENEMY_TEAM;
        this.updateObjectiveVisual(node);
        if (previousOwner !== node.owner) {
          this.announce(`${node.owner === PLAYER_TEAM ? "Player" : "Enemy"} captured ${node.kind === "salvage" ? "salvage node" : "repair beacon"}`);
          if (node.owner === PLAYER_TEAM) {
            this.battleStats.nodesCaptured += 1;
            this.completeObjective("capture");
          }
        }
      }

      if (node.kind === "repair" && node.owner) {
        this.repairShipsNear(node, delta);
      }
    }

    if (this.economyTimer >= 1) {
      const salvageNodes = this.objectiveNodes.filter((node) => node.kind === "salvage" && node.owner === PLAYER_TEAM).length;
      const salvageIncome = (4 + salvageNodes * 8) * this.salvageMultiplier;
      this.salvage += salvageIncome;
      this.commandPoints += 1;
      const playerFlagship = this.getFlagship(PLAYER_TEAM);
      if (playerFlagship && (salvageNodes > 0 || Math.floor(this.battleElapsed) % 5 === 0)) {
        this.createFloatingText(playerFlagship.group.position.clone().add(new THREE.Vector3(0, 72, 0)), `+${Math.floor(salvageIncome)} salvage`, "income");
      }
      this.economyTimer = 0;
      this.updateResourcePanel();
    }
  }

  private updateNebulaHint(delta: number): void {
    this.nebulaHintTimer = Math.max(0, this.nebulaHintTimer - delta);
    if (this.nebulaHintTimer > 0) return;
    const playerShipInNebula = this.ships.some((ship) => ship.team === PLAYER_TEAM && !ship.isDead && this.isInsideNebula(ship.group.position));
    if (!playerShipInNebula) return;
    this.nebulaHintTimer = 10;
    this.announce("Nebula interference: weapon range and shield regen reduced");
  }

  private hasTeamInRadius(team: Team, position: THREE.Vector3, radius: number): boolean {
    return this.ships.some(
      (ship) =>
        !ship.isDead &&
        ship.team === team &&
        ship.group.position.distanceTo(position) <= radius,
    );
  }

  private repairShipsNear(node: ObjectiveNode, delta: number): void {
    for (const ship of this.ships) {
      if (ship.isDead || ship.team !== node.owner) continue;
      if (ship.group.position.distanceTo(node.position) > node.radius) continue;
      ship.hull = Math.min(ship.maxHull, ship.hull + 34 * delta);
      ship.shield = Math.min(ship.maxShield, ship.shield + 24 * delta);
      if (Math.random() < delta * 0.7) {
        this.createFloatingText(ship.group.position.clone().add(new THREE.Vector3(0, 50, 0)), "+repair", "repair");
      }
      this.updateBars(ship);
    }
  }

  private updateObjectiveVisual(node: ObjectiveNode): void {
    const color = node.owner === PLAYER_TEAM ? 0x65eaff : node.owner === ENEMY_TEAM ? 0xff704b : node.kind === "repair" ? 0x8ef2a1 : 0xffd36c;
    (node.mesh.material as THREE.MeshStandardMaterial).color.setHex(color);
    (node.mesh.material as THREE.MeshStandardMaterial).emissive.setHex(color);
    (node.ring.material as THREE.LineBasicMaterial).color.setHex(color);
  }

  private updateResourcePanel(): void {
    const held = this.objectiveNodes.filter((node) => node.kind === "salvage" && node.owner === PLAYER_TEAM).length;
    const survivalStatus =
      this.battleMode === "survival"
        ? ` | Wave ${this.survivalWave}/${this.survivalMaxWaves}${this.survivalWave < this.survivalMaxWaves ? ` | Next ${Math.ceil(this.survivalNextWaveIn)}s` : " | Final wave"}`
        : "";
    this.resourcePanel.textContent = `Salvage ${Math.floor(this.salvage)} | Command ${Math.floor(this.commandPoints)} | Nodes ${held}/3 | AI ${this.aiState}${survivalStatus}`;
    this.updateAbilityButtons();
  }

  private updateFlagshipPanel(): void {
    const rows = [
      { label: "Player Flagship", ship: this.getFlagship(PLAYER_TEAM), tone: "player" },
      { label: "Enemy Flagship", ship: this.getFlagship(ENEMY_TEAM), tone: "enemy" },
    ];

    this.flagshipPanel.innerHTML = rows
      .map(({ label, ship, tone }) => {
        const hullPercent = ship ? Math.max(0, Math.round((ship.hull / ship.maxHull) * 100)) : 0;
        const shieldPercent = ship ? Math.max(0, Math.round((ship.shield / ship.maxShield) * 100)) : 0;
        const hangarStatus = ship ? this.getHangarStatusText(ship) : "";
        const subsystemChips = ship
          ? ship.subsystems
              .map((subsystem) => {
                const isDisabled = !subsystem.isDestroyed && subsystem.disabledUntil > this.battleElapsed;
                const status = subsystem.isDestroyed ? "Destroyed" : isDisabled ? "Disabled" : "Online";
                const className = subsystem.isDestroyed ? "is-destroyed" : isDisabled ? "is-disabled" : "";
                return `<span class="${className}" title="${subsystem.name}: ${status}" aria-label="${subsystem.name}: ${status}">${this.getSubsystemCode(subsystem.type)}</span>`;
              })
              .join("")
          : "";
        return `
          <div class="flagship-status is-${tone}">
            <div><strong>${label}</strong><span>${ship ? `${hullPercent}% hull` : "Destroyed"}</span></div>
            <span class="flagship-meter is-shield"><span style="width: ${shieldPercent}%"></span></span>
            <span class="flagship-meter is-hull"><span style="width: ${hullPercent}%"></span></span>
            <div class="flagship-subsystems">${subsystemChips}</div>
            ${hangarStatus ? `<div class="flagship-hangar">${hangarStatus}</div>` : ""}
          </div>
        `;
      })
      .join("");
  }

  private getSubsystemCode(type: SubsystemType): string {
    const codes: Record<SubsystemType, string> = {
      shield: "SH",
      engine: "EN",
      mainCannon: "MC",
      hangar: "HG",
      repair: "RP",
      bridge: "CC",
      pointDefense: "PD",
      sensors: "SN",
    };
    return codes[type];
  }

  private updateAbilityButtons(): void {
    this.abilityPanel.querySelectorAll<HTMLButtonElement>("[data-ability]").forEach((button) => {
      const ability = COMMAND_ABILITIES[button.dataset.ability ?? ""];
      const canAfford = Boolean(ability && this.commandPoints >= ability.cost);
      const status = button.querySelector<HTMLElement>("[data-ability-status]");
      button.disabled = !this.isBattleStarted || this.battleEnded || this.isStoreOpen || this.isPaused || !ability || !canAfford;
      button.classList.toggle("is-affordable", this.isBattleStarted && !this.battleEnded && !this.isStoreOpen && !this.isPaused && canAfford);
      button.classList.toggle("is-locked", Boolean(ability && !canAfford));
      if (status && ability) {
        status.textContent = canAfford ? "Ready" : `Need ${ability.cost}`;
      }
      if (this.isPaused && status) status.textContent = "Paused";
      if (this.isStoreOpen && status) status.textContent = "Store";
      if (this.battleEnded && status) status.textContent = "Ended";
      button.title = ability ? `${ability.description} ${canAfford ? "Ready." : `Needs ${ability.cost} command.`}` : "";
    });
  }

  private completeObjective(id: BattleObjectiveId): void {
    if (!this.isTutorialMode) return;
    if (this.completedObjectives.has(id)) return;
    this.completedObjectives.add(id);
    this.updateObjectiveProgress();
  }

  private updateObjectiveProgress(): void {
    this.objectivePanel.querySelectorAll<HTMLElement>("[data-objective]").forEach((item) => {
      const objectiveId = item.dataset.objective as BattleObjectiveId;
      item.classList.remove("is-current");
      item.classList.toggle("is-complete", this.completedObjectives.has(objectiveId));
    });

    const nextObjective = BATTLE_OBJECTIVES.find((objective) => !this.completedObjectives.has(objective.id));
    this.objectivePanel.classList.toggle("is-complete", !nextObjective && this.isTutorialMode);
    if (nextObjective && this.isTutorialMode) {
      this.objectivePanel.querySelector(`[data-objective="${nextObjective.id}"]`)?.classList.add("is-current");
    }
  }

  private useAbility(ability: string): void {
    if (ability === "repair") {
      this.useRepairPulse();
    } else if (ability === "emp") {
      this.useEmpBurst();
    } else if (ability === "barrage") {
      this.useBarrage();
    }
    this.updateAbilityButtons();
  }

  private spendCommand(cost: number): boolean {
    if (this.commandPoints < cost) {
      this.audio.play("error");
      this.announce("Not enough command points");
      return false;
    }
    this.commandPoints -= cost;
    this.updateResourcePanel();
    return true;
  }

  private useRepairPulse(): void {
    const targets = this.getSelectedShips().length > 0 ? this.getSelectedShips() : this.getFlagship(PLAYER_TEAM) ? [this.getFlagship(PLAYER_TEAM) as FleetMesh] : [];
    if (targets.length === 0 || !this.spendCommand(3)) return;
    this.battleStats.abilitiesUsed += 1;
    this.completeObjective("ability");

    for (const ship of targets) {
      ship.hull = Math.min(ship.maxHull, ship.hull + ship.maxHull * 0.18);
      ship.shield = Math.min(ship.maxShield, ship.shield + ship.maxShield * 0.28);
      const patchedSubsystem = this.repairMostDamagedSubsystem(ship, 0.22);
      this.updateBars(ship);
      this.createAbilityPulse(ship.group.position, 0x8ef2a1, 78);
      this.createFloatingText(ship.group.position.clone().add(new THREE.Vector3(0, 72, 0)), patchedSubsystem ? "+repair +system" : "+repair", "repair");
    }
    this.audio.play("purchase");
    this.hudStatus.textContent = "Repair pulse fired";
    this.announce(`Repair pulse restored ${targets.length} ship${targets.length === 1 ? "" : "s"}`);
  }

  private repairMostDamagedSubsystem(ship: FleetMesh, portion: number): boolean {
    if (!ship.subsystems.length) return false;
    const repairSystem = ship.subsystems.find((subsystem) => subsystem.type === "repair");
    if (repairSystem?.isDestroyed) return false;

    const target = ship.subsystems
      .filter((subsystem) => subsystem.health < subsystem.maxHealth)
      .sort((a, b) => {
        if (a.isDestroyed !== b.isDestroyed) return a.isDestroyed ? -1 : 1;
        return b.maxHealth - b.health - (a.maxHealth - a.health);
      })[0];
    if (!target) return false;

    const wasDestroyed = target.isDestroyed;
    target.health = Math.min(target.maxHealth, target.health + target.maxHealth * portion);
    target.lastDamagedAt = Math.max(0, this.battleElapsed - 12);
    target.healthBar.style.width = `${Math.max(0, (target.health / target.maxHealth) * 100)}%`;

    if (wasDestroyed && target.health >= target.maxHealth * 0.25) {
      this.restoreSubsystem(target);
    } else {
      this.updateFlagshipPanel();
    }
    return true;
  }

  private useEmpBurst(): void {
    const center = this.getAbilityCenter();
    if (!center || !this.spendCommand(4)) return;
    this.battleStats.abilitiesUsed += 1;
    this.completeObjective("ability");
    this.activateEmpBurst(center);
  }

  private activateEmpBurst(center: THREE.Vector3): void {
    let affected = 0;
    let suppressed = 0;
    for (const ship of this.ships) {
      if (ship.isDead || ship.team !== ENEMY_TEAM || ship.group.position.distanceTo(center) > 520) continue;
      ship.shield = Math.max(0, ship.shield - ship.maxShield * 0.55);
      ship.cooldownRemaining += 1.4;
      suppressed += this.disableSubsystems(ship, ["pointDefense", "mainCannon", "sensors"], 7);
      this.updateBars(ship);
      this.createShieldRipple(ship.group.position, ship.team);
      affected += 1;
    }

    this.createAbilityPulse(center, 0x65eaff, 190);
    this.audio.play(affected > 0 ? "subsystem" : "error");
    this.hudStatus.textContent = "EMP burst fired";
    this.announce(affected > 0 ? `EMP disrupted ${affected} ship${affected === 1 ? "" : "s"} | ${suppressed} systems suppressed` : "EMP found no enemy ships");
  }

  private disableSubsystems(ship: FleetMesh, types: SubsystemType[], duration: number): number {
    let disabled = 0;
    for (const subsystem of ship.subsystems) {
      if (subsystem.isDestroyed || !types.includes(subsystem.type)) continue;
      subsystem.disabledUntil = Math.max(subsystem.disabledUntil, this.battleElapsed + duration);
      subsystem.label.classList.add("is-disabled");
      disabled += 1;
    }
    if (disabled > 0) {
      this.recalculateSubsystemStats(ship);
      this.updateFlagshipPanel();
    }
    return disabled;
  }

  private useBarrage(): void {
    const target = this.findBarrageTarget();
    if (!target || !this.spendCommand(6)) return;
    this.battleStats.abilitiesUsed += 1;
    this.completeObjective("ability");

    this.activateBarrage(target);
  }

  private activateBarrage(target: Targetable): void {
    if (this.isSubsystem(target)) {
      this.applyDamage(target, 260, PLAYER_TEAM, "lance");
      this.createExplosion(this.getTargetPosition(target), "fighter");
      this.createAbilityPulse(this.getTargetPosition(target), 0xffd36c, 150);
      this.audio.play("explosion");
      this.hudStatus.textContent = "Precision barrage launched";
      this.announce(`Barrage struck ${target.name}`);
      return;
    }

    const center = target.group.position.clone();
    const targets = this.ships
      .filter((ship) => ship.team === ENEMY_TEAM && !ship.isDead && ship.group.position.distanceTo(center) <= 360)
      .sort((a, b) => a.group.position.distanceTo(center) - b.group.position.distanceTo(center))
      .slice(0, 3);

    for (const ship of targets) {
      this.applyDamage(ship, 180, PLAYER_TEAM);
      this.createExplosion(ship.group.position, ship.shipClass === "flagship" ? "cruiser" : "fighter");
    }
    this.createAbilityPulse(center, 0xffd36c, 210);
    this.audio.play("explosion");
    this.hudStatus.textContent = "Barrage launched";
    this.announce(`Barrage struck ${targets.length} enemy ship${targets.length === 1 ? "" : "s"}`);
  }

  private getAbilityCenter(): THREE.Vector3 | undefined {
    const selected = this.getSelectedShips();
    if (selected.length > 0) {
      const center = selected.reduce((sum, ship) => sum.add(ship.group.position), new THREE.Vector3());
      return center.multiplyScalar(1 / selected.length);
    }
    return this.getFlagship(PLAYER_TEAM)?.group.position.clone();
  }

  private findBarrageTarget(): Targetable | undefined {
    for (const ship of this.getSelectedShips()) {
      const selectedTarget = ship.target;
      if (!selectedTarget || this.getTargetTeam(selectedTarget) !== ENEMY_TEAM || this.isTargetDestroyed(selectedTarget)) {
        continue;
      }
      return selectedTarget;
    }
    const playerAnchor = this.getFlagship(PLAYER_TEAM) ?? this.ships.find((ship) => ship.team === PLAYER_TEAM && !ship.isDead);
    return this.getFlagship(ENEMY_TEAM) ?? (playerAnchor ? this.findNearestShip(playerAnchor, ENEMY_TEAM) : undefined);
  }

  private announce(message: string): void {
    this.announcementBanner.textContent = message;
    this.announcementBanner.classList.remove("is-visible");
    window.requestAnimationFrame(() => {
      this.announcementBanner.classList.add("is-visible");
      window.setTimeout(() => {
        this.announcementBanner.classList.remove("is-visible");
      }, 1800);
    });
  }

  private openStore(): void {
    this.audio.play("toggle");
    this.closeSettingsPanel();
    this.completeObjective("store");
    this.isStoreOpen = true;
    this.storeOverlay.classList.add("is-visible");
    this.hudStatus.textContent = "Store paused";
    this.updateAbilityButtons();
    this.updateStoreButtons();
  }

  private closeStore(): void {
    this.isStoreOpen = false;
    this.storeOverlay.classList.remove("is-visible");
    this.hudStatus.textContent = this.isPaused ? "Paused" : "Battle ready";
    this.updateAbilityButtons();
  }

  private purchaseStoreItem(item: string): void {
    const playerFlagship = this.ships.find((ship) => ship.id === "player-flagship" && !ship.isDead);
    if (!playerFlagship) return;

    if (item === "fighter" && this.spendSalvage(60)) {
      this.battleStats.storePurchases += 1;
      this.audio.play("purchase");
      this.spawnReinforcement("fighter", playerFlagship, -54);
      this.spawnReinforcement("fighter", playerFlagship, 54);
      this.hudStatus.textContent = "Interceptors deployed";
      this.announce("Interceptor pair deployed");
    } else if (item === "bomber" && this.spendSalvage(90)) {
      this.battleStats.storePurchases += 1;
      this.audio.play("purchase");
      this.spawnReinforcement("bomber", playerFlagship, 82);
      this.hudStatus.textContent = "Bomber deployed";
      this.announce("Strike bomber deployed");
    } else if (item === "cruiser" && this.spendSalvage(160)) {
      this.battleStats.storePurchases += 1;
      this.audio.play("purchase");
      this.spawnReinforcement("cruiser", playerFlagship, -120);
      this.hudStatus.textContent = "Cruiser called in";
      this.announce("Lance cruiser arrived");
    } else if (item === "repair" && this.spendSalvage(80)) {
      this.battleStats.storePurchases += 1;
      this.audio.play("purchase");
      playerFlagship.hull = Math.min(playerFlagship.maxHull, playerFlagship.hull + playerFlagship.maxHull * 0.28);
      this.updateBars(playerFlagship);
      this.createFloatingText(playerFlagship.group.position.clone().add(new THREE.Vector3(0, 72, 0)), "+hull", "repair");
      this.hudStatus.textContent = "Flagship repaired";
      this.announce("Flagship repair completed");
    } else if (item === "shield" && this.commandPoints >= 4) {
      this.battleStats.storePurchases += 1;
      this.audio.play("purchase");
      this.commandPoints -= 4;
      playerFlagship.shield = Math.min(playerFlagship.maxShield, playerFlagship.shield + playerFlagship.maxShield * 0.45);
      this.updateBars(playerFlagship);
      this.createFloatingText(playerFlagship.group.position.clone().add(new THREE.Vector3(0, 72, 0)), "+shield", "shield");
      this.hudStatus.textContent = "Emergency shields online";
      this.announce("Emergency shields online");
    } else if (item === "emp" && this.spendSalvage(130)) {
      this.battleStats.storePurchases += 1;
      this.battleStats.abilitiesUsed += 1;
      this.completeObjective("ability");
      this.audio.play("purchase");
      const center = this.getAbilityCenter();
      if (center) {
        this.activateEmpBurst(center);
      }
    } else if (item === "barrage") {
      const target = this.findBarrageTarget();
      if (!target || !this.spendSalvage(180)) {
        this.audio.play("error");
        this.announce(target ? "Not enough resources" : "No barrage target available");
      } else {
        this.battleStats.storePurchases += 1;
        this.battleStats.abilitiesUsed += 1;
        this.completeObjective("ability");
        this.audio.play("purchase");
        this.activateBarrage(target);
      }
    } else {
      this.audio.play("error");
      this.hudStatus.textContent = "Not enough resources";
      this.announce("Not enough resources");
    }

    this.updateResourcePanel();
    this.updateStoreButtons();
  }

  private spendSalvage(cost: number): boolean {
    if (this.salvage < cost) {
      return false;
    }
    this.salvage -= cost;
    return true;
  }

  private spawnReinforcement(shipClass: ShipClass, flagship: FleetMesh, offsetZ: number): void {
    this.reinforcementIndex += 1;
    this.createShip({
      id: `player-reinforcement-${this.reinforcementIndex}`,
      team: PLAYER_TEAM,
      shipClass,
      x: flagship.group.position.x - 120,
      y: flagship.group.position.z + offsetZ,
      rotation: 0,
    });
  }

  private updateStoreButtons(): void {
    const costs: Record<string, { salvage?: number; command?: number }> = {
      fighter: { salvage: 60 },
      bomber: { salvage: 90 },
      cruiser: { salvage: 160 },
      repair: { salvage: 80 },
      shield: { command: 4 },
      emp: { salvage: 130 },
      barrage: { salvage: 180 },
    };

    const wallet = this.storeOverlay.querySelector<HTMLElement>(".store-wallet");
    if (wallet) {
      wallet.innerHTML = `
        <span>Salvage ${Math.floor(this.salvage)}</span>
        <span>Command ${Math.floor(this.commandPoints)}</span>
      `;
    }

    this.storeOverlay.querySelectorAll<HTMLButtonElement>("[data-purchase]").forEach((button) => {
      const cost = costs[button.dataset.purchase ?? ""];
      const missingSalvage = cost?.salvage !== undefined ? Math.max(0, cost.salvage - Math.floor(this.salvage)) : 0;
      const missingCommand = cost?.command !== undefined ? Math.max(0, cost.command - Math.floor(this.commandPoints)) : 0;
      const isAffordable = Boolean(cost && missingSalvage === 0 && missingCommand === 0);
      const status = button.querySelector<HTMLElement>("[data-cost-status]");
      button.disabled = !isAffordable;
      button.classList.toggle("is-affordable", isAffordable);
      button.classList.toggle("is-locked", !isAffordable);
      if (status && cost) {
        if (isAffordable) {
          status.textContent = cost.salvage !== undefined ? `${cost.salvage} salvage` : `${cost.command ?? 0} command`;
        } else {
          status.textContent = missingSalvage > 0 ? `Need ${missingSalvage}` : `Need ${missingCommand}`;
        }
      }
    });
  }

  private applyDamage(target: Targetable, amount: number, sourceTeam: Team, damageType: DamageType = "laser", sourceShipClass?: ShipClass): void {
    if (this.isSubsystem(target)) {
      this.applySubsystemDamage(target, amount, sourceTeam, damageType, sourceShipClass);
      return;
    }

    const profile = getDamageProfile(damageType);
    const shieldDamage = Math.min(target.shield, amount * profile.shieldPortion);
    let hullDamage = Math.max(0, amount - shieldDamage) * profile.hullMultiplier;
    if (hullDamage > 0 && this.isSubsystemDestroyed(target, "bridge")) {
      hullDamage *= 1.25;
    }
    if (hullDamage > 0 && this.isHullProtectActive(target)) {
      hullDamage *= damageType === "torpedo" ? 0.5 : 0.65;
    }
    target.shield -= shieldDamage;
    target.hull -= hullDamage;
    this.updateBars(target);
    this.createFloatingText(
      target.group.position.clone().add(new THREE.Vector3(THREE.MathUtils.randFloatSpread(42), 58, THREE.MathUtils.randFloatSpread(42))),
      shieldDamage > hullDamage ? `-${Math.round(shieldDamage)} shield` : `-${Math.round(hullDamage)}`,
      shieldDamage > hullDamage ? "shield" : "damage",
    );
    if (shieldDamage > 0) {
      this.createShieldRipple(target.group.position, target.team);
    } else {
      this.createHullSpark(target.group.position, sourceTeam);
      this.addScreenShake(Math.min(9, Math.max(2.5, amount * 0.025)), 0.16);
    }

    if (target.hull <= 0) {
      this.destroyShip(target, sourceTeam);
    }
  }

  private applySubsystemDamage(target: Subsystem, amount: number, sourceTeam: Team, damageType: DamageType, sourceShipClass?: ShipClass): void {
    if (target.isDestroyed) return;
    const parent = target.parent;
    target.lastDamagedAt = this.battleElapsed;
    const profile = getDamageProfile(damageType);
    const shieldDamage = Math.min(parent.shield, amount * profile.shieldPortion);
    parent.shield -= shieldDamage;

    let subsystemDamage = Math.max(0, amount - shieldDamage) * profile.hullMultiplier;
    if (sourceShipClass === "bomber") {
      subsystemDamage *= target.type === "hangar" || target.type === "engine" ? 1.5 : 1.35;
      if (!this.isSubsystemOffline(parent, "pointDefense")) {
        subsystemDamage *= 0.68;
        if (Math.random() < 0.32) {
          this.createFloatingText(this.getTargetPosition(target).add(new THREE.Vector3(0, 48, 0)), "point defence", "shield");
        }
      }
    }
    if (this.isHullProtectActive(parent)) {
      if (damageType === "torpedo") {
        subsystemDamage *= 0.5;
      }
      if (target.type === "hangar" || target.type === "bridge") {
        subsystemDamage *= 0.75;
      } else if (target.type === "engine") {
        subsystemDamage *= 1.2;
      }
    }

    target.health -= subsystemDamage;
    target.healthBar.style.width = `${Math.max(0, (target.health / target.maxHealth) * 100)}%`;
    this.updateBars(parent);
    this.createFloatingText(
      this.getTargetPosition(target).add(new THREE.Vector3(0, 32, 0)),
      shieldDamage > subsystemDamage ? `-${Math.round(shieldDamage)} shield` : `-${Math.round(subsystemDamage)}`,
      shieldDamage > subsystemDamage ? "shield" : "damage",
    );
    if (shieldDamage > subsystemDamage) {
      this.createShieldRipple(parent.group.position, parent.team);
    } else {
      this.createHullSpark(this.getTargetPosition(target), sourceTeam);
    }
    if (target.health <= 0) {
      this.destroySubsystem(target);
    }
  }

  private destroySubsystem(subsystem: Subsystem): void {
    if (subsystem.isDestroyed) return;
    subsystem.isDestroyed = true;
    if (subsystem.parent.team === ENEMY_TEAM) {
      this.battleStats.subsystemsDestroyed += 1;
    }
    subsystem.health = 0;
    subsystem.healthBar.style.width = "0%";
    subsystem.mesh.visible = false;
    subsystem.label.classList.add("is-destroyed");
    this.addSubsystemDamageMarker(subsystem);
    this.updateFlagshipPanel();
    const parent = subsystem.parent;

    if (subsystem.type === "shield") {
      parent.shield = 0;
      this.announce(`${parent.team === ENEMY_TEAM ? "Enemy" : "Player"} shields offline`);
    } else if (subsystem.type === "engine") {
      this.announce(`${parent.team === ENEMY_TEAM ? "Enemy" : "Player"} engines crippled`);
    } else if (subsystem.type === "mainCannon") {
      this.announce(`${parent.team === ENEMY_TEAM ? "Enemy" : "Player"} main cannon disabled`);
    } else if (subsystem.type === "repair") {
      this.announce(`${parent.team === ENEMY_TEAM ? "Enemy" : "Player"} repair bay destroyed`);
    } else if (subsystem.type === "bridge") {
      parent.hull -= parent.maxHull * 0.16;
      this.updateBars(parent);
      this.announce(`${parent.team === ENEMY_TEAM ? "Enemy" : "Player"} command core breached`);
      if (parent.hull <= 0) {
        this.destroyShip(parent, subsystem.parent.team === PLAYER_TEAM ? ENEMY_TEAM : PLAYER_TEAM);
      }
    } else if (subsystem.type === "hangar") {
      this.applyHangarDamage(parent.team);
      this.announce(`${parent.team === ENEMY_TEAM ? "Enemy" : "Player"} hangar bay destroyed`);
    } else if (subsystem.type === "pointDefense") {
      this.announce(`${parent.team === ENEMY_TEAM ? "Enemy" : "Player"} point defence grid offline`);
    } else if (subsystem.type === "sensors") {
      this.announce(`${parent.team === ENEMY_TEAM ? "Enemy" : "Player"} sensor array blinded`);
    }

    this.recalculateSubsystemStats(parent);
    this.createExplosion(this.getTargetPosition(subsystem), "fighter");
  }

  private applyHangarDamage(team: Team): void {
    for (const ship of this.ships) {
      if (ship.team !== team || ship.isDead || !["fighter", "bomber"].includes(ship.shipClass)) continue;
      ship.cooldown *= 1.3;
      ship.cooldownRemaining = Math.max(ship.cooldownRemaining, ship.cooldown * 0.35);
      this.createFloatingText(ship.group.position.clone().add(new THREE.Vector3(0, 44, 0)), "hangar disrupted", "damage");
    }
  }

  private addSubsystemDamageMarker(subsystem: Subsystem): void {
    if (subsystem.damageMarker) return;
    const color = subsystem.parent.team === PLAYER_TEAM ? 0x65eaff : 0xff704b;
    const marker = new THREE.Group();
    marker.position.copy(subsystem.mesh.position);
    marker.position.y += 2;

    const scar = new THREE.Mesh(
      new THREE.BoxGeometry(22, 3, 13),
      new THREE.MeshStandardMaterial({
        color: 0x111820,
        roughness: 0.86,
        metalness: 0.18,
        emissive: 0x3c160f,
        emissiveIntensity: 0.34,
      }),
    );
    scar.rotation.y = subsystem.type === "engine" ? Math.PI / 2 : subsystem.type === "shield" || subsystem.type === "repair" ? -0.45 : 0.35;
    marker.add(scar);

    const ember = new THREE.Mesh(
      new THREE.SphereGeometry(5, 10, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.72 }),
    );
    ember.position.set(0, 5, 0);
    marker.add(ember);

    subsystem.parent.group.add(marker);
    subsystem.damageMarker = marker;
  }

  private updateDamageMarkers(): void {
    const pulse = 0.55 + Math.sin(this.battleElapsed * 7) * 0.18;
    for (const subsystem of this.ships.flatMap((ship) => ship.subsystems)) {
      if (!subsystem.damageMarker) continue;
      const ember = subsystem.damageMarker.children[1] as THREE.Mesh | undefined;
      if (!ember) continue;
      const material = ember.material as THREE.MeshBasicMaterial;
      material.opacity = pulse;
      ember.scale.setScalar(0.82 + pulse * 0.34);
    }
  }

  private updateSubsystemDisables(): void {
    for (const ship of this.ships) {
      if (ship.isDead || !ship.subsystems.length) continue;
      let changed = false;
      for (const subsystem of ship.subsystems) {
        const isDisabled = !subsystem.isDestroyed && subsystem.disabledUntil > this.battleElapsed;
        subsystem.label.classList.toggle("is-disabled", isDisabled);
        if (!isDisabled && subsystem.disabledUntil > 0) {
          subsystem.disabledUntil = 0;
          changed = true;
        }
      }
      if (changed) {
        this.recalculateSubsystemStats(ship);
      }
    }
  }

  private updateSubsystemRepairs(delta: number): void {
    for (const ship of this.ships) {
      if (ship.isDead || !ship.subsystems.length || this.isSubsystemDestroyed(ship, "repair")) continue;
      const repairSystem = ship.subsystems.find((subsystem) => subsystem.type === "repair");
      if (!repairSystem || repairSystem.isDestroyed) continue;

      for (const subsystem of ship.subsystems) {
        if (subsystem.type === "repair" || subsystem.health >= subsystem.maxHealth) continue;
        if (this.battleElapsed - subsystem.lastDamagedAt < 12) continue;

        const wasDestroyed = subsystem.isDestroyed;
        subsystem.health = Math.min(subsystem.maxHealth, subsystem.health + subsystem.maxHealth * 0.02 * delta);
        subsystem.healthBar.style.width = `${Math.max(0, (subsystem.health / subsystem.maxHealth) * 100)}%`;

        if (wasDestroyed && subsystem.health >= subsystem.maxHealth * 0.25) {
          this.restoreSubsystem(subsystem);
        }
      }
    }
  }

  private restoreSubsystem(subsystem: Subsystem): void {
    subsystem.isDestroyed = false;
    subsystem.mesh.visible = true;
    subsystem.label.classList.remove("is-destroyed");
    if (subsystem.damageMarker) {
      subsystem.damageMarker.removeFromParent();
      subsystem.damageMarker = undefined;
    }
    this.recalculateSubsystemStats(subsystem.parent);
    this.updateFlagshipPanel();
    this.createFloatingText(this.getTargetPosition(subsystem).add(new THREE.Vector3(0, 34, 0)), "system restored", "repair");
  }

  private updateBars(ship: FleetMesh): void {
    ship.shieldBar.style.width = `${Math.max(0, (ship.shield / ship.maxShield) * 100)}%`;
    ship.healthBar.style.width = `${Math.max(0, (ship.hull / ship.maxHull) * 100)}%`;
    if (ship.shipClass === "flagship") {
      this.updateFlagshipPanel();
    }
  }

  private destroyShip(ship: FleetMesh, sourceTeam: Team): void {
    if (ship.isDead) return;
    ship.isDead = true;
    if (ship.team === ENEMY_TEAM) {
      this.battleStats.enemyShipsDestroyed += 1;
    } else {
      this.battleStats.playerShipsLost += 1;
    }
    ship.hull = 0;
    ship.shield = 0;
    ship.group.visible = false;
    ship.label.style.display = "none";
    ship.subsystems.forEach((subsystem) => {
      subsystem.label.style.display = "none";
      subsystem.isDestroyed = true;
      subsystem.damageMarker = undefined;
    });
    ship.destination = undefined;
    ship.target = undefined;
    this.createExplosion(ship.group.position, ship.shipClass);

    for (const candidate of this.ships) {
      if (candidate.target === ship) {
        candidate.target = undefined;
      }
    }

    const ring = this.selectionRings.get(ship);
    if (ring) {
      ring.removeFromParent();
      this.selectionRings.delete(ship);
      this.selectedShips.delete(ship);
      this.updateSelectedSummary();
    }

    if (ship.shipClass === "flagship") {
      this.updateFlagshipPanel();
      if (sourceTeam === PLAYER_TEAM) {
        this.completeObjective("flagship");
      }
      this.endBattle(sourceTeam === PLAYER_TEAM ? "Victory" : "Defeat");
    }
  }

  private createImpact(position: THREE.Vector3, team: Team): void {
    const color = team === PLAYER_TEAM ? 0x65eaff : 0xff704b;
    const impact = new THREE.Mesh(
      new THREE.SphereGeometry(10, 12, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.65 }),
    );
    impact.position.copy(position);
    this.scene.add(impact);
    this.fadeAndRemove(impact, 280, 2.8);
  }

  private createMuzzleFlash(position: THREE.Vector3, color: number): void {
    if (this.lowQualityMode) return;
    const flash = new THREE.Mesh(
      new THREE.SphereGeometry(7, 10, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.76 }),
    );
    flash.position.copy(position);
    flash.position.y += 10;
    this.scene.add(flash);
    this.fadeAndRemove(flash, 150, 1.8);
  }

  private updateProjectileTrail(projectile: Projectile): void {
    if (!projectile.trail) return;
    const tailDirection = projectile.previousPosition.clone().sub(projectile.mesh.position).normalize();
    const trailLength = projectile.speed > 400 ? 64 : 42;
    const tail = projectile.mesh.position.clone().addScaledVector(tailDirection, trailLength);
    projectile.trail.geometry.dispose();
    projectile.trail.geometry = new THREE.BufferGeometry().setFromPoints([projectile.mesh.position.clone(), tail]);
  }

  private createFloatingText(position: THREE.Vector3, text: string, tone: "damage" | "repair" | "income" | "shield"): void {
    if (!this.damageNumbersEnabled) return;
    const screen = this.worldToScreen(position);
    const label = document.createElement("div");
    label.className = `floating-number is-${tone}`;
    label.textContent = text;
    label.style.left = `${screen.x}px`;
    label.style.top = `${screen.y}px`;
    this.labelLayer.append(label);

    window.setTimeout(() => {
      label.remove();
    }, 920);
  }

  private addScreenShake(strength: number, duration: number): void {
    if (this.lowQualityMode) return;
    this.cameraShakeStrength = Math.max(this.cameraShakeStrength, strength);
    this.cameraShakeTime = Math.max(this.cameraShakeTime, duration);
  }

  private createShieldRipple(position: THREE.Vector3, team: Team): void {
    if (this.lowQualityMode) return;
    const color = team === PLAYER_TEAM ? 0x65eaff : 0xff8a62;
    const ripple = this.createRing(position.x, position.z, 42, color, 0.82);
    ripple.position.y = position.y + 4;
    this.scene.add(ripple);
    this.fadeLineAndRemove(ripple, 360, 2.5);
  }

  private createHullSpark(position: THREE.Vector3, sourceTeam: Team): void {
    if (this.lowQualityMode) return;
    const color = sourceTeam === PLAYER_TEAM ? 0x9af8ff : 0xffc36f;
    for (let i = 0; i < 3; i += 1) {
      const spark = new THREE.Mesh(
        new THREE.SphereGeometry(4, 8, 6),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8 }),
      );
      spark.position.copy(position).add(new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(42),
        THREE.MathUtils.randFloat(4, 24),
        THREE.MathUtils.randFloatSpread(42),
      ));
      this.scene.add(spark);
      this.fadeAndRemove(spark, 260, 1.4);
    }
  }

  private createAbilityPulse(position: THREE.Vector3, color: number, radius: number): void {
    const pulse = this.createRing(position.x, position.z, radius, color, 0.9);
    pulse.position.y = 10;
    this.scene.add(pulse);
    this.fadeLineAndRemove(pulse, 780, 2.4);

    if (this.lowQualityMode) return;
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(14, 14, 10),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 }),
    );
    core.position.copy(position);
    core.position.y += 16;
    this.scene.add(core);
    this.fadeAndRemove(core, 460, 2.2);
  }

  private createExplosion(position: THREE.Vector3, shipClass: ShipClass): void {
    this.audio.play("explosion", shipClass === "flagship" ? 1 : 0.68);
    this.addScreenShake(shipClass === "flagship" ? 18 : shipClass === "heavyCapital" ? 12 : 7, shipClass === "flagship" ? 0.8 : 0.32);
    const scale = shipClass === "flagship" ? 5.2 : shipClass === "heavyCapital" ? 3.5 : shipClass === "cruiser" ? 2.3 : 1.4;
    const explosion = new THREE.Mesh(
      new THREE.SphereGeometry(22, 18, 12),
      new THREE.MeshBasicMaterial({ color: 0xffc36f, transparent: true, opacity: 0.86 }),
    );
    explosion.position.copy(position);
    explosion.position.y += 8;
    this.scene.add(explosion);
    this.fadeAndRemove(explosion, shipClass === "flagship" ? 900 : 520, scale);

    const shockwave = this.createRing(position.x, position.z, shipClass === "flagship" ? 90 : 46, 0xffc36f, 0.82);
    shockwave.position.y = 7;
    this.scene.add(shockwave);
    this.fadeLineAndRemove(shockwave, shipClass === "flagship" ? 1100 : 520, shipClass === "flagship" ? 5.5 : 3.2);

    if (shipClass === "flagship" && !this.lowQualityMode) {
      for (let i = 0; i < 5; i += 1) {
        window.setTimeout(() => {
          const burstPosition = position.clone().add(new THREE.Vector3(THREE.MathUtils.randFloatSpread(150), 0, THREE.MathUtils.randFloatSpread(80)));
          const burst = new THREE.Mesh(
            new THREE.SphereGeometry(18, 14, 10),
            new THREE.MeshBasicMaterial({ color: 0xfff0bf, transparent: true, opacity: 0.72 }),
          );
          burst.position.copy(burstPosition);
          burst.position.y += 12;
          this.scene.add(burst);
          this.fadeAndRemove(burst, 520, 2.8);
        }, i * 130);
      }
    }
  }

  private fadeAndRemove(mesh: THREE.Mesh, durationMs: number, targetScale: number): void {
    const startedAt = performance.now();
    const material = mesh.material as THREE.MeshBasicMaterial;
    const animateEffect = (now: number): void => {
      const progress = Math.min(1, (now - startedAt) / durationMs);
      mesh.scale.setScalar(1 + progress * targetScale);
      material.opacity = 1 - progress;
      if (progress < 1) {
        window.requestAnimationFrame(animateEffect);
      } else {
        mesh.removeFromParent();
        mesh.geometry.dispose();
        material.dispose();
      }
    };
    window.requestAnimationFrame(animateEffect);
  }

  private fadeLineAndRemove(line: THREE.Line, durationMs: number, targetScale: number): void {
    const startedAt = performance.now();
    const material = line.material as THREE.LineBasicMaterial;
    const animateEffect = (now: number): void => {
      const progress = Math.min(1, (now - startedAt) / durationMs);
      line.scale.setScalar(1 + progress * targetScale);
      material.opacity = 1 - progress;
      if (progress < 1) {
        window.requestAnimationFrame(animateEffect);
      } else {
        line.removeFromParent();
        line.geometry.dispose();
        material.dispose();
      }
    };
    window.requestAnimationFrame(animateEffect);
  }

  private removeProjectile(index: number): void {
    const [projectile] = this.projectiles.splice(index, 1);
    projectile.mesh.removeFromParent();
    projectile.mesh.geometry.dispose();
    (projectile.mesh.material as THREE.Material).dispose();
    if (projectile.trail) {
      projectile.trail.removeFromParent();
      projectile.trail.geometry.dispose();
      (projectile.trail.material as THREE.Material).dispose();
    }
  }

  private endBattle(result: "Victory" | "Defeat"): void {
    this.battleEnded = true;
    this.audio.play(result === "Victory" ? "victory" : "defeat");
    this.hudStatus.textContent = result;
    this.clearSelection();
    const playerFlagship = this.getFlagship(PLAYER_TEAM);
    const enemyFlagship = this.getFlagship(ENEMY_TEAM);
    const remainingHull = result === "Victory" ? playerFlagship?.hull ?? 0 : enemyFlagship?.hull ?? 0;
    const maxHull = result === "Victory" ? playerFlagship?.maxHull ?? 1 : enemyFlagship?.maxHull ?? 1;
    const hullPercent = Math.max(0, Math.round((remainingHull / maxHull) * 100));
    const minutes = Math.floor(this.battleElapsed / 60);
    const seconds = Math.floor(this.battleElapsed % 60).toString().padStart(2, "0");
    const battleScore = calculateBattleScore(result, this.battleElapsed, hullPercent, this.battleStats);
    const battleStars = calculateBattleStars(result, this.battleElapsed, hullPercent);
    const reward = calculateResearchReward(result, battleStars, this.battleMode === "survival" ? this.survivalWave : 0);
    const isNewBest = battleScore.score > this.profile.bestScore;
    const isNewStarBest = battleStars > this.profile.bestStars;
    const isNewWaveBest = this.battleMode === "survival" && this.survivalWave > this.profile.bestSurvivalWave;
    if (isNewBest) {
      this.profile.bestScore = battleScore.score;
      this.profile.bestRating = battleScore.rating;
    }
    if (isNewStarBest) {
      this.profile.bestStars = battleStars;
    }
    if (isNewWaveBest) {
      this.profile.bestSurvivalWave = this.survivalWave;
    }
    this.profile.researchCores += reward;
    this.saveProfile();
    this.resultOverlay = document.createElement("div");
    this.resultOverlay.className = `result-overlay ${result === "Victory" ? "is-victory" : "is-defeat"}`;
    this.resultOverlay.innerHTML = `
      <div class="result-panel">
        <h2>${result}</h2>
        <p>${result === "Victory" ? "Enemy flagship destroyed." : "Your flagship was destroyed."}</p>
        <div class="result-rating">
          <span>${battleScore.rating}</span>
          <strong>${battleScore.score.toLocaleString()} score</strong>
          <em>${isNewBest ? "New Score Best" : `Best ${this.profile.bestRating} | ${this.profile.bestScore.toLocaleString()}`}</em>
          <em>${isNewStarBest ? "New Star Best" : `Best ${this.renderStarText(this.profile.bestStars)}`}</em>
          ${this.battleMode === "survival" ? `<em>${isNewWaveBest ? "New Wave Best" : `Best Wave ${this.profile.bestSurvivalWave}`}</em>` : ""}
        </div>
        <div class="result-stars" aria-label="${battleStars} battle stars">
          ${Array.from({ length: 3 }, (_, index) => `<span class="${index < battleStars ? "is-earned" : ""}">★</span>`).join("")}
        </div>
        <div class="result-reward-strip">
          <strong>+${reward} Research Cores</strong>
          <span>${isNewBest || isNewStarBest || isNewWaveBest ? "New record logged" : "Progress saved"}</span>
        </div>
        <div class="result-stat-groups">
          <section>
            <h3>Outcome</h3>
            <dl>
              <div><dt>Mode</dt><dd>${this.battleMode === "survival" ? "Survival" : this.battleMode === "tutorial" ? "Tutorial" : "Skirmish"}</dd></div>
              <div><dt>Battle Time</dt><dd>${minutes}:${seconds}</dd></div>
              <div><dt>${result === "Victory" ? "Player" : "Enemy"} Flagship Hull</dt><dd>${hullPercent}%</dd></div>
              ${this.battleMode === "survival" ? `<div><dt>Waves Survived</dt><dd>${this.survivalWave}/${this.survivalMaxWaves}</dd></div>` : ""}
            </dl>
          </section>
          <section>
            <h3>Rewards</h3>
            <dl>
              <div><dt>Research Reward</dt><dd>+${reward}</dd></div>
              <div><dt>Score</dt><dd>${battleScore.score.toLocaleString()}</dd></div>
              <div><dt>Rating</dt><dd>${battleScore.rating}</dd></div>
            </dl>
          </section>
          <section>
            <h3>Combat</h3>
            <dl>
              <div><dt>Enemy Ships Destroyed</dt><dd>${this.battleStats.enemyShipsDestroyed}</dd></div>
              <div><dt>Player Ships Lost</dt><dd>${this.battleStats.playerShipsLost}</dd></div>
              <div><dt>Subsystems Destroyed</dt><dd>${this.battleStats.subsystemsDestroyed}</dd></div>
            </dl>
          </section>
          <section>
            <h3>Operations</h3>
            <dl>
              <div><dt>Nodes Captured</dt><dd>${this.battleStats.nodesCaptured}</dd></div>
              <div><dt>Store Purchases</dt><dd>${this.battleStats.storePurchases}</dd></div>
              <div><dt>Abilities Used</dt><dd>${this.battleStats.abilitiesUsed}</dd></div>
            </dl>
          </section>
        </div>
      </div>
      <button class="start-button" type="button">Restart Battle</button>
    `;
    this.resultOverlay.querySelector("button")?.addEventListener("click", () => window.location.reload());
    this.shell.append(this.resultOverlay);
  }

  private updateLabels(): void {
    const rect = this.canvas.getBoundingClientRect();
    for (const ship of this.ships) {
      if (ship.isDead) continue;
      const position = ship.group.position.clone();
      position.y += SHIP_VISUALS[ship.shipClass].height * 0.7;
      position.project(this.camera);
      const x = (position.x * 0.5 + 0.5) * rect.width;
      const y = (-position.y * 0.5 + 0.5) * rect.height;
      ship.label.style.left = `${x}px`;
      ship.label.style.top = `${y}px`;
      ship.label.style.opacity = position.z < 1 ? "1" : "0";
      const hangarStatus = ship.label.querySelector<HTMLElement>(".ship-hangar-status");
      if (hangarStatus) {
        const statusText = this.getHangarStatusText(ship);
        hangarStatus.textContent = statusText.replace("Squadrons", "SQ").replace("Hangar ", "");
        hangarStatus.classList.toggle("is-offline", statusText.includes("offline"));
        hangarStatus.style.display = statusText ? "block" : "none";
      }

      for (const subsystem of ship.subsystems) {
        const subsystemPosition = this.getTargetPosition(subsystem);
        subsystemPosition.y += 22;
        subsystemPosition.project(this.camera);
        const sx = (subsystemPosition.x * 0.5 + 0.5) * rect.width;
        const sy = (-subsystemPosition.y * 0.5 + 0.5) * rect.height;
        subsystem.label.style.left = `${sx}px`;
        subsystem.label.style.top = `${sy}px`;
        subsystem.label.style.opacity = !ship.isDead && subsystemPosition.z < 1 ? "1" : "0";
      }
    }
  }

  private drawMinimap(): void {
    const context = this.minimapContext;
    const width = this.minimapCanvas.width;
    const height = this.minimapCanvas.height;
    const toX = (worldX: number): number => (worldX / WORLD_WIDTH) * width;
    const toY = (worldZ: number): number => (worldZ / WORLD_HEIGHT) * height;

    context.clearRect(0, 0, width, height);
    context.fillStyle = "rgba(5, 12, 24, 0.88)";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "rgba(122, 213, 255, 0.12)";
    context.lineWidth = 1;
    for (let x = 0; x <= width; x += width / 4) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
    for (let y = 0; y <= height; y += height / 4) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }

    for (const node of this.objectiveNodes) {
      context.beginPath();
      context.arc(toX(node.position.x), toY(node.position.z), node.kind === "repair" ? 5 : 6, 0, Math.PI * 2);
      context.fillStyle = node.owner === PLAYER_TEAM ? "#65eaff" : node.owner === ENEMY_TEAM ? "#ff704b" : node.kind === "repair" ? "#8ef2a1" : "#ffd36c";
      context.fill();
      context.strokeStyle = "rgba(232, 247, 255, 0.42)";
      context.stroke();
    }

    for (const zone of this.nebulaZones) {
      context.beginPath();
      context.arc(toX(zone.position.x), toY(zone.position.z), (zone.radius / WORLD_WIDTH) * width, 0, Math.PI * 2);
      context.fillStyle = "rgba(159, 140, 255, 0.14)";
      context.fill();
      context.strokeStyle = "rgba(159, 140, 255, 0.62)";
      context.stroke();
    }

    for (const ship of this.ships) {
      if (ship.isDead) continue;
      const x = toX(ship.group.position.x);
      const y = toY(ship.group.position.z);
      const radius = ship.shipClass === "flagship" ? 4.5 : ship.shipClass === "heavyCapital" ? 3.6 : 2.8;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = ship.team === PLAYER_TEAM ? "#9af8ff" : "#ff9b80";
      context.fill();

      if (this.selectedShips.has(ship)) {
        context.beginPath();
        context.arc(x, y, radius + 3.2, 0, Math.PI * 2);
        context.strokeStyle = "#f1fbff";
        context.lineWidth = 1.5;
        context.stroke();
      }
    }

    const viewWidth = THREE.MathUtils.clamp((this.camera.position.y / 1280) * width * 0.9, 32, 84);
    const viewHeight = THREE.MathUtils.clamp((this.camera.position.y / 1280) * height * 0.9, 20, 56);
    const viewX = toX(this.camera.position.x) - viewWidth / 2;
    const viewY = toY(this.camera.position.z - 360) - viewHeight / 2;
    context.strokeStyle = "rgba(241, 251, 255, 0.86)";
    context.lineWidth = 1.5;
    context.strokeRect(viewX, viewY, viewWidth, viewHeight);
  }

  private resize(): void {
    const width = this.shell.clientWidth;
    const height = this.shell.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.orientationOverlay.classList.toggle("is-visible", width < 760 && height > width);
    this.syncCommandGroupsForViewport(width);
  }

  private syncCommandGroupsForViewport(width: number): void {
    const isMobile = width <= 760;
    this.commandTray.querySelectorAll<HTMLDetailsElement>(".command-group").forEach((group) => {
      group.open = !isMobile || group.classList.contains("command-group-primary");
    });
  }

  private toggleQualityMode(button: HTMLButtonElement): void {
    this.lowQualityMode = !this.lowQualityMode;
    this.audio.play("toggle");
    this.setButtonStateText(button, this.lowQualityMode ? "Low" : "High");
    this.renderer.setPixelRatio(this.lowQualityMode ? 1 : Math.min(window.devicePixelRatio, 2));
    this.scene.fog = new THREE.FogExp2(0x050914, this.lowQualityMode ? 0.00022 : 0.00016);
    this.announce(this.lowQualityMode ? "Low quality mode enabled" : "High quality mode enabled");
  }

  private toggleAudio(button: HTMLButtonElement): void {
    const muted = this.audio.toggleMute();
    this.setButtonStateText(button, muted ? "Muted" : "On");
    this.announce(muted ? "Audio muted" : "Audio enabled");
  }

  private toggleDamageNumbers(button: HTMLButtonElement): void {
    this.damageNumbersEnabled = !this.damageNumbersEnabled;
    button.classList.toggle("is-active", this.damageNumbersEnabled);
    this.setButtonStateText(button, this.damageNumbersEnabled ? "On" : "Off");
    this.audio.play("toggle");
    this.announce(this.damageNumbersEnabled ? "Floating numbers enabled" : "Floating numbers disabled");
  }

  private setButtonStateText(button: HTMLButtonElement, value: string): void {
    const state = button.querySelector("span");
    if (state) {
      state.textContent = value;
    } else {
      button.textContent = value;
    }
  }

  private toggleSettingsPanel(button: HTMLButtonElement): void {
    const isVisible = this.settingsPanel.classList.toggle("is-visible");
    button.classList.toggle("is-active", isVisible);
    this.audio.play("toggle");
  }

  private closeSettingsPanel(): void {
    this.settingsPanel.classList.remove("is-visible");
    this.commandTray.querySelector<HTMLButtonElement>('[data-action="settings"]')?.classList.remove("is-active");
  }

  private togglePause(button: HTMLButtonElement): void {
    this.isPaused = !this.isPaused;
    button.classList.toggle("is-active", this.isPaused);
    button.textContent = this.isPaused ? "Resume" : "Pause";
    this.audio.play("toggle");
    this.hudStatus.textContent = this.isPaused ? "Paused" : "Battle ready";
    this.announce(this.isPaused ? "Battle paused" : "Battle resumed");
    this.updateAbilityButtons();
  }

  private toggleFollowFlagship(button: HTMLButtonElement): void {
    const flagship = this.getFlagship(PLAYER_TEAM);
    if (!flagship) {
      this.audio.play("error");
      this.announce("No flagship to follow");
      return;
    }
    this.isFollowingFlagship = !this.isFollowingFlagship;
    button.classList.toggle("is-active", this.isFollowingFlagship);
    this.audio.play("toggle");
    this.hudStatus.textContent = this.isFollowingFlagship ? "Following flagship" : "Manual camera";
    if (this.isFollowingFlagship) {
      this.camera.position.x = flagship.group.position.x;
      this.camera.position.z = flagship.group.position.z + 360;
      this.clampCamera();
    }
  }

  private stopFollowingFlagship(): void {
    if (!this.isFollowingFlagship) return;
    this.isFollowingFlagship = false;
    this.commandTray.querySelector<HTMLButtonElement>('[data-action="follow"]')?.classList.remove("is-active");
  }

  private updateFollowCamera(delta: number): void {
    if (!this.isFollowingFlagship) return;
    const flagship = this.getFlagship(PLAYER_TEAM);
    if (!flagship) {
      this.stopFollowingFlagship();
      return;
    }
    const targetX = flagship.group.position.x;
    const targetZ = flagship.group.position.z + 360;
    const blend = 1 - Math.exp(-delta * 5.5);
    this.camera.position.x = THREE.MathUtils.lerp(this.camera.position.x, targetX, blend);
    this.camera.position.z = THREE.MathUtils.lerp(this.camera.position.z, targetZ, blend);
    this.clampCamera();
  }

  private getCameraShakeOffset(delta: number): THREE.Vector3 {
    if (this.cameraShakeTime <= 0) {
      return new THREE.Vector3();
    }
    this.cameraShakeTime = Math.max(0, this.cameraShakeTime - delta);
    const strength = this.cameraShakeStrength * (this.cameraShakeTime / Math.max(0.001, this.cameraShakeTime + delta));
    if (this.cameraShakeTime <= 0) {
      this.cameraShakeStrength = 0;
    }
    return new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(strength),
      THREE.MathUtils.randFloatSpread(strength * 0.35),
      THREE.MathUtils.randFloatSpread(strength),
    );
  }

  private updateFps(delta: number): void {
    this.fpsAccumulator += delta;
    this.fpsFrames += 1;
    if (this.fpsAccumulator >= 0.75) {
      const fps = Math.round(this.fpsFrames / this.fpsAccumulator);
      this.fpsPanel.textContent = `FPS ${fps}`;
      this.fpsPanel.classList.toggle("is-low", fps < 45);
      this.fpsAccumulator = 0;
      this.fpsFrames = 0;
    }
  }

  private zoom(scale: number): void {
    this.camera.position.y = THREE.MathUtils.clamp(this.camera.position.y * scale, 300, 1280);
    this.camera.position.z = THREE.MathUtils.clamp(this.camera.position.z * scale, 180, WORLD_HEIGHT + 760);
    this.clampCamera();
  }

  private clampWorldPosition(position: THREE.Vector3): THREE.Vector3 {
    return new THREE.Vector3(
      THREE.MathUtils.clamp(position.x, MAP_MARGIN, WORLD_WIDTH - MAP_MARGIN),
      position.y,
      THREE.MathUtils.clamp(position.z, MAP_MARGIN, WORLD_HEIGHT - MAP_MARGIN),
    );
  }

  private clampCamera(): void {
    this.camera.position.x = THREE.MathUtils.clamp(this.camera.position.x, 80, WORLD_WIDTH - 80);
    this.camera.position.z = THREE.MathUtils.clamp(this.camera.position.z, 160, WORLD_HEIGHT + 720);
    const lookAt = this.clampWorldPosition(new THREE.Vector3(this.camera.position.x, 0, this.camera.position.z - 360));
    this.camera.lookAt(lookAt.x, 0, lookAt.z);
  }

  private resetPointerState(): void {
    this.isDragging = false;
    this.dragStarted = false;
    this.pinchDistance = undefined;
  }
}
