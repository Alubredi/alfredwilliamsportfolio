# Alfred E. Williams — David Estrada Design Transformation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform Alfred E. Williams' portfolio website into a high-impact, editorial design system inspired by David Estrada (`https://david-estrada.dev/`), featuring a 4-tier color palette (Primary: White, Secondary: Red, Tertiary: Black, Quaternary: Gray), colossal typography, alternating high-contrast section rhythm, and silky micro-interactions, while strictly preserving 100% of existing content, text, case studies, pricing, pictures, and links.

**Architecture:** A lightweight, high-performance vanilla CSS and semantic HTML5 architecture. Replaces the previous sci-fi blueprint / mineral-slate theme with clean CSS tokens, colossal grotesque display typography, high-contrast alternating cuts (Crisp White and Deep Jet Black), refined card layouts with subtle hover image scaling, and fluid IntersectionObserver scroll reveals.

**Tech Stack:** Semantic HTML5, Vanilla CSS3 (Custom Properties & Modern Grid/Flexbox), ES6+ JavaScript, Google Fonts (`Space Grotesk`, `Fraunces`, `Manrope`, `DM Mono`), Inline Optimized SVGs.

---

### Task 1: Foundation — Design Tokens & Core CSS Engine Overhaul

**Files:**
- Modify: `css/main.css:8-56` (CSS Custom Properties & Color Tokens)
- Modify: `css/main.css:112-140` (Remove sci-fi blueprint grids and orbit rings)
- Modify: `css/main.css:150-350` (Typography scale, button variants & card styles)

**Step 1: Overhaul CSS Custom Properties for the 4-Tier Color Foundation**
- Define `--bg-page: #FFFFFF`, `--bg-surface: #F4F5F7`, `--bg-surface-elevated: #FFFFFF`, `--bg-inverted: #0A0A0A`.
- Define `--accent-red: #E52E2E`, `--accent-red-hover: #D92323`, `--accent-red-soft: rgba(229, 46, 46, 0.08)`.
- Define `--ink-primary: #0A0A0A`, `--ink-muted: #4B5563`, `--ink-faint: #6B7280`, `--ink-inverted: #FFFFFF`.
- Define `--line-grid: #E5E7EB`, `--line-grid-strong: #D1D5DB`.
- Configure Dark Mode overrides (`[data-theme="dark"]`) with deep carbon black canvas (`#0A0A0A`), crisp white inverted sections, and luminous red accents (`#FF3B30`).

**Step 2: Strip Out "Cloud-Type / Sci-Fi" Overlays**
- Deprecate or disable the `.structural-grid-overlay` (blueprint lines) and `.hero-orbit-stage` (concentric circles/dust) from rendering clutter.
- Set clean, solid background rendering without artificial tech noise.

**Step 3: Implement David Estrada-Inspired Typography & Button Components**
- Establish colossal hero title utility (`font-size: clamp(3.5rem, 8.5vw, 7.5rem); letter-spacing: -0.05em; line-height: 0.95`).
- Refactor `.btn-solid` into a bold Red pill (`background-color: var(--accent-red); color: #fff; border-radius: 9999px; font-weight: 700; transition: transform 0.2s ease, background-color 0.2s ease`).
- Refactor `.btn-outline` into an architectural gray pill with hover fill.

**Step 4: Verify in Browser & Validate Design Token Cohesion**
- Inspect CSS rendering in browser to confirm zero styling errors and pure white canvas with sharp red/black accents.

---

### Task 2: Minimalist Sticky Header & Instant Preloader Modernization

**Files:**
- Modify: `index.html:17-46` (Preloader modernization)
- Modify: `index.html:60-107` (Header layout)
- Modify: `css/main.css:400-550` (Header & preloader styling)
- Modify: `js/components.js:20-80` (Header and availability beacon logic)

**Step 1: Modernize Header into a Floating Editorial Bar**
- Update `.site-header` to have a clean, frosted glass backdrop (`backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.85); border-bottom: 1px solid var(--line-grid)`).
- Brandmark: Bold `Alfred E. Williams` with a subtle pulsing green/red status indicator ("Available for projects").
- Add high-intent Red Action Button in header: `Let's Talk →` linking to `contact.html`.

**Step 2: Streamline Preloader to Eliminate Annoying Waits**
- Replace the lengthy sci-fi countdown with an instantaneous or ultra-fast smooth entrance so the user lands directly on the monumental content without friction.

**Step 3: Test Header Responsiveness & Mobile Menu**
- Confirm mobile drawer opens cleanly and desktop navigation floats elegantly.

---

### Task 3: Homepage Hero Transformation — Colossal Impact & Personality

**Files:**
- Modify: `index.html:111-233` (Hero Section Markup)
- Modify: `css/main.css:560-800` (Hero Section Styling)

**Step 1: Rebuild Hero Structure Inspired by David Estrada**
- Remove viewfinder crosshair coordinate bars (`06°31' N...`) and sci-fi tags.
- Create a monumental hero typography block:
  - Eyebrow: `● Available for Consultations & Bespoke Commissions · Lagos / Global` (pill badge).
  - Colossal Headline:
    ```html
    <h1 class="hero-monumental-title">
      Full-Cycle Developer, AI Trainer &amp; <em>Editorial Director.</em>
    </h1>
    ```
  - Sub-headline with Personality (Preserving Alfred's exact words):
    ```html
    <p class="hero-sublead">
      I'm Alfred — a writer, editor, and pedagogical trainer at my core, and a full-cycle web architect and enterprise AI acceleration advisor by trade. Over the past decade I've advised enterprises, trained teams, built high-performance digital systems, and directed high-stakes editorial and admissions strategies.
    </p>
    ```
- Primary Action Bar:
  - Red Solid Pill: `Explore Selected Works ↓`
  - Outline Gray Pill: `Services & Pricing Matrix →`
  - Outline Gray Pill: `Book Strategic Call →`

**Step 2: Refine Alfred's Portrait Framing**
- Showcase Alfred's portrait (`assets/alfred-2d-cartoon-portrait.jpg` or `Alfred photo.jpg`) inside a clean, high-fashion frame with soft corners, subtle border, and floating credential badge.

**Step 3: Test Hero Layout at Desktop & Mobile Breakpoints**
- Ensure flawless responsive scaling down to mobile screens (375px) without text clipping or horizontal overflow.

---

### Task 4: Streamlined Credibility Ribbon (Metrics & Proof)

**Files:**
- Modify: `index.html:235-312` (Metrics Section Markup)
- Modify: `css/main.css:850-980` (Metrics Styling)

**Step 1: Restyle Metrics into an Architectural Gray Band**
- Background: Soft architectural gray (`var(--bg-surface)` / `#F4F5F7`) with crisp top and bottom hairline borders (`#E5E7EB`).
- Cards: Minimalist typographic statistic blocks with bold numbers (`Space Grotesk`, bold, black with subtle red accents) and clean labels.
- Preserved Data:
  - `10+` Years Cross-Disciplinary Experience
  - `551` Lagos SMEs Mapped Across 9 Districts
  - `90%+` Admissions & Visa Approval Rate
  - `50%` Onboarding Time Slashed via Manuals
  - `145p` Counter-Terrorism Policy Edited (PCNI)

---

### Task 5: Selected Works & Case Studies — David Estrada Card Architecture

**Files:**
- Modify: `index.html:465-577` (Selected Works Section Markup)
- Modify: `css/main.css:1200-1450` (Case Study & Reel Styling)

**Step 1: Redesign Case Study Cards for Maximum Visual Polish**
- Switch to an expansive, high-impact 2-column or asymmetric grid layout.
- Media Viewport: High-resolution screenshots of real projects (`Renalytica`, `AXiA Active`, `GoFar Academy`, `My WORLD of Literature`).
- Hover Physics: Image scales gently (`transform: scale(1.025); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)`), card frame gains subtle red accent hairline.
- Card Body: Clean category tags (`ENTERPRISE DATA · 2026`, `E-COMMERCE · 2025`, `EDTECH`, `LITERARY JOURNAL`), bold title, concise description, and dual action triggers (Red Case Study Button + Live External Link ↗).

**Step 2: Verify Image Loading & Touch Interaction**
- Ensure images are crisp, responsive, and render immediately.

---

### Task 6: The 5 Consulting Practices — Inverted Jet-Black High-Contrast Cut

**Files:**
- Modify: `index.html:314-462` (Consulting Practices Section Markup)
- Modify: `css/main.css:1000-1200` (Inverted Section & Service Row Styling)

**Step 1: Deliver High-Impact Visual Contrast**
- Section background: Deep Jet Black (`#0A0A0A`) with crisp white typography and vivid red numeral highlights (`01`, `02`, `03`, `04`, `05`).
- Header: "Disciplined Client Practices — Five Core *Consulting Practices*".
- Numbered Service Rows:
  - `01 / Corporate & SME AI Acceleration` (AI Video, Ads, Web Design, Photoshoots, Filmmaking across Fashion, Fitness, Hospitality).
  - `02 / Full-Cycle Web Architecture & Digital Systems` (Sprint MVPs ₦450k, Storefronts ₦950k, Enterprise Suites ₦1.85M).
  - `03 / Standardized Test Prep & Admissions Advisory` (IELTS 8.5+, TOEFL iBT, GRE, OET Healthcare, US F-1 Visa).
  - `04 / Academic Research Writing & Editorial Consulting` (Peer-Reviewed Papers, Theses, 145p Policy, Whitepapers).
  - `05 / Creative Direction, Motion & Video Production` (Brand Identity, Lottie/GSAP Motion, Video Editing).
- Action Trigger: Red circle arrow that rotates 45° on hover and links directly to detailed pricing on `services.html`.

**Step 2: Modernize Corporate Proposal Callout Box**
- Restyle the bottom banner into a sleek dark card with red border and "Request Corporate Proposal →" red button.

---

### Task 7: 1-to-8 Content Repurposing Engine & Core Principles Section

**Files:**
- Modify: `index.html:579-766` (Repurposing Engine & Principles Markup)
- Modify: `css/main.css:1500-1750` (Grid Styling)

**Step 1: Clean Up 1-to-8 Repurposing Engine**
- Remove heavy vector drafting compass and coordinate lines.
- Transform the 8 assets into a clean, modern bento grid with refined iconography and red tag accents:
  - 01 LinkedIn PDF Carousel
  - 02 Viral X (Twitter) Thread
  - 03 Instagram Infographic
  - 04 Executive Newsletter
  - 05 SEO Pillar Blog Post
  - 06 Short Video Script
  - 07 Data Quote Cards
  - 08 Executive One-Pager

**Step 2: Add David Estrada-Style "4 Core Principles" Section**
- Lay out Alfred's working philosophy in 4 clean, authoritative cards:
  - `01 / Human Voice First`
  - `02 / Zero Bloat Architecture`
  - `03 / Transparent Commercial Alignment`
  - `04 / Cross-Disciplinary Rigor`

---

### Task 8: Monumental Conversion Footer & Contact Terminal

**Files:**
- Modify: `index.html:788-850` (Footer Markup)
- Modify: `css/main.css:1800-2000` (Footer Styling)
- Modify: `js/components.js:150-220` (1-Click Copy Interaction)

**Step 1: Build the Monumental Footer Stage**
- Background: Jet Black (`#0A0A0A`) with pure white typography.
- Headline: Colossal display title `LET'S BUILD SOMETHING EXTRAORDINARY.`
- Interactive Email Pill: One-click copy with instant feedback tooltip ("Copied to clipboard!").
- Direct phone call trigger (`+234 817 693 9974`) and LinkedIn link.
- Massive architectural brand signature `WILLIAMS.` in muted dark gray.

---

### Task 9: Cascading Style Cohesion Across Secondary Pages

**Files:**
- Modify: `services.html` (Apply White/Red/Black theme to packages & pricing table)
- Modify: `works.html` (Apply White/Red/Black theme to full project archive)
- Modify: `about.html` (Apply White/Red/Black theme to biography, research & principles)
- Modify: `brands.html` (Apply White/Red/Black theme to social ecosystems & feeds)
- Modify: `contact.html` (Apply White/Red/Black theme to consultation inquiry form)

**Step 1: Ensure Uniform Visual Identity**
- Verify that all secondary pages inherit the updated CSS variables (`--bg-page: #FFFFFF`, `--accent-red: #E52E2E`, etc.) and typography scale.
- Confirm that all forms, pricing tables, and links function seamlessly without broken styles.

---

### Task 10: Cross-Browser Verification & Visual Polish

**Files:**
- Inspect in browser subagent / local preview.
- Verify desktop, tablet, and mobile viewport layouts.
- Ensure 0 console errors, fast load time, and high accessibility contrast (WCAG AAA for Black on White, AA for Red accents).
