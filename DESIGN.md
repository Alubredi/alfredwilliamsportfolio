# Alfred E. Williams — Design System & Engineering Manifesto (`DESIGN.md`)

> **Role & Discipline:** Writer · Editor · Creative Technologist / Web Developer  
> **Source of Truth for Portfolio Redesign & Implementation**  
> **Synthesized from:** Mijo Bello (Architectural Constructivism & Swiss Hairline Grid) + Houmahani Kane / Renault Group (Spatial 3D Storytelling, Editorial Depth & Interactive Directory)

---

## 1. Visual Theme & Design Philosophy

### The Core Concept: *"Architectural Tactility Meets Spatial Storytelling"*
Alfred's discipline bridges two worlds: the nuanced, deliberate precision of editorial writing and the dynamic, immersive architecture of creative web development. 

The design rejects generic templates, cookie-cutter "card grids", and soulless dark UI. Instead, it unites:
1. **The Architectural Rigor of Mijo Bello:** Visible 12-column hairline gridlines, exposed structural borders, utilitarian metadata tags, live multi-timezone world time ticker, and kinetic typography.
2. **The Spatial Elegance of Houmahani Kane:** Three.js / WebGL depth-reactive canvases, case-study interactive sandboxes (view-mode toggles, shader variants), full-bleed video loops, definition-list metadata tables, a dedicated slide-out "Directory" index with hover thumbnail reveal, and subtle magnetic cursor physics.

The overall atmosphere feels like an **ultra-modern editorial atelier crossed with an interactive creative laboratory**: tactile, confident, authoritative, yet fluidly alive.

---

## 2. Color System & Material Palette

The palette combines organic, literary warmth with high-contrast, modernist structure. It supports seamless light and dark modes with deliberate tonal character.

### Light Mode (Default: Editorial Studio White)
* **Canvas Background (`--bg-page`):** `#FFFFFF` — Pure crisp white canvas with high-contrast, modern editorial clarity.
* **Canvas Inset / Card Surface (`--bg-surface`):** `#F8F9FA` — Pristine subtle surface for modular containers and cards.
* **Elevated Surface (`--bg-surface-elevated`):** `#EEF0F2` — Elevated containers, hover planes, and form fields.
* **Structural Line & Grid (`--line-grid`):** `rgba(13, 17, 16, 0.08)` — Crisp, razor-thin hairline grid line.
* **Primary Ink (`--ink-primary`):** `#0D1110` — Pure editorial ink-black. Deep, authoritative, razor-sharp on white.
* **Secondary Ink (`--ink-muted`):** `#4A5450` — Editorial charcoal-graphite body & secondary narrative.
* **Faint Ink / Monospace Meta (`--ink-faint`):** `#78827E` — Tertiary archival metadata, tags, and column indices.
* **Signature Accent (`--accent-ember`):** `#C86432` / `#D4883B` — Warm terracotta-ember / raw bronze for focal moments, cursor accents, and hover active states.

### Dark Mode (Ink-Black Gallery Chamber)
* **Canvas Background (`--bg-page`):** `#090C0B` — Deep ink-black gallery abyss / volcanic mineral slate.
* **Canvas Inset / Card Surface (`--bg-surface`):** `#111614` — Deep obsidian chamber panel.
* **Elevated Surface (`--bg-surface-elevated`):** `#171E1C` — Elevated dark chamber surface.
* **Structural Line & Grid (`--line-grid`):** `rgba(255, 255, 255, 0.08)` — Subtle white architectural hairline.
* **Primary Ink (`--ink-primary`):** `#FFFFFF` — Pure white type on ink-black.
* **Secondary Ink (`--ink-muted`):** `#9EAAA5` — Soft white narrative copy.
* **Signature Accent (`--accent-ember`):** `#E28D56` / `#E8A858` — Radiant bronze-ember.

```css
:root {
  --font-display: 'Space Grotesk', -apple-system, sans-serif;
  --font-editorial: 'Fraunces', serif;
  --font-mono: 'DM Mono', monospace;
  --font-body: 'Manrope', sans-serif;

  --ease-kinetic: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-roll: 450ms;
}
```

---

## 3. Typography & Hierarchy

A dual-engine typographic personality that honors both **wordsmithing (literary editorial)** and **computational engineering (structural brutalism)**:

| Role | Font Family | Weight & Style | Tracking & Leading | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Monument** | `Space Grotesk` | 700 Bold | `letter-spacing: -0.06em` to `-0.08em`, `line-height: 0.82` | Giant hero statement (`clamp(3.5rem, 16vw, 13rem)`). |
| **Editorial Emphasis** | `Fraunces` | 500-600 Italic (Soft opsz) | `letter-spacing: -0.02em`, `line-height: 1.05` | Editorial titles, literary accentuation, philosophical quotes. |
| **Section Labels / Eyebrows** | `DM Mono` | 500 Medium Uppercase | `letter-spacing: 0.18em`, `font-size: 0.6875rem` | Section chapter stamps (`01 / FEATURED WORK`), colophons, dates. |
| **Body Narrative** | `Manrope` / `Space Grotesk` | 400 Regular / 500 Medium | `letter-spacing: -0.01em`, `line-height: 1.6` | Project descriptions, case narratives, biography paragraphs. |
| **Interactive Action / Roll** | `Space Grotesk` | 600 SemiBold Uppercase | `letter-spacing: 0.08em`, `font-size: 0.85rem` | Buttons, navigation anchors, external link indicators. |

---

## 4. Grid System & Spatial Layout

### The 12-Column Architectural Blueprint
* **Global Grid Structure:** Visible 12-column overlay on desktop (`md:grid-cols-12`) and 4-column overlay on mobile (`grid-cols-4`).
* **Hairline Gridlines:** Fixed full-screen hairline borders rendered as `<div class="fixed inset-0 pointer-events-none -z-1 grid grid-cols-4 md:grid-cols-12">` with `border-l border-[var(--line-grid)]`.
* **Container Bounds:** Flush grid-aligned cells. Every section boundary uses explicit `border-b` and `border-t` with 1px precision. No random floating bubbles; everything snaps to the mathematical grid.
* **Padding Hierarchy:**
  - Micro-cells: `p-3 md:p-4` (8px / 16px) for technical metadata and clocks.
  - Section spacing: `pt-16 md:pt-36` with border dividers instead of huge empty arbitrary margins.

---

## 5. Signature Component Patterns

### 5.1. Top Header & Precision Utility Bar
Directly aligned with the 12-column grid:
1. **Cols 1–3 (Brandmark):** `Alfred E. Williams` with tight tracking (`tracking-[-0.05em]`) and role pill.
2. **Cols 4–9 (Live World Clock & Status Marquee):** Infinite ticker displaying synchronized real-time clocks:
   - `Lagos WAT`, `London GMT`, `New York EST`, `Tokyo JST`, `San Francisco PST`.
   - Hover pauses ticker. Tabular monospace numbers with live ticking seconds.
   - Status beacon: Green pulsing dot + `Available for select Q3/Q4 commissions`.
3. **Cols 10–11 (Soundscape & Theme Toggle):**
   - **Sound Toggle:** Ambient generative audio / UI feedback toggle with 3 animated EQ bars (`.sound-toggle__bar`).
   - **Theme Switcher:** Dual-state kinetic flip button (`Light` / `Dark`) with geometric sliding indicator.
4. **Col 12 (Directory Drawer / Menu Trigger):**
   - 64x64px square grid-locked trigger button with geometric icon that morphs to `X` on open.

### 5.2. Hero Presentation: The Kinetic Split-Cell
* **Col 1–7:** Monumental typography headline with staggered character entrance + sub-headline in editorial serif italic.
* **Col 8–12:** 4:3 or 1:1 media card featuring an interactive WebGL interactive shader canvas (Three.js fluid/geometry study) or looping high-frame-rate film still, framed by hairline borders.
* **Bottom Cell Bar:** Horizontal discipline list: `[Writer]` · `[Editor]` · `[Web Developer]` · `[Creative Technologist]`.

### 5.3. Work Showcase: The Dual Filmstrip + Bento Stage (Mijo Bello Style)
* **Left Filmstrip Navigator (Width: 140px / 2.5 cols):**
  - Vertical stack of thumbnail buttons representing each project.
  - Inactive thumbnails set to `opacity: 0.35; grayscale(80%)`. Active thumbnail pops to `opacity: 1; grayscale(0%)` with indicator border.
* **Active Project Stage (Right 9.5 cols):**
  - **Header Bar:** Project title in monumental type, client/publication, year, and taxonomy tags (`Branding`, `Editorial Web`, `Three.js`, `Creative Direction`).
  - **Media Viewport:** Aspect-ratio-locked viewport with auto-looping teaser video or WebGL interactive frame.
  - **Kinetic Action:** "Explore Case Study" rolling button (`group-hover/roll`) + arrow navigation triggers (`←`, `→`).
* **Marquee Transition Ribbon:** Continuous infinite marquee border: `VIEW ALL WORKS / ARCHIVE / EXPERIMENTS / VIEW ALL WORKS / ...`.

### 5.4. Case Study Architecture: The Houmahani Depth Blueprint
For individual project deep-dives (e.g., Renault Group equivalent case studies):
1. **Hero Header:**
   - Huge project title + category label.
   - Concept statement (short 2-sentence elevator thesis).
2. **Interactive Showcase Sandbox:**
   - Real-time 3D interactive model or canvas view (drag to rotate, wheel to zoom).
   - **View Variant Toggles:** Pill buttons with magnetic hover (`data-magnet="0.22"`) allowing viewers to switch perspectives:
     - `Default Experience` · `Wireframe Topology` · `Shaders & Depth` · `Narrative Script`.
3. **Specification Table (`<dl>` Definition Grid):**
   - 4-column structured specification:
     - `Client / Publication`
     - `Year & Timeline`
     - `Role & Services` (e.g., Lead Developer, Copywriter, Editorial Director)
     - `Tech Stack & Tools` (e.g., Three.js, GSAP, WebGL, Next.js, DaVinci Resolve)
4. **Narrative & Challenge Blocks:**
   - Split-column layout: Left column = Problem Statement & Strategy; Right column = Technical Implementation & Execution.
   - Large full-bleed looping video or high-resolution zoomable gallery.
5. **Interactive Lightbox:**
   - Clicking media triggers an accessible modal lightbox (`role="dialog"`, `aria-modal="true"`) with video playback controls and detailed technical annotations.
6. **Results & Industry Recognition:**
   - Metrics, publication features, citations, or client testimonials.

### 5.5. The Slide-Out "Directory" Drawer (The Full Archive)
* A full-screen or 70vw side-drawer triggered from the header "Directory" button.
* Contains organized tabs:
  - `01 / Featured Work`
  - `02 / Editorial & Writing`
  - `03 / Code Experiments & Creative Dev`
  - `04 / Recognition & Press`
* **Table Row Hover Reveal:** Hovering over any table row in the directory dynamically projects a floating thumbnail/video preview (`.site-directory__thumbnail-reveal`) alongside cursor movement, giving a rapid, responsive preview of 20+ projects in seconds.

### 5.6. Services Accordion: Expand-on-Hover Grid Cells
* Numbered rows (`01`, `02`, `03`):
  - `01 — Editorial & Long-Form Writing`
  - `02 — Creative Web Development & 3D WebGL`
  - `03 — Brand Storytelling & Content Strategy`
* On desktop hover, the row expands smoothly from `min-h-[220px]` to `min-h-[340px]` (`transition-[min-height] 600ms cubic-bezier(0.16, 1, 0.3, 1)`), revealing an embedded looping video/visual asset and expanded sub-capabilities.

### 5.7. Footer & Contact Terminal
* **Colophon & Elsewhere Section:** Clean grid with live links to GitHub, LinkedIn, Substack/Medium, X/Twitter, and Instagram.
* **One-Click Copy Email:** High-affordance button with instant tooltip feedback: `alfred@example.com` (Click to copy → "Copied to clipboard!").
* **Gigantic Monumental Footnote Wordmark:** Giant masked typography spanning 100% width: `WILLIAMS.` or `ALFRED.` sitting flush at the baseline of the viewport.

---

## 6. Motion Design & Micro-Interactions

| Interaction | Trigger | Timing / Easing | Visual Behavior |
| :--- | :--- | :--- | :--- |
| **Kinetic Text Roll** | Link/Button hover | `450ms cubic-bezier(0.65, 0, 0.35, 1)` | Two identical spans stacked: active span moves up `translate-y-full`, duplicate span rolls in from `-translate-y-full`. |
| **Magnetic Pull** | Pointer within 40px of button | `250ms cubic-bezier(0.25, 1, 0.5, 1)` | Button subtly shifts position toward cursor (`data-magnet="0.22"`). |
| **Custom Cursor** | Mouse movement | Smooth Lerp (`0.15`) | Small sharp center dot + 34px geometric hairline ring that expands to 56px over interactive elements. |
| **3D Room Intro Preloader** | Page initial load | `1400ms` total sequence | Wireframe isometric 3D room with ticking counter (`000` to `100`), opening like vertical blinds via `clip-path: inset(0% 0% 0% 0%)`. |
| **Smooth Scrolling** | Wheel / Touch inertia | Lenis (`lerp: 0.1`, `duration: 1.2`) | Butter-smooth inertial scrolling synchronizing HTML and Three.js background canvas. |
| **Marquee Banners** | Continuous animation | `25s linear infinite` | Pauses on mouse enter (`group-hover:[animation-play-state:paused]`). |

---

## 7. Sensory & Ambient Layer (Audio)

* **Opt-in Ambient Soundscape:** Subtle Web Audio API generative synthesizer drone or mechanical keyboard click feedback on interactive buttons.
* **Mute by Default:** Respects user preferences. Visible EQ icon in header shows audio state. State saved in `localStorage`.

---

## 8. Accessibility & Semantic Graceful Degradation

* **Strict Semantic HTML5:** `<header>`, `<main>`, `<section>`, `<article>`, `<dl>`, `<dt>`, `<dd>`, `<footer>`, `<nav>`.
* **`<noscript>` Fallback Manifesto (from Houmahani):**
  If WebGL or JavaScript is disabled or fails to load, the site gracefully degrades to an exquisite, editorial Swiss-typeset archive layout where every project, image, case study, and contact method is 100% accessible and indexable by search engines.
* **Motion Reduction:** Full `@media (prefers-reduced-motion: reduce)` support disabling 3D rotational loops and replacing kinetic rolls with crisp immediate opacity fades.
* **Keyboard Navigation:** High-contrast focus rings (`outline: 2px solid var(--accent-ember); outline-offset: 3px`) on all interactive buttons, dialog traps, and esc-key close listeners.

---

## 9. Implementation Roadmap for Alfred's Update

1. **Phase 1: Design Tokens & Layout Skeleton:**
   - Implement the 12-column Swiss hairline grid overlay.
   - Configure CSS custom properties for Light/Dark themes and typography.
2. **Phase 2: Header Utility Bar & Hero Stage:**
   - Build the live world-clock marquee and theme/sound switcher.
   - Scaffold the kinetic split-hero with Alfred's photography and bold headline.
3. **Phase 3: Work Showcase & Filmstrip Carousel:**
   - Integrate Mijo Bello-style vertical thumbnail filmstrip with interactive preview.
   - Build category tag pills, slide transitions, and infinite marquee divider.
4. **Phase 4: Case Study Architecture & Houmahani Lightbox:**
   - Build modular case study templates with `<dl>` specification grids, view toggles, and modal video lightboxes.
5. **Phase 5: The "Directory" Full Archive Drawer:**
   - Build the slide-out catalog with hover-triggered floating media reveal.
6. **Phase 6: Sensory Polish, Lenis Smooth Scroll & 3D WebGL Accents:**
   - Hook up Lenis smooth scrolling, Three.js subtle canvas interaction, magnetic cursor, and one-click email copy.
