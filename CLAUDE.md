# Claude Guide

Follow `RULES.md` first. This file gives Claude-specific guidance for working on Space RTS.

## Project Summary

Space RTS is a 3D browser RTS prototype using Vite, TypeScript, Three.js, and Vitest. It should support ambitious tactical play while staying usable on mobile landscape screens.

Important files:

- `src/game/RealTimeSpaceApp.ts`: primary game application and UI orchestration.
- `src/styles/game.css`: gameplay HUD and responsive layout.
- `src/game/core/`: rules, constants, audio, and core logic.
- `src/game/data/`: ship, upgrade, and balance data.
- `tests/`: Vitest coverage for core game behavior.

## Development Guidance

- Read before editing.
- Keep changes small and reversible.
- Match existing naming, structure, and style.
- Prefer clear TypeScript types over implicit object shapes.
- Move repeated costs, labels, and descriptions into constants or data files.
- Add or update tests when changing scoring, combat, economy, upgrades, or progression.
- Avoid broad refactors during feature work.

## UX Guidance

This game must not become a spreadsheet of buttons on a phone. For mobile:

- Prioritize battlefield visibility.
- Keep only high-frequency commands immediately visible.
- Put advanced or lower-frequency commands behind drawers, radial controls, or contextual surfaces.
- Keep tap targets comfortable.
- Do not rely on hover-only affordances.
- Use tutorial mode for teaching text.

For desktop:

- It is acceptable to expose more controls simultaneously.
- Keep layout consistent with mobile concepts so players do not learn two different games.

## Quality Checklist

Before finishing meaningful work:

```bash
npm run test
npm run build
```

Also consider:

- Does this still work in mobile landscape?
- Does text fit without overlap?
- Are disabled, ready, selected, and damaged states clear?
- Did the change preserve existing save data?
- Did the change avoid generated files and dependency churn?

## Handoff Format

When summarizing work, include:

- Files changed.
- Behavior changed.
- Verification run.
- Any known limitation or follow-up.

