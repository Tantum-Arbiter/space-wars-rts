# Space RTS Project Rules

## Product Direction

Space RTS is a 3D, real-time, top-down tactical space RTS built for browser play. The game should feel ambitious, readable, and fun on mobile as well as desktop.

The core design priority is not "more buttons." It is fast command expression with low friction:

- Keep the battlefield visible.
- Keep touch targets large and intentional.
- Prefer context-aware controls over permanent dense toolbars.
- Make important state readable at a glance.
- Preserve tactical depth without asking the player to fight the UI.

## UX Principles

- Design mobile first for the command layer. Desktop can expose more at once, but mobile should use drawers, modes, radial controls, gestures, or contextual actions.
- Landscape mobile is the primary small-screen battlefield layout.
- Avoid cluttering the playfield with panels that block ships, objectives, or the flagship.
- Do not add visible tutorial-style explanatory text to normal battle UI unless it belongs only in tutorial mode.
- Use concise labels. Buttons should be short, clear, and thumb-sized.
- Prefer icons or symbolic controls when an icon system exists. If no icon library is installed, do not add one without a strong reason.
- Never solve mobile UX by simply shrinking font sizes or button padding.
- Stable gameplay controls matter more than decorative UI.

## Engineering Principles

- Keep changes scoped to the requested feature or cleanup.
- Follow existing TypeScript and Three.js patterns in `src/`.
- Prefer data-driven definitions for repeated game entities, upgrades, abilities, costs, or labels.
- Avoid global rewrites unless the current structure blocks the requested work.
- Do not introduce new dependencies without clear value and approval.
- Do not commit generated build output, dependency folders, or local caches.
- Keep browser storage keys stable unless a migration is added.
- Make gameplay rules testable in pure functions when possible.

## Visual Standards

- This is an RTS interface, not a marketing page. Keep the UI dense but calm.
- Use panels only when they frame actual controls or repeated items.
- Avoid nested cards, decorative gradient blobs, and oversized hero-style typography inside gameplay.
- Use restrained color to communicate tactical state: ready, warning, locked, damaged, selected, owned.
- Text must fit its container on mobile and desktop.
- Buttons should be at least comfortable touch targets on mobile, generally around 44px minimum height.

## Verification

Before handing off substantial changes, run:

```bash
npm run test
npm run build
```

Expected note: the production build may warn that the Three.js bundle is larger than 500 kB. That warning is acceptable unless the task is specifically about bundle optimization.

For UI changes, verify the layout at:

- Desktop landscape.
- Mobile landscape around `740x390`.
- Narrow/mobile portrait should show the rotate warning rather than trying to make full RTS controls fit.

## Repository Hygiene

- Keep `node_modules/`, `dist/`, logs, screenshots, and temporary files out of source control unless explicitly requested.
- Keep public assets intentional and named clearly.
- Do not remove user work or unrelated changes.
- Prefer small, readable commits if committing.

