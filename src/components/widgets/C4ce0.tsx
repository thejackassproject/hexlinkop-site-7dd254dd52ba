import { Button } from "@/components/ui/button";

interface C4ce0Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  backgroundImage?: string;  // Background image for hero section (SEO: used for og:image)
  variant?: 'centered' | 'split' | 'minimal';
}

function C4ce0({
  title = "Empower Your Business",
  subtitle = "Access valuable information, insights, and resources to drive success in your entrepreneurial journey.",
  ctaText = "Learn More",
  ctaLink = "/about",
  secondaryCtaText = "View Reports",
  secondaryCtaLink = "/report",
  imageSrc,
  backgroundImage = "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/a88c3c79-08a6-4f91-5f40-36ce38fc9e00/public",
  variant = 'centered'
}: C4ce0Props) {
  // Determine background style: use backgroundImage if provided, otherwise gradient
  const backgroundStyle = backgroundImage 
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};
  
  const textColorClass = backgroundImage ? 'text-white' : 'text-foreground';
  const subtextColorClass = backgroundImage ? 'text-gray-200' : 'text-muted-foreground';
  
  return (
    <section 
      className="relative min-h-[600px] py-32 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center"
      style={backgroundStyle}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${variant === 'split' ? 'lg:flex-row' : ''} items-center gap-12`}>
          <div className={`flex-1 ${variant === 'centered' ? 'text-center' : 'text-left'}`}>
            <h1 className={`text-5xl md:text-6xl font-bold ${textColorClass} mb-6 leading-tight`}>
              {title}
            </h1>
            <p className={`text-xl md:text-2xl ${subtextColorClass} mb-8 max-w-2xl ${variant === 'centered' ? 'mx-auto' : ''}`}>
              {subtitle}
            </p>
            <div className={`flex gap-4 ${variant === 'centered' ? 'justify-center' : 'justify-start'}`}>
              <Button size="lg" className="text-lg px-8 py-6">
                <a href={ctaLink} data-astro-prefetch>{ctaText}</a>
              </Button>
              {secondaryCtaText && (
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <a href={secondaryCtaLink} data-astro-prefetch>{secondaryCtaText}</a>
                </Button>
              )}
            </div>
          </div>
          {imageSrc && variant === 'split' && (
            <div className="flex-1">
              <img 
                src={imageSrc} 
                alt="Hero visual" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default C4ce0;