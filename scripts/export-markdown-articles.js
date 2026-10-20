const fs = require('fs');
const path = require('path');

// 1. Read blog-data.js
const blogDataCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'blog-data.js'), 'utf8');

// Mock window
const sandbox = { window: {} };
const fn = new Function('window', blogDataCode + '; return window.blogArticles;');
const articles = fn(sandbox.window);

const articlesDir = path.join(__dirname, '..', 'articles');
if (!fs.existsSync(articlesDir)) {
  fs.mkdirSync(articlesDir, { recursive: true });
}

// 2. Write articles.json
fs.writeFileSync(
  path.join(articlesDir, 'articles.json'),
  JSON.stringify(articles, null, 2),
  'utf8'
);
console.log('Saved articles/articles.json');

// 3. Write individual markdown files
articles.forEach(art => {
  const numStr = String(art.number).padStart(2, '0');
  const filename = `${numStr}-${art.id}.md`;
  const filePath = path.join(articlesDir, filename);

  // Convert HTML back to clean Markdown-friendly representation
  const cleanContent = art.contentHtml
    .replace(/<span class="editorial-dropcap">(.*?)<\/span>/g, '$1')
    .replace(/<h2>(.*?)<\/h2>/g, '\n## $1\n')
    .replace(/<h3>(.*?)<\/h3>/g, '\n### $1\n')
    .replace(/<blockquote>\s*([\s\S]*?)\s*<\/blockquote>/g, (m, p1) => {
      return '\n' + p1.trim().split('\n').map(l => `> ${l.trim()}`).join('\n') + '\n';
    })
    .replace(/<ul>\s*([\s\S]*?)\s*<\/ul>/g, (m, p1) => {
      const items = p1.match(/<li>([\s\S]*?)<\/li>/g) || [];
      return '\n' + items.map(li => `- ${li.replace(/<\/?li>/g, '').trim()}`).join('\n') + '\n';
    })
    .replace(/<ol>\s*([\s\S]*?)\s*<\/ol>/g, (m, p1) => {
      const items = p1.match(/<li>([\s\S]*?)<\/li>/g) || [];
      return '\n' + items.map((li, idx) => `${idx + 1}. ${li.replace(/<\/?li>/g, '').trim()}`).join('\n') + '\n';
    })
    .replace(/<p>/g, '\n')
    .replace(/<\/p>/g, '\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const md = `---
id: "${art.id}"
number: ${art.number}
title: "${art.title.replace(/"/g, '\\"')}"
category: "${art.category}"
categoryKey: "${art.categoryKey}"
date: "${art.date}"
readTime: "${art.readTime}"
image: "${art.image}"
excerpt: "${art.excerpt.replace(/"/g, '\\"')}"
tags:
${(art.tags || []).map(t => `  - "${t}"`).join('\n')}
---

# ${art.title}

**Category:** ${art.category}  
**Date:** ${art.date}  
**Read Time:** ${art.readTime}  
**Author:** Alfred E. Williams  

> **Executive Excerpt:**  
> ${art.excerpt}

---

## Executive Key Takeaways

${(art.takeaways || []).map(t => `- ${t}`).join('\n')}

---

## Investigation Content

${cleanContent}

---

## Verified References & Empirical Sources

${(art.references || []).map((ref, idx) => `${idx + 1}. ${ref}`).join('\n')}
`;

  fs.writeFileSync(filePath, md, 'utf8');
  console.log(`Created: articles/${filename}`);
});

console.log('Finished exporting all articles to articles/ directory!');
