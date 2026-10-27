# Implementation Plan: Service Landing Pages, Header Grid Alignment, Mobile Menu & 2D Visual Enrichment

> **Goal:** 
> 1. Align the two-tier header so that both Row 1 (`Alfred E. Williams`) and Row 2 (`HOME`, `WORKS`, `BRANDS & SOCIAL`, etc.) begin at the exact same left grid anchor line.
> 2. Rename `Directory` to `Menu` across desktop and mobile.
> 3. Refine mobile header scroll behavior with fluid, non-intrusive frosted translucency.
> 4. Build dedicated, high-converting landing pages for all service pillars under `services.html` with rich 2D cartoon illustrations (`assets/illust-*`), icons, benefits, and transparent dual-currency pricing.
> 5. Generate new custom 2D illustrations with AI wherever appropriate to add to Alfred's assets.
> 6. Enrich `about.html` and other text-heavy pages with 2D illustrations as visual "breathers" to eliminate text fatigue.
> 7. Add a `SERVICES ▾` dropdown in the global navigation menu.

---

## 1. User Feedback & Architectural Requirements

### 1.1 Header Grid Alignment (Start-Line Alignment)
- **Problem:** Currently, `Alfred E. Williams` is pushed to the far left edge of the container, while the navigation links on Row 2 are centered in isolation, causing a disjointed visual balance.
- **Solution:** 
  - Align both rows to begin at the exact same left coordinate (left-aligned with the container's structural grid).
  - **Row 1:** 
    - Left: `● Alfred E. Williams` (aligned to container left).
    - Right: `Let's Talk →`, Theme Toggle, and `Menu` button (aligned to container right).
  - **Row 2:** 
    - Begins at the exact same left line: `HOME`, `WORKS`, `BRANDS & SOCIAL`, `ABOUT ▾`, `SERVICES ▾`, `TRAINING ▾`, `CONTACT` with generous breathing room (28px–32px gaps).

### 1.2 "Directory" → "Menu" Renaming
- Change the button label from `Directory` to `Menu` across:
  - Header desktop button (`.directory-trigger-btn` -> `.menu-trigger-btn`)
  - Drawer heading (`Project Archive & Directory` -> `Navigation Menu & Archive`)
  - Mobile trigger icons and labels.

### 1.3 Fluid Mobile Scroll Behavior
- On mobile screens, prevent the header from feeling choked or encroaching on content.
- Implement an ultra-clean, lightweight mobile header:
  - Shows `● Alfred E. Williams` and `Menu` button.
  - On scroll down: smoothly transitions into an ultra-compact frosted glass ribbon (or hides off-screen).
  - On scroll up: smoothly glides back into view without jitter or layout shifts.

### 1.4 Visual Breathers & 2D Cartoon Generation via AI
- **Break Up Text Fatigue:** Pages like `about.html` (the 4 chapters and skills matrix) and sections across the site are currently text-dense.
- **Visual Rhythm:** Insert 2D editorial cartoon illustrations alongside text blocks to serve as visual breathers.
- **Asset Generation:** If an exact illustration does not already exist in `assets/`, generate it using Gemini (`generate_image`) in the exact on-brand 2D flat cartoon style:
  - Character features: Sharp, charismatic African professional with trimmed beard, modern smart-casual attire.
  - Style: Clean 2D flat editorial line art, warm architectural color palette (ochre, terracotta, charcoal, soft cream, sage).
  - Subject matter: Coding & web architecture, economic fieldwork in Lagos, pitch deck presentations, book rewriting/humanizing, and digital marketing retainers.

---

## 2. Dedicated Service Landing Pages Overview

Every service currently featured on `services.html` will have its own dedicated, content-rich landing page:

| Service Pillar | Landing Page | Key Offers & Deliverables | 2D Cartoon Illustration & Visuals |
| :--- | :--- | :--- | :--- |
| **01. Corporate AI Training** | `ai-training.html` *(Live)* | 1-Day Executive Workshop, 2-Week Team Accelerator, Custom AI SOPs, Data Security Protocol + `ai-pitch-deck.html` | `illust-ai-masterclass.jpg`<br>`illust-ai-team-sprint.jpg`<br>`illust-ai-chief-retainer.jpg` |
| **02. Web & App Development** | `web-development.html` *(New)* | Starter Business Sites (₦180k), Growth Web Apps (₦450k), Bespoke Platforms (₦850k+), sub-100ms speed, Next.js/Vanilla architecture | `illust-sprint-mvp.png`<br>`illust-ecommerce-storefront.png`<br>`illust-enterprise-data-suite.png` |
| **03. Business Writing & Pitch Decks** | `business-writing.html` *(New)* | Company Profiles (₦120k), Investor Pitch Decks (₦180k), Business Proposals (₦95k), Grant Applications, Brand Books | `illust-creative-director.jpg`<br>`illust-brand-identity.jpg`<br>*Custom generated if needed* |
| **04. Editorial Polish & AI Humanizing** | `editorial-writing.html` *(New)* | AI Content Humanizing & Rewriting, Book/Manuscript Ghostwriting, Academic Theses Polish, Policy Whitepapers (PCNI Case) | `illust-editorial-writing.png`<br>`illust-policy-whitepaper.jpg` |
| **05. Digital Marketing & Social Retainers** | `digital-marketing.html` *(New)* | Social Media Management (₦150k/mo), Paid Ads & Lead Generation, Creative Reels, Multi-Brand Authority Retainers | `illust-tri-brand-strategy.png`<br>`illust-video-cutdown.jpg`<br>*Custom generated if needed* |
| **06. Skills & Test Coaching** | `training.html` *(Live)* + `ielts-prep.html` *(Live)* | IELTS 8.5+ Intensive, TOEFL iBT, GRE, Web Dev Mentorship, SOP Admissions Coaching | `illust-prep-diagnostic.jpg`<br>`illust-prep-accelerator.jpg`<br>`illust-prep-visa.jpg` |

---

## 3. Dedicated Landing Page Structure & Aesthetics

Each new landing page will follow a high-converting, clean, soft editorial design:
1. **Hero Stage:**
   - Pill badge: e.g. `● Available for Commissions · 2026 Engagement Schedule`
   - Monumental display headline with editorial italic accent.
   - Clear value proposition sub-lead.
   - Dual-currency investment pill: e.g. `From ₦180,000 / $200 · 7-Day Sprint Delivery`.
   - Action triggers: `Book on WhatsApp ↗` and `View Packages & Deliverables ↓`.
2. **2D Cartoon Illustration Showcase:**
   - High-resolution cartoon illustrations visually anchoring every tier and key feature.
3. **Core Offers & Deliverables Breakdown:**
   - 3-column / 2-column feature cards with icons (deliverables, timelines, tech specs, revision policies).
4. **Who It's For & Benefits (ROI Proof):**
   - Practical business advantages (saving hours, closing funding, winning clients, accelerating career).
5. **Detailed Package Pricing Cards:**
   - Transparent pricing in Nigerian Naira (₦) and USD ($).
   - "Order via WhatsApp" button with pre-filled message for each package.
6. **FAQ Accordion & Direct Strategy Call Booking:**
   - Common questions answered with zero fluff.
   - Back to Services link & WhatsApp floating button.

---

## 4. Visual Breathers on `about.html`

In `about.html`, inject 2D cartoon illustrations alongside each of the 4 biography chapters and keynote section:
- **Chapter 01 (UNILAG Literary Studies & Editorial):** Insert `assets/illust-editorial-writing.png` (Alfred at writing desk).
- **Chapter 02 (Lagos 551 SMEs Field Study):** Generate / insert an illustration showing Alfred conducting field research across Lagos districts.
- **Chapter 03 (Academic Operations & High-Stakes Admissions):** Insert `assets/illust-prep-visa.jpg` or `assets/illust-prep-accelerator.jpg`.
- **Chapter 04 (Movement, Dance & Sound Studio):** Generate / insert an illustration of sonic design and choreography.
- **Keynote Section:** Anchor the speaking topics with an on-stage presentation illustration (`assets/otec-speaking-real.png` or generated).

---

## 5. Navigation & Global Cross-Linking

### 5.1 Global Navigation (`SERVICES ▾` Dropdown)
Update the navigation across all HTML pages:
```html
<li class="nav-item-dropdown">
  <a href="services.html" class="nav-link nav-link-dropdown" aria-expanded="false" aria-haspopup="true">
    <span>Services</span>
    <svg class="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
  </a>
  <div class="nav-dropdown-menu" role="menu">
    <a href="services.html" class="nav-dropdown-item" role="menuitem">
      <span class="dropdown-item-title">All Services Overview</span>
      <span class="dropdown-item-desc">Complete service matrix &amp; pricing</span>
    </a>
    <a href="ai-training.html" class="nav-dropdown-item" role="menuitem">
      <span class="dropdown-item-title">Corporate AI Training ↗</span>
      <span class="dropdown-item-desc">Workforce acceleration &amp; SOPs</span>
    </a>
    <a href="web-development.html" class="nav-dropdown-item" role="menuitem">
      <span class="dropdown-item-title">Web &amp; App Development ↗</span>
      <span class="dropdown-item-desc">Fast websites, MVPs &amp; custom platforms</span>
    </a>
    <a href="business-writing.html" class="nav-dropdown-item" role="menuitem">
      <span class="dropdown-item-title">Business Writing &amp; Pitch Decks ↗</span>
      <span class="dropdown-item-desc">Investor pitch decks &amp; company profiles</span>
    </a>
    <a href="editorial-writing.html" class="nav-dropdown-item" role="menuitem">
      <span class="dropdown-item-title">Editorial Polish &amp; AI Humanizing ↗</span>
      <span class="dropdown-item-desc">Ghostwriting, books &amp; AI text refinement</span>
    </a>
    <a href="digital-marketing.html" class="nav-dropdown-item" role="menuitem">
      <span class="dropdown-item-title">Digital Marketing &amp; Retainers ↗</span>
      <span class="dropdown-item-desc">Social media, paid ads &amp; brand growth</span>
    </a>
    <a href="training.html" class="nav-dropdown-item" role="menuitem">
      <span class="dropdown-item-title">Skills &amp; Test Coaching ↗</span>
      <span class="dropdown-item-desc">IELTS 8.5+, web dev &amp; mentorship</span>
    </a>
  </div>
</li>
```

### 5.2 Services Page CTA Integration (`services.html`)
On `services.html`, inside each of the 6 practice sections, add a direct CTA link button:
- Practice 01: `Explore Corporate AI Training Page ↗` (`ai-training.html`)
- Practice 02: `Explore Web & App Development Details ↗` (`web-development.html`)
- Practice 03: `Explore Pitch Decks & Business Writing Suite ↗` (`business-writing.html`)
- Practice 04: `Explore AI Humanizing & Editorial Polish ↗` (`editorial-writing.html`)
- Practice 05: `Explore Digital Marketing & Retainers ↗` (`digital-marketing.html`)
- Practice 06: `Explore Skills Training & Test Prep Hub ↗` (`training.html`)

---

## 6. Execution Sequence

1. **Step 1: Header Alignment & Rename to "Menu":**
   - Left-align Row 2 in `css/main.css` so `HOME` starts directly beneath `Alfred E. Williams`.
   - Update buttons to label as `Menu`.
   - Add mobile scroll hide/reveal script in `js/components.js`.
2. **Step 2: Generate Semantically Appropriate 2D Cartoon Illustrations:**
   - Generate any missing 2D cartoon illustrations for Lagos field research, sound studio, web engineering, etc., using `generate_image`.
3. **Step 3: Enrich `about.html` with Visual Breathers:**
   - Add 2D illustrations alongside chapters 01–04 and keynote cards.
4. **Step 4: Build `web-development.html`:**
   - Complete landing page with starter sites, web apps, bespoke platforms, illustrations, and icons.
5. **Step 5: Build `business-writing.html`:**
   - Complete landing page for pitch decks, company profiles, and proposals.
6. **Step 6: Build `editorial-writing.html`:**
   - Complete landing page for AI content humanizing, book rewriting, and policy polish.
7. **Step 7: Build `digital-marketing.html`:**
   - Complete landing page for social media management, paid ads, and brand retainers.
8. **Step 8: Global Navigation & Services Page Cross-Linking:**
   - Add `SERVICES ▾` dropdown across all 15 HTML files.
   - Add direct landing page CTA buttons on `services.html`.
9. **Step 9: Testing & Browser Verification:**
   - Check layout alignment, mobile scroll, and zero console errors.
10. **Step 10: Git Commit & Push to GitHub.**
