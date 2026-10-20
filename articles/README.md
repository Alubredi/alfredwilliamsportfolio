# Alfred E. Williams — Critical Essays & Dispatches Repository

This directory contains the source artifacts and long-form markdown files for Alfred E. Williams' intellectual dispatches, critical investigations, macroeconomic data dossiers, and technical web architecture analyses.

---

## 📂 Catalog of Articles

| # | ID / URL Slug | Title | Category | Date | Read Time |
|---|---|---|---|---|---|
| 01 | `web-clarity` | [The Architecture of Clarity: Why Emerging Markets Need Zero-Bloat Web Systems](01-web-clarity.md) | Web Architecture & Systems | Oct 14, 2026 | 9 min read |
| 02 | `macro-volatility` | [Beyond the Exchange Rate: Deconstructing NAFEM Volatility and Sovereign Debt Narratives](02-macro-volatility.md) | Macroeconomics & Data | Oct 08, 2026 | 11 min read |
| 03 | `theatre-criticism` | [The Dramaturgy of Distance: Christopher Anyokwu’s "The Far Country" and Modern African Alienation](03-theatre-criticism.md) | Cultural & Literary | Sep 29, 2026 | 14 min read |
| 04 | `admissions-rhetoric` | [The Anatomy of a Compelling Statement: How Admissions Rhetoric Really Works](04-admissions-rhetoric.md) | Admissions & Pedagogy | Sep 21, 2026 | 8 min read |
| 05 | `repurposing-engine` | [The 1-to-8 Content Engine: Transforming a Single Research Dossier into a Multi-Channel Acquisition Moat](05-repurposing-engine.md) | Content & Systems | Sep 12, 2026 | 10 min read |
| 06 | `lagos-sme-study` | [Ground Truths from 551 Lagos SMEs: The Invisible Infrastructure Bottlenecks of Urban Commerce](06-lagos-sme-study.md) | SME Field Research | Aug 30, 2026 | 12 min read |
| 07 | `farafina-pedagogy` | [The Farafina Workshop and the Pedagogy of Voice: Reflections on Chimamanda Ngozi Adichie’s Masterclass](07-farafina-pedagogy.md) | Cultural & Literary | Aug 18, 2026 | 10 min read |
| 08 | `lifestyle-commerce` | [The Psychology of Lifestyle Commerce: Why Athleisure Thrives in Emerging Megacities](08-lifestyle-commerce.md) | Web Architecture & Systems | Aug 04, 2026 | 7 min read |
| 09 | `deweaponizing-jargon` | [The De-weaponization of Jargon: Lessons from Editing the 145-Page Presidential Report on Fiscal Reforms](09-deweaponizing-jargon.md) | Content & Systems | Jul 22, 2026 | 9 min read |
| 10 | `consular-interview` | [Demystifying the Consular Interview: Rhetorical Composure in High-Stakes US Visa Applications](10-consular-interview.md) | Admissions & Pedagogy | Jul 11, 2026 | 13 min read |
| 11 | `gamified-pedagogy` | [Gamified Pedagogy: Cognitive Friction and Active Recall in Interactive Learning Apps](11-gamified-pedagogy.md) | Web Architecture & Systems | Jun 28, 2026 | 8 min read |
| 12 | `swiss-hairline-aesthetic` | [The Swiss Hairline Aesthetic: Why Structural Brutalism is Replacing Generic Web Templates](12-swiss-hairline-aesthetic.md) | Web Architecture & Systems | Jun 15, 2026 | 8 min read |

---

## 🌐 URLs & Routing Architecture

- **Catalog Page**: [`blog.html`](../blog.html)
- **Individual Article Page**: [`article.html?id=<article-id>`](../article.html)
  - Examples:
    - `http://127.0.0.1:8008/article.html?id=web-clarity`
    - `http://127.0.0.1:8008/article.html?id=macro-volatility`
    - `http://127.0.0.1:8008/article.html?id=theatre-criticism`

Each article has its own distinct URL that can be directly shared on social media (X/Twitter, LinkedIn), bookmarked, and refreshed.

---

## ⚡ Supabase Cloud Database Integration

Your portfolio is connected to your live Supabase cloud project:
- **Project Ref**: `bxgxnbqvarmdxirzulje`
- **Project URL**: `https://bxgxnbqvarmdxirzulje.supabase.co`
- **Table Name**: `public.articles`
- **Security**: Row Level Security (RLS) is enabled. Only articles with `is_published = true` are publicly readable via the anonymous client key.

### How to Add More Articles:
1. **Option 1 (Supabase Web Dashboard)**:
   - Log into your Supabase dashboard at [supabase.com](https://supabase.com).
   - Go to Table Editor -> `articles`.
   - Click "Insert row" and fill in the fields (`id`, `number`, `title`, `category`, `category_key`, `date`, `read_time`, `excerpt`, `takeaways`, `references_list`, `content_html`, `is_published = true`).
   - The new article will automatically appear in your blog catalog and on `article.html?id=<your-new-id>`!

2. **Option 2 (Local Markdown Sync Script)**:
   - Create a new markdown file in this folder (e.g., `13-new-dispatch.md`).
   - Add it to `articles/articles.json` or run the sync script:
     ```bash
     node scripts/sync-supabase.js
     ```
