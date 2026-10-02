# Design proposal: "Signal"

## Problem

The previous site used the standard developer-portfolio kit: glassmorphism cards, aurora blobs,
floating particles, spotlight hovers, orbit rings, a tech marquee and a gradient sheen on every
heading. Each effect is fine alone. Together they signal "template", and the one thing that should
stand out (the work: 13M+ transactions a month at 99.9% uptime) competes with decoration.

## Direction

Editorial and engineering-led. The page should read like a well-typeset spec sheet written by
someone who runs production systems.

- **Show, do not claim.** The hero carries a live request-trace waterfall (auth, cache, Postgres,
  queue, webhook) that replays with fresh timings. It says "backend engineer" without an adjective.
- **One accent, used for meaning.** Signal orange marks the critical path, section indices, the
  active nav item and the key phrase in each headline. Nothing else is coloured.
- **Hierarchy from type, not effects.** Geist for display and body, Geist Mono for metadata.
  Display sizes use fluid `clamp()` with tight tracking.
- **Metrics forward.** Experience bullets automatically bold percentages and volumes so a
  ten-second skim still lands the impact.

## Tokens

| Token          | Value              | Use                                  |
| -------------- | ------------------ | ------------------------------------ |
| `ink`          | `#0c0c0b`          | Page background                      |
| `ink-sunken`   | `#090908`          | Alternating section band             |
| `ink-raised`   | `#151513`          | Trace card                           |
| `paper`        | `#ecebe6`          | Primary text                         |
| `muted`        | `#8e8c85`          | Secondary text                       |
| `faint`        | `#5c5a55`          | Tertiary text, separators            |
| `line`         | paper at 10%       | Hairlines                            |
| `signal`       | `#ff5a1f`          | Accent (6.3:1 on ink)                |
| `ok`           | `#3ddc84`          | Live / available status only         |

## Motion system

All motion comes from `src/lib/motion.js`: one expo-out curve, three durations (200, 450, 800 ms).

| Moment                | Technique                                                         |
| --------------------- | ----------------------------------------------------------------- |
| Headlines             | Masked line-by-line rise (`SplitLines`)                           |
| Request trace         | Spans draw in proportion to their start time, loop every 6 s      |
| Metrics               | Count-up on first view, written to the DOM without re-renders     |
| Work list             | Spring-weighted screenshot follows the cursor (fine pointers only) |
| Experience            | Scroll-linked accent rule fills as you read                       |
| Portrait              | Clip-path wipe in; greyscale to colour on hover                   |
| Navbar                | Hides on scroll down, returns on scroll up; live Lagos clock      |

Rules: entrances run once; nothing loops off-screen (the trace pauses when not visible or the tab
is hidden); `MotionConfig reducedMotion="user"` drops transforms for users who ask for less motion.

## Architecture

- All copy lives in `src/data/content.js`. Sections are pure layout.
- Motion is loaded with `LazyMotion` + `m` components (`domAnimation` features only).
- `Button` renders an `<a>` or `<button>`, fixing the old `<a><button/></a>` nesting.

## Trade-offs

- **Bundle:** Motion adds roughly 46 KB gzipped (120 KB vs 74 KB JS). Worth it for spring physics,
  scroll-linking and exit animations; revisit if Lighthouse performance drops below 95.
- **Removed:** hero background photo, particles, marquee, spotlight cards, testimonials stub.
