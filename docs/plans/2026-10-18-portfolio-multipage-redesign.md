# Alfred E. Williams — Multi-Page Portfolio Redesign & Visual Elevation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform Alfred E. Williams' single-page portfolio into a world-class, multi-page editorial and creative technology showcase featuring interactive 3D WebGL elements (globe/world map & photo depth tilt), high-fidelity visual mockups, social media snapshots, and deeply expanded content drawn from the Master CV.

**Architecture:** A cohesive, multi-page static architecture leveraging the design language established in `DESIGN.md` (Mijo Bello hairline constructivism + Houmahani Kane spatial depth). Built with semantic HTML5, Vanilla CSS design tokens with Light/Dark mode support, GSAP + ScrollTrigger, Lenis smooth scrolling, Three.js WebGL canvas for an interactive 3D rotating globe and depth-reactive portrait, SVG vector illustrations, and interactive media lightboxes.

**Tech Stack:** Semantic HTML5, Vanilla CSS3 (Custom Properties & Responsive 12-Column Grid), JavaScript (ES6+), Three.js (WebGL 3D Globe & Photo Depth Shader), GSAP 3.12 + ScrollTrigger, Lenis Smooth Scroll, Feather/Custom SVG Icons.

---

### Task 1: Audit & Foundation — Global Styles, Design Tokens & Reusable Header/Footer Components

**Files:**
- Create: `css/main.css`
- Create: `js/components.js`
- Modify: `index.html`

**Step 1: Extract and refine the Design System tokens from `DESIGN.md` into `css/main.css`**
- Set up CSS custom properties for Paper Light (`#F3EFE6`) and Nocturne Dark (`#0E1211`), typography stacks (`Fraunces`, `Space Grotesk`, `Manrope`, `DM Mono`), 12-column hairline grid styles, button variants (`.btn-solid`, `.btn-ghost`, `.btn-roll`), custom cursor dot/ring, and responsive utility classes.

**Step 2: Build `js/components.js` for shared multi-page elements**
- Global navigation bar with brandmark, page navigation links, live multi-timezone world time ticker (Lagos, London, New York, Tokyo), dark/light theme switch, and full slide-out "Directory Drawer".
- Global footer with one-click email copy, social colophon links, and monumental wordmark.
- Custom cursor logic with magnetic hover pull (`data-magnet`).

**Step 3: Test and verify cross-page component rendering**
- Ensure theme switcher persists state via `localStorage` and transitions smoothly without layout shift.

---

### Task 2: Interactive 3D WebGL Canvas — Global World Map / Interactive Globe & 3D Photo Depth

**Files:**
- Create: `js/three-scene.js`
- Modify: `index.html`
- Asset: `Brand Photo Alfred.jpg` / `Alfred photo.jpg`

**Step 1: Implement Three.js Interactive 3D Globe / World Canvas**
- Build an interactive, stylized 3D particle/wireframe globe rotating in the hero background with pulsing geographic nodes (Lagos, London, New York, Tokyo).
- Support interactive dragging, inertia rotation, and subtle mouse-tracking parallax.

**Step 2: Implement 3D Photo Depth Tilt Effect**
- Create a WebGL depth/displacement tilt canvas for Alfred's portrait photo (`Brand Photo Alfred.jpg` / `Alfred photo.jpg`) that responds dynamically to mouse coordinate movement, creating a holographic 3D spatial depth effect.

**Step 3: Verification & Performance Check**
- Ensure 60 FPS performance, graceful fallback to static 2D high-res photography when WebGL is unavailable or when `prefers-reduced-motion` is active.

---

### Task 3: Content Expansion & Visual Asset Generation for Projects & Social Media

**Files:**
- Create: `assets/projects/` directory for visual snapshots and mockups
- Create: High-fidelity visual cards for Renalytica, AXiA Active, GoFar Academy, SimFitness, 9jaProQuiz, HealthBay, OTEC Nigeria, and the PCNI 145-page Presidential Report.

**Step 1: Capture / Generate Visual Mockups for Live Platforms**
- **Renalytica**: Enterprise market intelligence dashboard mockup, macroeconomic chart preview, LinkedIn carousel snapshot.
- **AXiA Active**: E-commerce storefront device mockup (desktop + mobile checkout flow), activewear lifestyle banner.
- **GoFar International Academy**: Institutional educational portal interface, parent admissions portal preview.
- **OTEC & Gresfor**: IELTS Speaking Assessment tool interface and score visualization.
- **PCNI Report**: High-level government policy document cover and editorial spread.

**Step 2: Create Custom SVG Icons & Technical Illustrations**
- Create bespoke SVG badges for disciplines: Editorial Architecture, Data-to-Narrative Synthesis, Full-Cycle Web Dev, Social Growth Engineering, and ESL/Test Prep Coaching.

---

### Task 4: Re-architect `index.html` — The Monumental Editorial & Interactive Showcase Home

**Files:**
- Modify: `index.html`

**Step 1: Monumental Kinetic Split-Hero**
- Implement bold typographic headline: `"Architecting narratives. Engineering platforms that scale."`
- Embed the 3D depth-reactive portrait and 3D globe visualization.
- Discipline tags: `[Writer & Editor]` · `[Web Developer]` · `[Digital Growth Engineer]`.

**Step 2: Flagship Project Showcase (The Showing Stage)**
- Replace basic text cards with full-fidelity interactive visual project stages:
  - **Renalytica**: Flagship enterprise intelligence case overview with live data metrics, social reach stats, and direct link to case study.
  - **AXiA Active**: E-commerce visual showcase with device mockups and Meta Ads performance highlights.
  - **GoFar Academy**: Institutional web architecture and community impact.

**Step 3: Interactive Live Metrics & African SME Field Research Highlight**
- Showcase the 551 SMEs mapped across 9 Lagos business districts, 50+ admissions essays (90%+ acceptance rate), and 1-to-8 content repurposing engine.

**Step 4: Interactive Video / Web Preview Lightbox Trigger**
- Allow visitors to click any project to open a responsive preview modal with high-res screenshots, walkthrough video links, and project specs.

---

### Task 5: Build `works.html` — The Comprehensive Interactive Portfolio & Archive

**Files:**
- Create: `works.html`

**Step 1: Filterable Category Navigator**
- Tabs: `All Works` · `Web & App Development` · `Enterprise Content & Social Systems` · `Editorial & Policy Publications` · `Interactive Tools`.

**Step 2: Rich Visual Grid with Device Mockups & Direct Links**
- Include all verified projects and literary archives from Master CV:
  1. **Renalytica Enterprise Platform & Social Ecosystem** (Full-Stack Web Engineering, macroeconomic data UI, 2,500+ dossiers, 1-to-8 repurposing engine)
  2. **AXiA Active E-Commerce Storefront** (Full-stack storefront build, checkout journey, Meta Ads)
  3. **GoFar International Academy Institutional Portal** (Education web architecture, admissions funnel)
  4. **My WORLD of Literature (TWOL)** (Self-designed literary & cultural journal at [twol101.wordpress.com](https://twol101.wordpress.com/))
  5. **SimFitness Personal Fitness Planner Web App** (Product web app with workout builders)
  6. **IELTS Speaking Assessment Tool** (Interactive metrics & audio grading UI for OTEC)
  7. **9jaProQuiz Interactive Pronunciation App** (Cognitive quiz app with dynamic scoring)
  8. **WC Social Media Calendar & Strategy Hub** (Brand content planning system)
  9. **HealthBay Healthcare & Wellness Web App** (Patient navigation platform)
  10. **Wilbert Edu Consult Web Development** (Walkthrough dev report)
  11. **Presidential Committee on North-East Initiative (PCNI) 145-Page Policy Report** (Edited for President Buhari's administration)
  12. **Published Literary & Cultural Essays Archive** (Direct links to *"The Far Country" Review*, *“IN THE MOOD”: The Power and Influence of Music*, *The Good Ol’ Days*, *I RISE*, *The Average Nigerian & The Circle of Stereotypes*, *Gender Equal Opportunities Bill Analysis*, and *Headies 2015 Critique*).

**Step 3: Live Preview & External Direct Access**
- High-visibility external links, device frames, tags, and "Explore Deep Dive" buttons.

---

### Task 6: Build Flagship Case Study Pages (`case-studies/renalytica.html`, `case-studies/axia-active.html`, and `case-studies/twol-literature.html`)

**Files:**
- Create: `case-studies/renalytica.html` (Full-Stack Web Engineering + Enterprise Market Intelligence)
- Create: `case-studies/axia-active.html` (E-Commerce Storefront Architecture + Meta Ads)
- Create: `case-studies/twol-literature.html` (Self-Designed Literary Journal + Cultural Critique Archive)

**Step 1: Houmahani Kane Blueprint Implementation**
- Hero banner with project concept thesis.
- `<dl>` Definition Grid: Client / Publication, Year, Role & Discipline, Tech Stack & Tools.
- Visual gallery: Full desktop and mobile device frames, social media post carousels, data-to-storytelling infographics, and typography spreads.
- Impact Metrics: Quantitative performance data, engagement velocity, and published excerpts.

---

### Task 7: Build `about.html` — The Complete Narrative, Philosophy & Academic Journey

**Files:**
- Create: `about.html`

**Step 1: The Dual-Discipline Narrative**
- Detailed bio: University of Lagos (UNILAG) B.A. Hons in English and Literary Studies, 10+ years spanning editorial leadership, digital media, academic operations, and web development.

**Step 2: Field Research & Institutional Operations**
- The 551 SMEs field research across 9 Lagos commercial zones.
- Academic operations leadership at Gresfor and Light Heights (slashing tutor onboarding time by 50%).
- US Embassy F-1 Visa Consular Q&A Blueprint (90%+ approval rate).
- Cultural essays & journalism (Adichie Farafina review, Lola Shoneyin festival, UNILAG theatre).

**Step 3: Creative Pursuits & Technology Exploration**
- Dance & choreography video production, music composition & sound design, open-source web exploration.

---

### Task 8: Build `brands.html` — Social Media Management & Creative Studio Showcase

**Files:**
- Create: `brands.html`

**Step 1: Dedicated Brand Showcases with Visual Feeds**
- **Renalytica**: Enterprise B2B LinkedIn, Instagram, and X channels. Visual feed snapshot, document carousel preview, and follower engagement highlights.
- **AXiA Active**: Athleisure lifestyle imagery, Meta Ad creative variations, product drops, and Instagram feed (`@axia_active`).
- **GoFar International**: Institutional community, learner spotlights, and Instagram highlights (`@gofar_international`).
- **OTEC Nigeria**: Overseas education prep, IELTS community updates (`@otec_ng`).
- **BTS Renewables**: Clean energy product profiles and technical copywriting.

**Step 2: Social Media Process & Content Repurposing Visual Diagram**
- An interactive SVG infographic illustrating the 1-to-8 Content Repurposing Engine (from 1 research dossier into carousels, threads, reels, newsletters, and summaries).

---

### Task 9: Build `services.html` & `contact.html`

**Files:**
- Create: `services.html`
- Create: `contact.html`

**Step 1: `services.html` — Solutions, Offerings & Web Dev Packages**
- Detailed service cards with expandable deliverables:
  1. Strategic Content Architecture & Editorial Leadership
  2. Full-Cycle Website & Web App Engineering
  3. Platform-Native Social Media & Community Growth
  4. High-Stakes Admissions & Executive Coaching
- Transparent Web Development Packages section with scope, timeline, and pricing tiers.

**Step 2: `contact.html` — Interactive Inquiry & Commission Terminal**
- Direct contact details: Phone (+234 817 693 9974), Email (officialwilliamsae@gmail.com with one-click copy), LinkedIn, and interactive project inquiry form.

---

### Task 10: Quality Assurance, Accessibility, Responsive Testing & Polish

**Files:**
- Review all generated pages (`index.html`, `works.html`, `about.html`, `brands.html`, `services.html`, `contact.html`, and case studies)
- Verify mobile responsiveness (360px, 768px, 1024px, 1440px)
- Verify Lenis smooth scrolling synchronization with GSAP ScrollTrigger
- Verify Lighthouse performance, contrast ratios, and keyboard focus states
- Verify `prefers-reduced-motion` compliance
