import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AccordionItem {
  question: string;
  answer: string;
}

interface K236bProps {
  title?: string;
  subtitle?: string;
  items?: AccordionItem[];
}

export default function K236b({
  title = "About Our Business Insights",
  subtitle = "Learn more about our mission, services, and how we provide valuable information to help businesses thrive in today's competitive landscape.",
  items = [
    {
      question: "What kind of business information do you provide?",
      answer: "We offer comprehensive insights on various aspects of business, including market trends, industry analysis, financial strategies, and operational best practices. Our content is designed to empower entrepreneurs and managers with actionable knowledge."
    },
    {
      question: "Who can benefit from our services?",
      answer: "Our resources are tailored for startup founders, small business owners, corporate executives, consultants, and anyone interested in business development. Whether you're launching a new venture or optimizing an existing one, our information supports informed decision-making."
    },
    {
      question: "How is the information sourced?",
      answer: "We gather data from reputable sources such as industry reports, economic studies, expert interviews, and real-world case studies. Our team of analysts ensures accuracy and relevance by cross-referencing multiple sources and staying up-to-date with the latest developments."
    },
    {
      question: "Is the information free?",
      answer: "Yes, we provide a wealth of free resources on our site, including articles, guides, and basic tools. For premium insights, in-depth reports, and personalized consultations, we offer subscription plans that unlock advanced content."
    },
    {
      question: "How often is the content updated?",
      answer: "We update our content regularly to reflect the latest business trends and economic shifts. New articles, analyses, and tools are published weekly, with major industry changes prompting immediate updates to keep our community informed and ahead of the curve."
    }
  ]
}: K236bProps) {
  return (
    <section className="py-16 px-6 lg:py-24">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            data-astro-prefetch
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
