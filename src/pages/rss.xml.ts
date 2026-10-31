import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, categoryLabel } from '../data/site';
import { getPosts } from '../data/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    trailingSlash: false,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.dek,
      pubDate: p.data.date,
      link: `/journal/${p.id}`,
      categories: [categoryLabel(p.data.category)],
    })),
  });
}
