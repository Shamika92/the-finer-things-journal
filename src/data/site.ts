// ─────────────────────────────────────────────────────────────
//  Site-wide settings. Edit these in one place.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'The Finer Things Journal',
  tagline: 'An independent journal exploring the finer details in culture, film, literature & art.',
  // Used by Google and link previews on the home page (aim for 140–160 characters).
  description:
    'The Finer Things Journal is an independent journal exploring the finer details in culture, film, literature & art: essays, collections and pictures on what is worth our time.',
  // Shown as the author on articles. Replace with your name if you want a personal byline.
  author: 'The Finer Things Journal',
  locale: 'en_GB',
  // Shared when a page has no cover photo of its own (must be JPG/PNG, 1200×630).
  defaultImage: '/og-default.jpg',
  email: 'thefinerthingsjournal@gmail.com',
  instagram: {
    handle: '@thefinerthingsjournal',
    url: 'https://www.instagram.com/thefinerthingsjournal/',
  },
};

// The categories ("types") used by the filter.
// To add a new one: add an entry here, then use its `id` in a post's frontmatter.
export const CATEGORIES = [
  { id: 'literature', label: 'Literature' },
  { id: 'art', label: 'Art' },
  { id: 'objects', label: 'Objects' },
  { id: 'culture', label: 'Culture' },
  { id: 'life', label: 'Life' },
  { id: 'film', label: 'Film' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const categoryLabel = (id: string) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;
