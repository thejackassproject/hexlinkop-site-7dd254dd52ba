import { ArrowRight, Sparkles } from "lucide-react";
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Eda66aProps {
  heading?: string;
  description?: string;
  primaryButton?: {
    text: string;
    url: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
  };
  className?: string;
}

export default function Eda66a({
  heading = "Unlock Business Insights Today",
  description = "Discover valuable information and strategies to grow your business. Explore our comprehensive resources and reports designed to help entrepreneurs and professionals thrive in today's competitive market.",
  primaryButton = {
    text: "Learn More",
    url: "/about"
  },
  secondaryButton = {
    text: "View Reports",
    url: "/report"
  },
  className,
}: Eda66aProps) {
  return (
    <section className={cn("py-20 px-6 lg:py-32", className)}>
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-12 shadow-2xl lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Exclusive Business Resources</span>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl">
              {heading}
            </h2>
            
            <p className="mb-10 text-lg text-white/90 max-w-2xl lg:text-xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl text-base px-8"
              >
                <a href={primaryButton.url} className="flex items-center gap-2">
                  {primaryButton.text}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white text-base px-8"
              >
                <a href={secondaryButton.url}>
                  {secondaryButton.text}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}