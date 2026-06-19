import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('noticias', e => !e.data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: 'The Claude Hub',
    description: 'Novedades, tutoriales y guías sobre Claude, Claude Code y el ecosistema Anthropic.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/noticias/${post.id.replace(/\.md$/, '')}/`,
    })),
  });
}
