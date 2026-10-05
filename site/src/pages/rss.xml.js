import rss from '@astrojs/rss';
import { SITE } from '../site.config.js';
import { getPublishedPosts } from '../lib/posts.js';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: `${SITE.name} — Blog`,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary ?? '',
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
