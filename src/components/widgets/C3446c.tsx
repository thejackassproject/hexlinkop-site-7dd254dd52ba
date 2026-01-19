import { ArrowRight, Calendar, Clock } from "lucide-react";
import React from 'react';

function C3446c({
  articles = [
    {
      slug: '/report/business-growth-strategies',
      title: 'Strategies for Sustainable Business Growth',
      excerpt: 'Explore essential tactics and insights to drive long-term success in your business operations, focusing on market expansion and customer retention.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/9134479d-ccc3-4124-1d84-94ea59ce2800/public',
      category: 'Growth',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/7a23afbe-fa6c-46d0-a128-5cc1a4222d00/public',
      },
      date: 'Dec 15, 2023',
      readTime: '5 min read',
    },
    {
      slug: '/report/financial-planning-essentials',
      title: 'Financial Planning Essentials for Entrepreneurs',
      excerpt: 'Learn the fundamentals of budgeting, forecasting, and risk management to secure your business future and maximize profitability.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/3c963433-9caf-4166-45b9-755c024c3b00/public',
      category: 'Finance',
      author: {
        name: 'Michael Chen',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/11f99460-edf3-4a36-e445-562c58c16400/public',
      },
      date: 'Dec 12, 2023',
      readTime: '7 min read',
    },
    {
      slug: '/report/digital-transformation-guide',
      title: 'Navigating Digital Transformation in Business',
      excerpt: 'A comprehensive guide to adopting digital technologies, enhancing efficiency, and staying competitive in the modern marketplace.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/08d825a1-751a-431e-fe45-0e59c289ee00/public',
      category: 'Technology',
      author: {
        name: 'Emily Davis',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/d2c646d0-c49c-4c40-00af-4db3093f1800/public',
      },
      date: 'Dec 10, 2023',
      readTime: '6 min read',
    },
    {
      slug: '/report/leadership-skills-development',
      title: 'Developing Leadership Skills for Business Success',
      excerpt: 'Key skills and practices to build effective leadership teams, foster innovation, and drive organizational excellence.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/f294fa90-9488-43b9-c3f2-ca4bcca58e00/public',
      category: 'Leadership',
      author: {
        name: 'David Lee',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/c19d9854-18fa-4068-f9c8-029e803c5600/public',
      },
      date: 'Dec 8, 2023',
      readTime: '8 min read',
    },
    {
      slug: '/report/market-research-best-practices',
      title: 'Best Practices in Market Research',
      excerpt: 'Understand consumer behavior, analyze trends, and gather actionable insights to inform your business decisions and strategies.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/8958afc4-d766-4885-0c2b-9ee744b21300/public',
      category: 'Research',
      author: {
        name: 'Lisa Wong',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/fab9d6d8-0473-41d5-296b-ffd2429baa00/public',
      },
      date: 'Dec 5, 2023',
      readTime: '4 min read',
    },
    {
      slug: '/report/sustainability-in-business',
      title: 'Sustainability Initiatives for Modern Businesses',
      excerpt: 'Implement eco-friendly practices, reduce carbon footprint, and align your business with sustainable development goals.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/14cc988e-cb2a-4766-70ec-1326cf225100/public',
      category: 'Sustainability',
      author: {
        name: 'Robert Taylor',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/17976eeb-07de-4364-1616-7d35b3306000/public',
      },
      date: 'Dec 3, 2023',
      readTime: '6 min read',
    },
  ],
  columns = 3
}: C3446cProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Grid */}
      <div 
        className={`grid grid-cols-1 ${
          columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'
        } gap-8`}
      >
        {articles.map((article, index) => (
          <article
            key={index}
            className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50 flex flex-col"
          >
            {/* Cover Image */}
            <a href={article.slug} data-astro-prefetch className="block aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Category */}
              <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                {article.category}
              </span>

              {/* Title */}
              <a href={article.slug} data-astro-prefetch>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </a>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-1">
                {article.excerpt}
              </p>

              {/* Author & Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {/* Author */}
                <div className="flex items-center gap-2">
                  {article.author.avatar ? (
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">
                        {article.author.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">{article.author.name}</span>
                </div>
              </div>

              {/* Date & Read Time */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <a
                href={article.slug}
                data-astro-prefetch
                className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default C3446c;