# Agent guide: The Finer Things Journal

Live site: https://thefinerthingsjournal.com · Repo: github.com/Shamika92/the-finer-things-journal (`main`)
Stack: Astro (static). Hosting: Cloudflare Worker with static assets. **Every push to `main` deploys automatically in about a minute.**

Most work here is **adding a new post**. Follow this guide exactly.

---

## How the owner works

- Keep replies **short and precise**. Give one step at a time.
- The owner writes in Obsidian. They put each post in a folder: `../Images/<Name>/`, containing one `.md` file and its images.
- **Never rewrite their text.** Copy it word for word. Only adjust formatting (see the rules below) and say what you changed.
- Avoid photos of identifiable people that the owner doesn't own. Flag them, and also flag brand campaign images.
- The terminal **can't read the Obsidian vault in iCloud** (permission error). Ask the owner to copy the file into the folder instead.

---

## Adding a post: steps

1. **Read** the `.md` file and **look at every image** in `../Images/<Name>/`.
2. **Choose:**
   - **slug**: kebab-case from the title, e.g. `the-many-lives-of-vermilion`. It becomes the URL `/journal/<slug>`.
   - **category**: one of `film | literature | art | objects | culture | life` (defined in `src/data/site.ts`).
   - **cover**: the strongest image. If it's taller than it is wide, set `coverShape: portrait`.
   - **image placement**: one image (or a pair) after the section it illustrates.
3. **Convert images** into `public/images/journal/<slug>/` with descriptive filenames. Use JPG, and **never upscale**:
   ```bash
   SRC="../Images/<Name>"; D="public/images/journal/<slug>"; mkdir -p "$D"
   sips -s format jpeg -s formatOptions 86 "$SRC/IMG_1.png" --out "$D/cover.jpg"
   # only for images wider/taller than ~2000px:
   sips -s format jpeg -s formatOptions 84 -Z 2000 "$SRC/big.png" --out "$D/name.jpg"
   # crop black bars from phone screenshots (centered crop):
   sips --cropToHeightWidth <h> <w> "$SRC/Screenshot.png" --out "$D/name.jpg"
   ```
   Social link previews can't show SVGs, so the cover must be a JPG or PNG.
4. **Write** `src/content/journal/<slug>.md` using the template below.
5. **Build and check:** run `npx astro build` (it must finish with no errors), then look at the page (see Verify).
6. **Publish:**
   ```bash
   git add -A && git commit -m "Add post: <Title>" && git push origin main
   ```
7. **Report** in a few lines: the URL, the category, the cover, where the images went, any formatting changes, and anything to flag.

---

## Post template

```markdown
---
title: "Title Exactly As Written"
dek: "One line under the title. Use the owner's subtitle or standfirst if there is one."
seoDescription: "Optional, 140–160 chars, for Google. Name the concrete subjects (people, works, places)."
category: culture
date: 2026-11-15            # publish date (today unless the owner gives one)
cover: /images/journal/<slug>/cover.jpg
coverAlt: "What the cover image shows"
coverShape: portrait        # only for tall covers; omit for landscape
# updated: 2026-12-01       # if the post is revised later
# draft: true               # hides the post from the site
---

Body text, verbatim. Use ## for section headings.
```

The schema lives in `src/content.config.ts`. The build fails if a field is wrong.

### Images inside the body

Put raw HTML in the Markdown, with a blank line before and after. **Always wrap the image in `<div class="grain">`** (this adds the film-grain look).

```html
<!-- normal: text-column width -->
<figure>
  <div class="grain"><img src="/images/journal/<slug>/x.jpg" alt="…" loading="lazy" /></div>
  <figcaption>Short caption.</figcaption>
</figure>

<!-- wide: landscape images, paintings -->
<figure class="wide"> … </figure>

<!-- narrow: tall or portrait images -->
<figure class="narrow"> … </figure>

<!-- pair: two images side by side, cropped to 4:5 -->
<figure class="pair">
  <div class="grain"><img src="…a.jpg" alt="…" loading="lazy" /></div>
  <div class="grain"><img src="…b.jpg" alt="…" loading="lazy" /></div>
  <figcaption>One caption for both.</figcaption>
</figure>
```

### Quotes

- Short pull quote: `> text`
- Long quotation: `<blockquote class="long"><p>“…”</p></blockquote>`
- Poetry (keeps line breaks, adds a credit line underneath):
  ```html
  <blockquote class="poem">
  <p>line one
  line two</p>
  <cite>Poet Name, from <em>Poem Title</em></cite>
  </blockquote>
  ```
  Quote only a short excerpt, never a whole poem. If the owner gives screenshots of text, type the text out; never use the screenshot as an image.

### Formatting rules (allowed edits only)

- Remove trailing colons from headings. Make all section headings `##`.
- If a single line break in Obsidian looks like a new paragraph, make it one.
- Use curly apostrophes in the `title` and `dek`.
- Remove the H1 from the body (the title comes from the frontmatter). Drop Substack "Subscribe" blocks.
- Never change the wording, spelling or tone.

---

## Verify

```bash
npx astro preview --port 4321 &   # serves dist/ (rebuild first)
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$C" --headless=new --disable-gpu --hide-scrollbars --window-size=1300,8000 \
  --virtual-time-budget=15000 --screenshot=/tmp/post.png http://localhost:4321/journal/<slug>
```

- Look at the screenshot. Check that the cover is not cropping out a face, that images sit next to the right sections, and that there's no broken layout.
- A grey or blank cover in a screenshot is usually a **timing glitch**. Retake it with a longer `--virtual-time-budget` before you debug.
- Also check at phone width (`--window-size=500,9000`; 500 is headless Chrome's minimum).

---

## Where things live

| What | Where |
|---|---|
| Posts | `src/content/journal/*.md` |
| Post images | `public/images/journal/<slug>/` |
| Site name, tagline, Instagram, categories | `src/data/site.ts` |
| Post schema | `src/content.config.ts` |
| Article layout and figure styles | `src/pages/journal/[slug].astro` |
| Global styles and colours | `src/styles/global.css` |
| SEO head tags and structured data | `src/layouts/Base.astro` |
| Logo (transparent) / share image | `public/logo-transparent.png` / `public/og-default.jpg` |

The sitemap, RSS feed and `robots.txt` regenerate on every build. Google Search Console is already set up, so no action is needed for new posts.

## Don't

- Force-push, or rewrite git history.
- Add photos of people without flagging them.
- Upscale images, or commit huge files (keep each image under about 1MB).
- Change design or site settings when the task is "add a post".
