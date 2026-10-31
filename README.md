# The Finer Things Journal

A culture & life journal, explored through films, literature, art & objects.

## Run it

```bash
npm install      # first time only
npm run dev      # open http://localhost:4321
npm run build    # outputs the finished site to /dist
```

## Add a new article (2 steps)

**1. Add the images.** Make a folder named after the article and put the images in it:

```
public/images/journal/my-new-article/
  cover.jpg
  01.jpg   (optional gallery images)
  02.jpg
```

**2. Add the text.** Create `src/content/journal/my-new-article.md`:

```markdown
---
title: My New Article
dek: One line that sits under the title.
category: art            # film | literature | art | objects | culture | life
date: 2026-11-15
cover: /images/journal/my-new-article/cover.jpg
coverAlt: Short description of the cover image
coverShape: portrait     # optional: for tall cover photos (default is landscape)
gallery:                 # optional; delete if not needed
  - src: /images/journal/my-new-article/01.jpg
    caption: A caption.
draft: false             # true = hidden while you work on it
---

Your article goes here. Use ## for section headings, ### for small headings,
> for a pull quote, and --- for a section break.
```

The file name becomes the URL: `/journal/my-new-article`.
Images get the grain filter automatically.

## Where things live

| What | Where |
|---|---|
| Site name, tagline, Instagram link, categories | `src/data/site.ts` |
| Articles | `src/content/journal/*.md` |
| Article images | `public/images/journal/<article-name>/` |
| Paper background & grain textures | `public/textures/` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Pages: Collection, Archive, About | `src/pages/` |

## Linking from Instagram

- Home: `/`
- A filtered view: `/?type=film` (or literature, art, objects, culture, life)
- A specific article: `/journal/<article-name>`

## Deploying

Free options: Netlify, Vercel or Cloudflare Pages. Connect the folder or repo,
set build command `npm run build` and output directory `dist`.
Then update `site` in `astro.config.mjs` to your real domain.

## SEO

Handled automatically on every page: titles, descriptions, canonical URLs,
link-preview images, `sitemap-index.xml`, `robots.txt`, `rss.xml`, and
structured data that tells Google this is a publication, who publishes it, and that each article is an article.

**When writing an article:**
- Use a **JPG cover** (around 1600px wide). Instagram, WhatsApp and Google can't show SVGs.
- Write the `dek` as a real sentence of about 120–160 characters. Google uses it as the snippet.
- Optional frontmatter: `seoDescription:` (a custom Google snippet) and `updated:` (date of a revision).
- Write descriptive `coverAlt` and gallery `alt` text. It helps Google Images.

**Before launch:** set `site` in `astro.config.mjs` and the Instagram link in `src/data/site.ts`.

**After launch:**
1. Add the domain to Google Search Console and submit `https://YOURDOMAIN/sitemap-index.xml`.
2. Do the same in Bing Webmaster Tools (it can import from Search Console in one click).
3. Put the site link in your Instagram bio and website field.
