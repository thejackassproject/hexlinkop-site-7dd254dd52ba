import { defineCollection, z } from 'astro:content';

// Note: Articles are fetched dynamically from Supabase database (hexlink_blog_posts table)
// Content collections are disabled for blog articles to enable real-time updates
// The src/content/articles/ directory is kept for compatibility but not used

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string().optional(),
      avatar: z.string().optional(),
      bio: z.string().optional(),
    }),
    coverImage: z.string(),
    category: z.string(),
    excerpt: z.string(),
    readTime: z.string().optional(),
  }),
});

export const collections = {
  // 'articles': articlesCollection,  // Disabled - using Supabase for dynamic SSR
};
