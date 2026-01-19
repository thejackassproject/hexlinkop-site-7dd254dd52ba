import React from 'react';

function F747d97({
  badge = "Boost Your Business",
  heading = "Unlock the Power of Business Intelligence",
  description = "Discover comprehensive resources, insights, and tools to drive growth, optimize operations, and stay ahead in the competitive market.",
  items = [
    {
      title: "Market Intelligence",
      description: "Gain deep insights into industry trends, consumer behavior, and competitive landscapes to make informed decisions that propel your business forward.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/f1e37552-63f7-43ba-3932-a38148211e00/public",
      span: "tall"
    },
    {
      title: "Financial Analytics",
      description: "Leverage data-driven financial tools to track performance, forecast revenues, and identify cost-saving opportunities for sustainable growth.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/6fefd6ec-3c53-4992-d9aa-a08271e17600/public",
      span: "normal"
    },
    {
      title: "Operational Efficiency",
      description: "Streamline processes with expert guidance on automation, resource management, and productivity enhancements to maximize your operations.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/a0eb6dc7-38a5-476a-2176-2f353e783e00/public",
      span: "normal"
    },
    {
      title: "Strategic Partnerships",
      description: "Build valuable networks and collaborations that open doors to new opportunities, joint ventures, and accelerated business development.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/32f43961-5b4a-4c58-7ece-0511dc780200/public",
      span: "tall"
    }
  ]
}: F747d97Props) {
  return (
    <div className="bg-muted/30 dark:bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-primary">{badge}</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
          {heading}
        </p>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            {description}
          </p>
        )}
        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-[repeat(2,380px)]">
          {/* First tall item - left column */}
          {items[0] && (
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    {items[0].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    {items[0].description}
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-border bg-muted shadow-2xl">
                    <img 
                      className="size-full object-cover object-top" 
                      src={items[0].image} 
                      alt={items[0].title}
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border lg:rounded-l-[2rem]"></div>
            </div>
          )}
          
          {/* Second item - top middle */}
          {items[1] && (
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    {items[1].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    {items[1].description}
                  </p>
                </div>
                <div className="relative h-52 px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={items[1].image} 
                    alt={items[1].title}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border max-lg:rounded-t-[2rem]"></div>
            </div>
          )}
          
          {/* Third item - bottom middle */}
          {items[2] && (
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    {items[2].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    {items[2].description}
                  </p>
                </div>
                <div className="relative h-52 px-8 max-lg:py-6 lg:pb-2">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={items[2].image} 
                    alt={items[2].title}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border"></div>
            </div>
          )}
          
          {/* Fourth tall item - right column */}
          {items[3] && (
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    {items[3].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    {items[3].description}
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-muted dark:bg-card shadow-2xl border border-border">
                    <img 
                      className="w-full h-full object-cover" 
                      src={items[3].image} 
                      alt={items[3].title}
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default F747d97;