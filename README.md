# Alfred E. Williams — Systems Architect, Writer & Growth Engineer

> *"The definitive duty of engineering is not abstraction without limits, but the courageous defense of computational clarity."*

An elite, high-performance digital portfolio, design system, and living research archive for **Alfred E. Williams** — Systems Architect, Cultural Critic, Essayist, and Growth Engineer based in Lagos, Nigeria and operating globally across London, New York, and Tokyo.

---

## 🏛️ Architectural Foundations

Built in strict accordance with the **Swiss Hairline Aesthetic** and the **Architecture of Clarity**:

- **Zero-Bloat Runtime**: 100% vanilla JavaScript (ES6+), modern semantic HTML5, and curated CSS Custom Properties. Sub-100ms First Contentful Paint (FCP) and 0ms Total Blocking Time (TBT).
- **Dual-Token System**: Engineered with dual color palettes — crisp warm white (`#FFFFFF` / `#FAFAF8`) in light mode and deep ink-black (`#090C0B` / `#111614`) in dark mode, accented by ember copper (`#C86432`).
- **Synchronized Global Timekeeping**: Live tickers for **Lagos**, **London**, **New York**, and **Tokyo** embedded into the sticky navigational architecture.
- **Micro-Interactions**: Smooth GSAP scroll transitions, interactive directory drawer, and custom magnetic cursor states.

---

## 🌐 Site Structure & Pages

| Page | URL / Path | Description |
|---|---|---|
| **Home** | [`index.html`](index.html) | Hero introduction, core disciplines, selected project highlights, interactive skills matrix, and terminal footer. |
| **Works** | [`works.html`](works.html) | Catalogue raisonné of 12 production web builds, e-commerce storefronts, and market intelligence tools. |
| **Brands & Social** | [`brands.html`](brands.html) | Acquisition engines, content pipelines, and live campaign analytics across Renalytica, AXiA Active, and GoFar Academy. |
| **About** | [`about.html`](about.html) | Comprehensive biography, philosophical tenets, 551 Lagos SME empirical study, and credentials. |
| **Services & Packages** | [`services.html`](services.html) | Enterprise web architecture, whitepaper sub-editing, and visa interview coaching pricing tiers. |
| **Dispatches & Blog** | [`blog.html`](blog.html) | Filterable catalog of critical essays, research dossiers, and technical investigations. |
| **Article Reader** | [`article.html?id=...`](article.html) | Dedicated, long-form editorial reader with unique URLs, breadcrumbs, executive takeaways, and verified academic citations. |
| **Case Studies** | [`case-studies/`](case-studies/) | Detailed engineering deep-dives for each major production build. |
| **Contact** | [`contact.html`](contact.html) | Consultation booking and direct executive contact channel. |

---

## ⚡ Supabase Cloud Integration

The critical essay repository is fully cloud-connected via **Supabase**:
- **Database Table**: `public.articles`
- **Security**: Row Level Security (RLS) enabled with public read access for published dossiers (`is_published = true`).
- **Hybrid Resilience**: The application loads the local baseline repository instantly on initial paint, then seamlessly hydrates with live cloud articles from Supabase in the background.
- **Dynamic URLs**: Every dispatch has its own permanent URL (e.g., `article.html?id=web-clarity`).

### Local Article Source Files
All research dossiers and essays are also preserved as standalone Markdown files in the [`articles/`](articles/) folder:
- `articles/01-web-clarity.md`
- `articles/02-macro-volatility.md`
- `articles/03-theatre-criticism.md`
- *(and through article 12)*
- `articles/articles.json` (Structured JSON catalog)

---

## 🚀 Running Locally

To run the portfolio locally without any build dependencies:

```bash
# Python 3
python -m http.server 8008

# Or with Node.js
npx serve .
```

Then navigate to `http://localhost:8008` in your browser.

---

## 📄 License & Attribution

© 2026 Alfred E. Williams. All rights reserved.  
Unpublished essays, dossiers, and methodologies remain the intellectual property of Alfred E. Williams.
