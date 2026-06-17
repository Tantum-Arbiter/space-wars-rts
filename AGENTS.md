# Agent Guide: Codex

Follow `RULES.md` first. This file adds Codex-specific working instructions for this project.

## Project Context

- Project: Space RTS
- Stack: Vite, TypeScript, Three.js, Vitest
- Main app: `src/game/RealTimeSpaceApp.ts`
- Styles: `src/styles/game.css`
- Tests: `tests/`

## How To Work

- Read the relevant code before changing it.
- Use `rg` for searching.
- Keep edits focused and sympathetic to the existing codebase.
- Use data tables/constants for abilities, store items, upgrades, and repeated UI metadata.
- Prefer pure rule helpers and tests for scoring, economy, combat, and progression behavior.
- Do not add dependencies unless the user approves or the benefit is clearly worth it.

## Mobile RTS UX Rule

If a UI change adds buttons, panels, or persistent controls, stop and ask:

- Does this reduce battlefield visibility?
- Can this be contextual instead of always visible?
- Is it thumb-friendly in landscape mobile?
- Would a drawer, radial menu, selection-sensitive action, or gesture be better?

Do not ship a mobile solution that is just a smaller desktop toolbar.

## Common Commands

```bash
npm install
npm run dev
npm run test
npm run build
```

## Verification Expectations

Run tests and build after meaningful changes:

```bash
npm run test
npm run build
```

For UI work, inspect mobile landscape and desktop. If browser verification is unavailable, state that clearly and still run test/build.

## Files To Avoid Editing Casually

- `package-lock.json`: only changes when dependencies change.
- `dist/`: generated output.
- `node_modules/`: dependency output.
- Browser save keys/local-storage behavior: preserve unless intentionally migrating.

## Communication

Be direct and practical. Summarize what changed, how it was verified, and any remaining risk. If a tradeoff affects mobile playability, call it out.

