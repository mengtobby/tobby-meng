---
name: Tobby Meng — Portfolio
description: A restrained, near-black editorial portfolio built to survive a recruiter's ten-second scan.
colors:
  bg: "#0a0a0c"
  surface: "#131417"
  surface-hover: "#1a1c20"
  border: "#24262b"
  border-hover: "#34373d"
  ink: "#eef0f2"
  muted: "#a3a8b0"
  faint: "#6b6f76"
  accent: "#2fae81"
  accent-bright: "#3ec695"
  accent-dim: "#1c6b4e"
typography:
  display:
    fontFamily: "'Cabinet Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Satoshi', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label-mono:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  tight: "8px"
  cluster: "12px"
  section-y: "64px"
  section-y-lg: "96px"
components:
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  nav-link-active:
    textColor: "{colors.accent-bright}"
    typography: "{typography.body}"
  timeline-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
  project-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  project-tile-hover:
    backgroundColor: "{colors.surface-hover}"
---

# Design System: Tobby Meng — Portfolio

<!-- Written by Claude in Impeccable's Scan mode; the impeccable-documenter
     subagent is not registered in this harness, so this is the disclosed
     in-thread substitution. Extracted from the built code, not intention. -->

## Overview

**Creative North Star: "The Instrument, Not the Résumé"**

This is a category-standard portfolio (a chosen "canon" build — see PRODUCT.md's standing visual-direction preference) executed at a craft bar set against rauno.me, joshwcomeau.com, and linear.app, rather than a themed metaphor world. The system reads as a precise, quiet instrument for one job: let a recruiter confirm in seconds that this person can ship at both big-tech rigor and startup speed. Near-black graphite replaces the site's two prior looks (a dark glassy SaaS palette, then a warm-ivory editorial-serif palette); this pass deliberately breaks from both, and from the "warm cream + serif display + terracotta accent" pattern that AI-generated portfolios default to.

Restraint is the whole argument: one neutral scale, one accent color, two self-hosted typefaces, no gradients, no glow, no glassmorphism, no decorative iconography standing in for content. Every section earns its own real heading — there is no eyebrow/kicker label anywhere in the system, by rule, not by oversight.

**Key Characteristics:**
- Near-black graphite ground with a single confident, non-neon emerald accent used flat (no glow/bloom)
- Two self-hosted typefaces (Cabinet Grotesk display, Satoshi body) — no Google Fonts CDN, no system-font-as-display-voice
- One authored motion moment (hero load-in) plus one signature interaction (project-tile hover reveal) — never a repeated scroll-triggered entrance
- Real, verified content only; no invented metrics, testimonials, or claims

## Colors

A single neutral graphite scale carries the page; emerald is reserved for the one thing per view that should pull the eye.

### Primary
- **Confident Emerald** (`#2fae81`): the only saturated color in the system. Used for the active nav-link state (text + underline), the hero's highlighted word (solid block, not a gradient or glow), link hover states, and focus rings. Never used as a background wash or fill outside those specific moments — its rarity is the point.
- **Bright Emerald** (`#3ec695`): the hover/active variant of Primary, one step brighter. Used only on interactive states (link hover, contact-email hover).
- **Dim Emerald** (`#1c6b4e`): a darker variant used for the project-tile hover border and the scrollbar-thumb hover state — present but quiet.

### Neutral
- **Graphite Black** (`#0a0a0c`): the page background. True near-black, not a blue-black or warm-black — deliberately avoids both the "near-black + neon" cliché's usual blue undertone and the warm-cream default this project's own prior versions used.
- **Panel Graphite** (`#131417`): surface color for cards, chips, and the nav bar. One step lighter than the page — depth comes from this tonal step, never from a shadow or gradient.
- **Panel Graphite Hover** (`#1a1c20`): the hover state of Panel Graphite.
- **Hairline Border** (`#24262b`): all dividers and card borders. Always 1px; never used as a colored side-stripe accent.
- **Hairline Border Hover** (`#34373d`): border color on hover for interactive panels.
- **Ink** (`#eef0f2`): primary text. An off-white, not pure white, to sit comfortably against the near-black ground.
- **Muted** (`#a3a8b0`): secondary text — body copy, descriptions, chip roles. Verified ≥4.5:1 against both the page background and the panel surface.
- **Faint** (`#6b6f76`): tertiary/decorative text only (timeline years, tech-tag labels, footer copy) — never used for content a visitor must read to understand the page.

### Named Rules
**The One Voice Rule.** Emerald appears only on interactive or single-emphasis moments — nav active state, the hero highlight, hover states, focus rings. It never fills a background region or appears twice in the same static (non-hover) viewport.

## Typography

**Display Font:** Cabinet Grotesk (self-hosted, weights 500/700/800), with a system-ui fallback stack
**Body Font:** Satoshi (self-hosted, weights 400/500/700), with a system-ui fallback stack
**Label/Mono Font:** JetBrains Mono (Google Fonts), reserved for genuine data/measurement only

**Character:** A confident geometric grotesk paired with a warmer humanist sans — both self-hosted, both intentionally outside the trained-data default list (Fraunces, Instrument Serif, Space Grotesk, DM Sans, etc.) that AI-generated interfaces reach for by habit.

### Hierarchy
- **Display** (700, 5xl–[4.25rem] responsive, 1.08 line-height, -0.02em tracking): the hero headline only. Max size stays under the 6rem craft-floor ceiling.
- **Headline** (700, 3xl–4xl, snug line-height): section titles (About, Skills, Selected work, the Contact close-line) — always a real heading, never preceded by an eyebrow label.
- **Body** (400, lg, 1.6 line-height): About's bio paragraphs, constrained to `max-w-prose` (65ch) per the craft floor's body-measure rule.
- **Small body** (400, sm): project descriptions, skill lists, chip roles.
- **Label** (500, sm): nav links, contact links — Satoshi, not mono; mono is reserved for data.
- **Mono label** (400, xs, tabular-nums where numeric): timeline years and project tech-stack tags only — the two places text is genuinely data (a date, a named technology), not decoration.

### Named Rules
**The Mono-Is-Data Rule.** JetBrains Mono appears only on timeline years and technology-name tags. It is never used for nav labels, section headings, or link text — those are Satoshi, at whatever weight the hierarchy calls for.

## Layout

Single-page scroll, five sections (Hero, Selected work, About, Skills, Contact) inside a `max-w-4xl`–`max-w-5xl` centered container with 24–32px horizontal padding (`px-6 md:px-8`). Vertical rhythm runs on Tailwind's 4px base scale: section padding sits at 64px (`py-16`) for lighter sections and 96px (`py-24`) for heavier ones (About, Contact), with headings keeping more space above (the preceding section's own bottom padding) than below (24–32px margin to their content) per the craft floor's spacing rule.

The nav is `sticky`, backdrop-blurred, and — as of the finish-review fix — shows all five links plus Resume on every breakpoint; only the decorative title and `/handle` hide below `sm`, never a navigational item.

Responsive behavior: the hero's timeline renders as a wrapping row of pill chips (not a fixed table) so it reflows naturally at any width. The project grid is a 3-column/2-row asymmetric bento on `sm+` (one large tile, two stacked smaller tiles) that collapses to a single stacked column below `sm`, each tile keeping its own aspect ratio.

## Elevation & Depth

Flat by design — no box-shadow anywhere in the system. Depth comes entirely from tonal layering: the page background, panel surfaces, and nested chips (e.g., a tech-tag pill using the page's own background color inside a panel one step lighter) each sit one graphite step apart. This was a deliberate choice against the "glow/bloom" look common to near-black AI-generated interfaces.

### Named Rules
**The Flat-By-Default Rule.** No shadows, no blur-based glow, no gradient standing in for a shadow. Depth is tonal-step layering only.

## Shapes

Corners are soft but small: `rounded-lg` (8px) on project tiles, `rounded-md` (6px) on the hero's highlight block, `rounded-sm` (4px) on tech-tag chips, `rounded-full` on timeline pill chips. Borders are always 1px and always the neutral hairline color — never a colored or multi-pixel accent border, and never on only one side of an element.

## Components

### Navigation
Sticky, `bg-bg/85` with `backdrop-blur-md`, a 1px bottom hairline. Name in Cabinet Grotesk bold; title, links, and the `/handle` in Satoshi. The active link (Work) is marked two ways at once — accent-bright color *and* a 2px underline — so wayfinding never depends on color alone. All five links plus Resume are visible at every breakpoint; wraps to two lines on narrow phones rather than hiding items.

### Timeline Chips
- **Style:** `rounded-full`, `bg-surface`, 1px hairline border, `8px 14px` padding.
- **Content:** mono year (faint) · bold name (ink) · muted role, in that order.
- **Hover (linked entries only):** border shifts to `border-accent-dim`, background to `surface-hover`, over 200ms ease-out.

### Project Tiles (Selected work)
- **Corner Style:** `rounded-lg` (8px).
- **Background:** `bg-surface` at rest, `bg-surface-hover` on hover.
- **Border:** 1px hairline, shifting to `accent-dim` on hover — the only per-component color change in the system.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Behavior:** name and tagline are always visible (never hover-only — the previous version's hover-only captions failed a touch-device accessibility check and were fixed before this redesign). On hover, a `grid-template-rows: 0fr → 1fr` transition reveals the full description and tech-stack tags — the system's one signature interaction, distinct from the hero's one-time load animation.

### Links (Contact, Nav, Footer)
- **Style:** text-only, no button chrome. Email link carries a bottom border that shifts from `ink` to `accent` on hover; GitHub/LinkedIn/Resume are plain text-color transitions, `faint → ink`.
- **Focus:** all interactive elements get a 2px `accent`-colored outline with 3px offset on `:focus-visible` — themed, not the browser default.

## Do's and Don'ts

### Do:
- **Do** keep emerald to interactive/single-emphasis moments only (see The One Voice Rule).
- **Do** give every section a real, standalone heading — no eyebrow/kicker labels, ever.
- **Do** reserve JetBrains Mono for genuine data (dates, tech names) — Satoshi handles every other label.
- **Do** keep motion to one load-in moment plus the project-tile hover reveal; do not add a scroll-triggered entrance to a new section.
- **Do** verify any new text color against both `bg` and `surface` at ≥4.5:1 before shipping it.

### Don't:
- **Don't** add a gradient, glow, or blur-based halo anywhere — depth is tonal layering only.
- **Don't** hide a project's name or description behind hover-only content; hover may only add detail, never gate the baseline pitch.
- **Don't** reintroduce a kicker/eyebrow label above a heading.
- **Don't** add a second accent color; if a new state needs distinguishing, use a shade of the existing emerald scale or a neutral tone.
- **Don't** fabricate or embellish a resume fact to make a section feel more complete — content lives in `src/data/content.ts` and must stay accurate to the real record.
