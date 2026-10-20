const fs = require('fs');
const path = require('path');

// 1. Read blog-data.js
const blogDataCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'blog-data.js'), 'utf8');

// Mock window
const sandbox = { window: {} };
const fn = new Function('window', blogDataCode + '; return window.blogArticles;');
const articles = fn(sandbox.window);

console.log(`Found ${articles.length} articles to seed.`);

// Map articles to database schema
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

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://bxgxnbqvarmdxirzulje.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_KEY) {
  console.error('❌ Error: SUPABASE_SERVICE_ROLE_KEY environment variable is required.');
  console.error('   Usage: SUPABASE_SERVICE_ROLE_KEY="your_key" node scripts/seed-articles.js');
  process.exit(1);
}

async function seed() {
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
    console.error('Failed to seed articles:', res.status, err);
    process.exit(1);
  }

  console.log('Successfully seeded all articles to Supabase!');
}

seed();
