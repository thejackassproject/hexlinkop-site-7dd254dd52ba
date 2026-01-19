import { Heart, Shield, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Dd013Props {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
}

const iconMap = {
  zap: Zap,
  shield: Shield,
  users: Users,
  trending: TrendingUp,
  heart: Heart,
  sparkles: Sparkles,
  rocket: Rocket,
  award: Award,
};

export default function Dd013({
  title = "Why Choose Our Business Insights",
  subtitle = "Discover essential features that empower businesses with valuable information and strategies for success",
  features = [
    {
      icon: "zap",
      title: "Instant Business Intelligence",
      description: "Access real-time data and analytics to make informed decisions quickly and stay ahead in the market."
    },
    {
      icon: "shield",
      title: "Secure Data Management",
      description: "Protect sensitive business information with advanced security measures and compliance standards."
    },
    {
      icon: "users",
      title: "Collaborative Networks",
      description: "Build strong partnerships and collaborate with industry experts to expand your business opportunities."
    },
    {
      icon: "trending",
      title: "Growth Analytics",
      description: "Track performance metrics and identify trends to drive sustainable business growth and profitability."
    },
    {
      icon: "heart",
      title: "Customer-Centric Solutions",
      description: "Tailor services to meet customer needs with insights that enhance satisfaction and loyalty."
    },
    {
      icon: "sparkles",
      title: "Innovative Tools",
      description: "Leverage cutting-edge business tools and technologies to streamline operations and boost efficiency."
    }
  ],
  className,
}: Dd013Props) {
  return (
    <section className={cn("py-20 px-6 lg:py-32 bg-gradient-to-b from-background to-muted/30", className)}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Zap;
              
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                      <CardContent className="flex flex-col items-center text-center p-8 h-full justify-start">
                        {/* Icon */}
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}