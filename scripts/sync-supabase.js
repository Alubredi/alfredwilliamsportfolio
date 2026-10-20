/**
 * SYNC ARTICLES TO SUPABASE
 * Reads articles/articles.json or markdown files and upserts them to Supabase
 */
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://bxgxnbqvarmdxirzulje.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_KEY) {
  console.error('❌ Error: SUPABASE_SERVICE_ROLE_KEY environment variable is required.');
  console.error('   Usage: SUPABASE_SERVICE_ROLE_KEY="your_key" node scripts/sync-supabase.js');
  process.exit(1);
}

async function syncArticles() {
  const jsonPath = path.join(__dirname, '..', 'articles', 'articles.json');
  if (!fs.existsSync(jsonPath)) {
    console.error('articles/articles.json not found! Run export-markdown-articles.js first.');
    process.exit(1);
  }

  const articles = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log(`Found ${articles.length} articles to sync to Supabase...`);

  const records = articles.map(a => ({
    id: a.id,
    number: a.number,
    title: a.title,
    category: a.category,
    category_key: a.categoryKey,
    date: a.date,
    read_time: a.readTime,
    image: a.image,
    excerpt: a.excerpt,
    tags: a.tags || [],
    takeaways: a.takeaways || [],
    references_list: a.references || [],
    content_html: a.contentHtml || '',
    is_published: true
  }));

  const res = await fetch(`${SUPABASE_URL}/rest/v1/articles`, {
    method: 'POST',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify(records)
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Sync failed:', res.status, err);
    process.exit(1);
  }

  console.log(`✅ Successfully synced ${records.length} articles to Supabase!`);
}

syncArticles();
