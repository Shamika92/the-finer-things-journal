import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './data/site';

const categoryIds = CATEGORIES.map((c) => c.id) as [string, ...string[]];

// Every Markdown file in src/content/journal/ becomes an article.
// The file name becomes the URL:  my-post.md  →  /journal/my-post
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),                          // one-line standfirst shown under the title
    category: z.enum(categoryIds),            // must match an id in src/data/site.ts
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),      // set if you revise an article later
    seoDescription: z.string().optional(),    // optional: custom Google snippet (else the dek is used)
    cover: z.string(),                        // e.g. /images/journal/<slug>/cover.jpg
    coverAlt: z.string().default(''),
    coverShape: z.enum(['landscape', 'portrait']).default('landscape'), // use portrait for tall photos
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string().default(''), caption: z.string().optional() }))
      .default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),        // true = hidden from the site
  }),
});

export const collections = { journal };
