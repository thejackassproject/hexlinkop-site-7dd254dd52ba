import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import React from 'react';
import { Button } from '@/components/ui/button';

function Oadd0({
  articles = [
    {
      slug: '/blog/business-strategies-for-2023',
      title: 'Essential Business Strategies for 2023',
      excerpt: 'Discover key strategies to boost your business performance in the current market. From digital transformation to customer engagement, learn what works.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/76f2fe73-228b-4486-7a9a-8c8508b16700/public',
      category: 'Business Strategies',
      readTime: '5 min read',
      featured: true
    },
    {
      slug: '/blog/market-analysis-report',
      title: '2023 Market Analysis Report',
      excerpt: 'In-depth analysis of market trends and forecasts. Understand consumer behavior and industry shifts to stay ahead of competitors.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/d47a2eba-e1e6-432e-970b-c0bc11c03a00/public',
      category: 'Market Analysis',
      readTime: '7 min read',
      featured: true
    },
    {
      slug: '/blog/digital-transformation-guide',
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'Navigate the digital landscape with our comprehensive guide. Learn how businesses are adapting to technology and innovation.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/1de8dbca-c0a4-471b-786f-888b20900300/public',
      category: 'Technology',
      readTime: '6 min read',
      featured: true
    },
    {
      slug: '/blog/financial-planning-tips',
      title: 'Financial Planning Tips for Businesses',
      excerpt: 'Effective financial planning to ensure sustainability. Tips on budgeting, investments, and risk management for long-term success.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/dd52aa96-6092-467b-45fd-ed92a5087300/public',
      category: 'Finance',
      readTime: '4 min read',
      featured: true
    },
    {
      slug: '/blog/leadership-in-business',
      title: 'Leadership Insights: Building Strong Teams',
      excerpt: 'Explore leadership styles and techniques to inspire and motivate your team. Case studies from successful business leaders.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/3a72cc24-ea5c-4ef8-817f-a86481ead700/public',
      category: 'Leadership',
      readTime: '8 min read',
      featured: true
    },
    {
      slug: '/blog/sustainability-in-corporate-world',
      title: 'Sustainability in the Corporate World',
      excerpt: 'How businesses are adopting sustainable practices. Case studies on eco-friendly initiatives and their impact on profitability.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/3b1ce2d7-d4c8-4db7-5689-cd35768f4100/public',
      category: 'Sustainability',
      readTime: '6 min read',
      featured: true
    }
  ],
  title = 'Featured Business Reports'
}: Oadd0Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-muted/30 to-background">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
        </div>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, 6).map((article, index) => (
          <article
            key={index}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/50"
          >
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>Featured</span>
            </div>

            {/* Cover Image */}
            <a href={article.slug} className="block relative aspect-[16/9] overflow-hidden bg-muted" data-astro-prefetch>
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </a>

            {/* Content */}
            <div className="p-6">
              {/* Category & Read Time */}
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <a href={article.slug} data-astro-prefetch>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </a>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Read More Button */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                asChild
              >
                <a href={article.slug} className="flex items-center justify-center gap-2" data-astro-prefetch>
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-12 text-center">
        <Button size="lg" variant="outline" asChild>
          <a href="/blog" className="inline-flex items-center gap-2" data-astro-prefetch>
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

export default Oadd0;