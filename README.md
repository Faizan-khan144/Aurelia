# Aurelia

A marketing and booking site for a small coastal retreat — nine rooms above the water,
a single long table for dinner, and no programme of activities.

Built as an original concept site. Layout and feature set were inspired by common hotel
and resort landing page patterns (navigation, hero, booking widget, room listings,
amenities, gallery, testimonials, journal, contact), but the branding, copy, colour
system, typography and component design here are written from scratch.

---

## Table of contents

- [Overview](#overview)
- [Design direction](#design-direction)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Sections](#sections)
- [Motion system](#motion-system)
- [Content model](#content-model)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Customising](#customising)
- [Scripts](#scripts)

---

## Overview

Aurelia is a single-page site for a fictional boutique property. The goal was a page
that feels premium and editorial while staying genuinely fast: no UI framework, no
animation library, no router — just React, Tailwind and hand-written CSS.

The booking widget is a front-end interaction only. It validates dates, calculates
nights and shows a confirmation state; it is not wired to a backend or payment
provider.

---

## Design direction

Rather than the usual blue-and-white hotel template, the site uses an editorial
approach built on a small, disciplined palette.

| Token | Value | Used for |
| --- | --- | --- |
| `ink` | `#10201b` | Headings, dark sections |
| `bone` | `#f6f2ea` | Page background |
| `sand` | `#ebe4d7` | Alternating section background |
| `sea` | `#1f4f43` | Amenities section, footer accents |
| `sea-deep` | `#143830` | Footer, booking button |
| `clay` | `#c2643c` | Single accent — eyebrows, prices, CTA |
| `mist` | `#6b7a74` | Muted body text |

Type is split in two: a serif display face (`Fraunces`, falling back to Iowan Old
Style and Georgia) carries headings, quotes and numerals; a neutral sans (`Inter`,
falling back to the system stack) handles body copy and interface labels.

Rounded corners are used sparingly — pill buttons, 2xl cards — so the page reads
closer to print than to a dashboard.

---

## Tech stack

- **React 19** — components, hooks, `StrictMode`
- **Vite 8** — dev server and production build
- **Tailwind CSS 4** — via `@tailwindcss/vite`, theme defined in `@theme` in `index.css`
- **lucide-react** — icon set
- **oxlint** — linting

Deliberately absent: no `react-router`, no `framer-motion`, no CSS-in-JS, no state
library. Everything runs on IntersectionObserver and CSS transitions.

---

## Getting started

Requires Node 18 or newer.

```bash
npm install
npm run dev
```

The dev server starts at `http://127.0.0.1:1450`.

```bash
npm run build    # production build into dist/
npm run preview  # serve the built output locally
npm run lint     # oxlint
```

---

## Project structure

```
aurelia/
├── index.html                 # document shell, fonts, hero preload
├── vite.config.js             # React + Tailwind plugins
├── package.json
└── src/
    ├── main.jsx               # entry point
    ├── App.jsx                # section order
    ├── index.css              # Tailwind import, @theme tokens, motion CSS
    ├── data/
    │   └── content.js         # all copy, rooms, gallery, journal, image helper
    └── components/
        ├── Header.jsx         # sticky nav + full-screen mobile menu
        ├── Hero.jsx           # cross-fading slideshow + split headings
        ├── BookingBar.jsx     # date / room / guest form with nights count
        ├── Story.jsx          # about section with overlapping images + stats
        ├── Rooms.jsx          # four room cards with price and specs
        ├── Rituals.jsx        # numbered amenities list on the dark section
        ├── Gallery.jsx        # responsive masonry-style image grid
        ├── Testimonials.jsx   # carousel with quote, avatar, star row
        ├── Journal.jsx        # three article teaser cards
        ├── CallToAction.jsx   # closing reservation block
        ├── Footer.jsx         # contact, links, back-to-top
        └── Motion.jsx         # Reveal, MaskImage, SplitHeading, CountUp
```

---

## Sections

**Header** — transparent over the hero, then switches to a blurred bone background
after 40px of scroll. Desktop shows inline links with an underline that grows on
hover; mobile opens a slide-in drawer that locks body scroll.

**Hero** — three-slide cross-fade with a slow scale, dark gradient scrims for text
contrast, animated per-word heading reveal, and dot indicators. Slides auto-advance
every six seconds and pause on manual selection.

**Booking bar** — overlaps the bottom of the hero. Four fields (arrive, depart, room,
guests) plus a submit button that live-computes the number of nights and swaps to a
confirmation state for three seconds. Dates are clamped so departure cannot precede
arrival.

**Story** — asymmetric two-column layout: a tall image with a smaller square
overlapping it, a floating pull-quote badge, the house narrative, and four animated
counters.

**Rooms** — four cards with image zoom on hover, a tag chip, price per night, and a
spec row for size, bed and occupancy.

**Rituals** — the dark `sea` section. Five amenities as a numbered list with circular
icons that invert on hover, plus two slow counter-rotating rings in the background.

**Gallery** — a four-column masonry grid where selected tiles span two rows or two
columns. Each image reveals with a clip-path wipe and shows its caption on hover.

**Testimonials** — a quote card with initials avatar and star row, driven by buttons
and dot indicators, sitting beside a short introduction.

**Journal** — three article cards with category chip, date, read time and hover
colour shift on the title.

**Call toAction** — full-bleed dark block with a tinted background image, grain
overlay, reservation buttons and a three-column check-in / check-out / directions
strip.

**Footer** — four columns on `sea-deep`: brand blurb with social buttons, site
navigation, visit details and contact details, plus a legal row with back-to-top.

---

## Motion system

All motion lives in `src/index.css` and `src/components/Motion.jsx`. Nothing pulls in
an animation library.

**Primitives**

| Export | Purpose |
| --- | --- |
| `Reveal` | Fades and lifts children into place on scroll, with a stagger delay |
| `MaskImage` | Reveals an image with a top-to-bottom `clip-path` wipe and slight scale |
| `SplitHeading` | Splits copy into words and slides each one up from behind a mask |
| `CountUp` | Eases an integer up to its target when it enters the viewport |

**CSS classes**

- `.rise` / `.mask` / `.word` — the three reveal primitives above
- `.shine` — a sweeping highlight used on primary buttons
- `.spin-slow` — decorative rings in the amenities section
- `.grain` — SVG noise overlay for the closing CTA
- `.drift`, `.ticker`, `.shimmer` — ambient loops available for reuse

**Reduced motion** — every animation and transition is disabled under
`prefers-reduced-motion: reduce`, reveal components resolve to their final state
immediately, and observers are not attached at all.

IntersectionObserver options are tuned per primitive — a `0.14` threshold with a
negative bottom root margin for reveals, `0.3` for headings, `0.5` for counters — so
elements trigger as they genuinely enter view rather than at the screen edge.

---

## Content model

All copy lives in `src/data/content.js`. Nothing is hard-coded inside components,
so the property can be rebranded by editing one file.

```js
export const heroSlides = [...]   // hero rotation
export const rooms = [...]        // name, tag, price, size, bed, guests, blurb, image
export const rituals = [...]      // amenities with a lucide icon name
export const testimonials = [...] // quote, name, role, initials
export const journal = [...]      // date, kicker, title, read time, image
export const gallery = [...]      // image id, alt text, span hint
export const navLinks = [...]     // header and footer navigation
```

Images are served from Unsplash through a single helper:

```js
img('1566073771259-6a8506099945', 1600, 68)
// → https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=68&auto=format&fit=crop
```

Swap the helper to point at your own CDN or `public/` assets and the whole site
follows.

---

## Performance

Production build, gzipped:

```
dist/index.html                 0.54 kB
dist/assets/index-*.css         8.01 kB
dist/assets/index-*.js         81.39 kB
```

Techniques used:

- **No framework overhead** — zero animation, router or state libraries
- **Lazy images** — everything below the fold is `loading="lazy"` with
  `decoding="async"`
- **Eager hero** — the first slide is preloaded in `index.html` with
  `fetchpriority="high"`
- **Responsive image sizing** — the `img()` helper passes an explicit width per slot
  instead of loading one large asset everywhere
- **CSS-driven motion** — transforms and opacity only, so animation stays on the
  compositor
- **Passive listeners** — the scroll handler uses `{ passive: true }`
- **One font family pair** — display and body faces only, with safe system fallbacks

---

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `footer`
- `aria-label` on all icon-only buttons and the primary navigation
- `aria-current` on the active hero slide and testimonial indicator
- `aria-hidden` on decorative images, rings and the grain overlay
- Headings carry an `aria-label` where the visible text is split into animated spans
- Focus-visible outlines in `sea` with a 3px offset
- Mobile drawer sets `aria-hidden` when closed and restores scroll on unmount
- Full `prefers-reduced-motion` support
- Text contrast targets AA against every background used

---

## Customising

**Rebrand** — edit the colour tokens in the `@theme` block of `src/index.css` and the
font stacks beside them. Every component reads from those tokens.

**Rewrite the property** — edit `src/data/content.js`.

**Swap images** — replace the `img()` helper, or drop files into `public/` and point
at them directly.

**Change section order** — reorder or remove components in `src/App.jsx`.

**Wire up real booking** — `BookingBar.jsx` already collects dates, room and guest
count in component state. Point the `submit` handler at your API.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on `127.0.0.1:1450` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |

---

## Notes

- Aurelia is a fictional property created for demonstration purposes.
- Photography is loaded from Unsplash and is not included in this repository.
- The booking form is UI-only; no data is transmitted or stored.
