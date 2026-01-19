import { Menu, Moon, Sun, X } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface B3e0dProps {
  siteName?: string;
  logoSrc?: string;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
  ctaText?: string;
  ctaHref?: string;
  enableDarkMode?: boolean;
  currentPath?: string;
  activeLinkStyle?: 'background' | 'bold' | 'underline';
}

export default function B3e0d({
  siteName = "business site",
  logoSrc = "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/704db63c-e10c-4e16-b792-ebb0a849ff00/public",
  menuItems = [
    {"label": "Home", "href": "/"},
    {"label": "About", "href": "/about"},
    {"label": "Report", "href": "/report"}
  ],
  ctaText = "Explore Reports",
  ctaHref = "/report",
  enableDarkMode = true,
  currentPath = "/",
  activeLinkStyle = "bold",
}: B3e0dProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/" && currentPath === "/") return true;
    if (href !== "/" && currentPath.startsWith(href)) return true;
    return false;
  };

  // Get active link classes based on style variant
  const getActiveClasses = (href: string) => {
    if (!isActive(href)) return "text-foreground/60 hover:text-foreground";
    
    switch (activeLinkStyle) {
      case 'background':
        return "text-primary-foreground bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-md";
      case 'bold':
        return "text-primary font-bold";
      case 'underline':
        return "text-primary border-b-2 border-primary";
      default:
        return "text-primary font-bold";
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" data-astro-prefetch className="flex items-center space-x-2 shrink-0">
          {logoSrc ? (
            <img 
              src={logoSrc} 
              alt={`${siteName} logo`} 
              className="h-[90%] w-auto max-w-[240px] object-contain"
            />
          ) : (
            <>
              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {siteName.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="font-semibold text-lg hidden sm:inline-block">{siteName}</span>
            </>
          )}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-astro-prefetch
              className={`text-sm font-medium transition-colors ${getActiveClasses(item.href)}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {enableDarkMode && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Button asChild size="sm" className="h-9">
            <a href={ctaHref} data-astro-prefetch>{ctaText}</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          {enableDarkMode && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>{siteName}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    data-astro-prefetch
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors py-2 ${getActiveClasses(item.href)}`}
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href={ctaHref} data-astro-prefetch>{ctaText}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}