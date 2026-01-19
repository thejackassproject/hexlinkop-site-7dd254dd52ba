import React from 'react';

function A8423dc({
  badge = "About Us",
  heading = "Discover Everything About Businesses",
  items = [
    {
      badge: "Mission",
      title: "Our Core Mission",
      description: "We are dedicated to providing valuable insights and resources that empower businesses of all sizes to succeed in today's competitive landscape.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/c401741a-d47a-4536-c625-92cbd3ede600/public",
      colSpan: 3
    },
    {
      badge: "History",
      title: "Our Business Journey",
      description: "Founded with a passion for entrepreneurship, we've evolved to become a trusted source of business information and guidance.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/c7b252ba-b573-4f55-0770-da37dc03f600/public",
      colSpan: 3
    },
    {
      badge: "Team",
      title: "Meet Our Experts",
      description: "Our diverse team of business professionals brings years of experience to deliver accurate and actionable business insights.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/9ca62476-dcf0-4322-aeaa-eeb7cb365600/public",
      colSpan: 2
    },
    {
      badge: "Resources",
      title: "Comprehensive Resources",
      description: "Access articles, guides, and tools designed to help you navigate the complexities of running and growing a business.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/3e77db4b-4ca4-4565-11ef-02dacff69d00/public",
      colSpan: 2
    },
    {
      badge: "Community",
      title: "Join Our Community",
      description: "Connect with like-minded entrepreneurs and business owners through our forums and networking opportunities.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/3ea7d525-735e-41cd-e034-0733211bf800/public",
      colSpan: 2
    }
  ]
}: A8423dcProps) {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary">{badge}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
          {heading}
        </p>
        
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-[repeat(2,400px)]">
          {/* First item - top left (spans 3 cols) */}
          {items[0] && (
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                <img 
                  className="h-80 object-cover object-left" 
                  src={items[0].image} 
                  alt={items[0].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[0].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[0].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[0].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
            </div>
          )}
          
          {/* Second item - top right (spans 3 cols) */}
          {items[1] && (
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card lg:rounded-tr-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <img 
                  className="h-80 object-cover object-left lg:object-right" 
                  src={items[1].image} 
                  alt={items[1].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[1].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[1].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[1].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border lg:rounded-tr-[2rem]"></div>
            </div>
          )}
          
          {/* Third item - bottom left (spans 2 cols) */}
          {items[2] && (
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card lg:rounded-bl-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <img 
                  className="h-80 object-cover object-left" 
                  src={items[2].image} 
                  alt={items[2].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[2].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[2].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[2].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border lg:rounded-bl-[2rem]"></div>
            </div>
          )}
          
          {/* Fourth item - bottom middle (spans 2 cols) */}
          {items[3] && (
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <img 
                  className="h-80 object-cover" 
                  src={items[3].image} 
                  alt={items[3].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[3].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[3].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[3].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border"></div>
            </div>
          )}
          
          {/* Fifth item - bottom right (spans 2 cols) */}
          {items[4] && (
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <img 
                  className="h-80 object-cover" 
                  src={items[4].image} 
                  alt={items[4].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[4].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[4].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[4].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default A8423dc;