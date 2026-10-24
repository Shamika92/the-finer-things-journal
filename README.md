# The Finer Things Journal

A static editorial journal. `dist/` is the complete deployable website. There are no runtime dependencies or external font requests.

## Structure

- Homepage: four painted covers leading to Shelf, Screen, Objects & Culture, and My Words.
- Each category has its own article/media grid, with nine entries initially and Load more as the category grows.
- About: the introductory essay and contact email. The introduction is not included among the category entries.
- The header links only to About. The identity returns home. Instagram and artwork credits are in the footer.
- The old Bookmarks URL redirects home. Bookmarks data is retained in the source for possible later use.

## Everyday updates

1. Edit `content.json`.
2. Run `node scripts/build-content.mjs`.
3. Preview locally and deploy the updated `dist/` folder to your static host. See below.

`categories` controls the four cover labels, subtitles, images, crop positions, routes and artwork credits. The four current covers were supplied by TFTJ. All images and fonts are served locally.

`entries` controls the category grids. Add or reorder objects with:
- `title`, `description`
- `category`: `shelf`, `screen`, `objects`, or `writing`
- `label`: short image label
- `image` and `imageAlt`, or a short `preview` for a typographic poem card
- `url`: an HTTPS link or a local `.html` page
- optional `linkLabel`: override the automatic Instagram/article label

For a reading page, set `format` to `article` or `poem` and add `body` blocks. Each block has a `type` (`paragraph`, `heading`, `quote`, or `stanza`) and `text`. Heading blocks may also have `meta`, such as an author or country. Use newline characters inside a stanza to preserve the poem's line breaks; use a separate stanza block for each blank line between stanzas. The build generates the page at the entry's local `url` with category navigation, reading time, and a link to another piece in the same section.

Optional fields: `imageCaption`, `imagePosition` (two percentage values), and `sources` (an array of `{title, url}` links). Source links appear under an expandable “Sources & further reading” section. Put new images in `dist/assets/`. Do not edit generated HTML directly.

Entry counts and Load more adapt automatically. The grid renders all entries in HTML for a usable fallback without JavaScript; JavaScript progressively reveals them in batches of nine. Categories with exactly two entries use a wider two-column layout, stacking on small screens.

The initial eight pieces comprise six short editorial adaptations and the exact user-supplied texts of Pretty Things and Midnight Poem. The poems' wording and stanza breaks must be preserved unless the author requests an edit.

`about` contains the intro title, subtitle, cover, route and paragraph strings. `contactEmail` controls the mail link. Homepage wording and common headers/footers are in `scripts/build-content.mjs`.

## Source files

- `scripts/build-content.mjs`: validates data and generates homepage, category pages, reading pages and About.
- `dist/style.css`: responsive paper/glass layout and typography.
- `dist/app.js`: Load more, credits dialog and compatibility for old category query links.

No editor dashboard, analytics or trackers are included.

## Local development

Requirements: Node.js 18 or newer for the generator. No npm install is needed. Python 3 can serve the preview.

```bash
git clone https://github.com/Shamika92/the-finer-things-journal.git
cd the-finer-things-journal
node scripts/build-content.mjs
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000 in your browser. After content changes, rebuild and refresh. Commit both `content.json` and the regenerated HTML pages. CSS and JavaScript are maintained directly in `dist/style.css` and `dist/app.js`.

## Hosting

Build command: `node scripts/build-content.mjs`

Publish directory: `dist`

The site needs only static file hosting; it has no backend, database, runtime secrets, or package dependencies. All assets use relative paths. The existing ChatGPT Sites deployment is separate from this GitHub repository. Pushing here does not automatically update that deployment; a deployment integration must be configured separately.

This export includes the current source and assets. Earlier ChatGPT Sites revision history and host-specific project configuration are not included.
