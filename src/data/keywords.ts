import { getPosts } from './posts';

export const slugify = (w: string) =>
  w.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Every index word with the posts that use it. Words match regardless of capitals. */
export async function getIndex() {
  const posts = await getPosts();
  const map = new Map<string, { slug: string; label: string; posts: typeof posts }>();
  for (const post of posts) {
    for (const raw of post.data.keywords) {
      const label = raw.trim();
      if (!label) continue;
      const slug = slugify(label);
      const entry = map.get(slug) ?? { slug, label, posts: [] };
      if (!entry.posts.includes(post)) entry.posts.push(post);
      map.set(slug, entry);
    }
  }
  return [...map.values()].sort((a, b) => a.label.localeCompare(b.label));
}
