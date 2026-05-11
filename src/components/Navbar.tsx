"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoreVertical, X, Play, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    label: "About Us",
    href: "/about-us",
    subItems: [
      { label: "About Us", href: "/about-us" },
      { label: "Leadership", href: "/leadership" },
      { label: "Facilities", href: "/facilities" },
    ],
  },
  {
    label: "Channel Bouquet",
    href: "/channel-bouquet",
    subItems: [
      { label: "Channels Audiences", href: "/audiences" },
      { label: "Three Stellite & Fast TV Channels", href: "/the-three-satellite-fast-tv-channels-bouquet" },
    ],
  },
  {
    label: "Production",
    href: "/production",
    subItems: [
      { label: "Fiction Series", href: "/production/fiction" },
      { label: "Weekly TV Set Programs", href: "/production/weekly" },
    ],
  },
  {
    label: "Our Assets",
    href: "/our-assets",
    subItems: [
      { label: "The Carthaginians", href: "/our-assets/carthaginians" },
      { label: "Capsule Magazine", href: "/our-assets/capsule" },
    ],
  },
  {
    label: "Investor relation",
    href: "/investors-relation",
    subItems: [
      { label: "How to Contact Us", href: "/investors-relation#contact" },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled || isMobileMenuOpen ? "bg-background/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <style>{`
        @keyframes logo-tv {
          0%, 100% { 
            transform: scale(1); 
            filter: brightness(1) blur(0px);
            opacity: 1;
          }
          45% { opacity: 1; }
          50% { 
            transform: scale(1.15); 
            filter: brightness(1.3) blur(2px);
            opacity: 0.8;
          }
          55% { opacity: 1; }
        }
        @keyframes contour-pulse {
          0%, 100% { 
            transform: scale(1); 
            border-color: rgba(255, 204, 233, 0.3);
            box-shadow: 0 0 10px rgba(255, 204, 233, 0.2);
          }
          50% { 
            transform: scale(1.1); 
            border-color: rgba(255, 204, 233, 0.9);
            box-shadow: 0 0 30px rgba(255, 204, 233, 0.6);
          }
        }
        .animate-logo-tv {
          animation: logo-tv 4s infinite ease-in-out;
        }
        .animate-contour-pulse {
          animation: contour-pulse 4s infinite ease-in-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 bg-black rounded-full border-2 border-primary/30 flex items-center justify-center glow-pink overflow-hidden group-hover:border-primary transition-colors animate-contour-pulse">
            {/* Logo */}
            <div className="absolute inset-0">
              <Image 
                src="/logo/logo-modified.png" 
                fill 
                alt="Monarch Logo" 
                className="object-contain p-1 animate-logo-tv"
              />
            </div>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-2xl font-heading font-black tracking-tighter text-white leading-none group-hover:text-primary transition-colors">
              MONARCH
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase leading-none">
              TV STUDIOS
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group/menu">
              {item.label === "Production" || item.label === "Channel Bouquet" ? (
                <div className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2 cursor-default">
                  {item.label}
                  <ChevronDown size={14} className="group-hover/menu:rotate-180 transition-transform" />
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2"
                >
                  {item.label}
                  <ChevronDown size={14} className="group-hover/menu:rotate-180 transition-transform" />
                </Link>
              )}
              
              {/* Dropdown */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 translate-y-2 group-hover/menu:translate-y-0">
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 min-w-[220px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="flex flex-col gap-1">
                    {item.subItems.map((sub) => (
                      <Link 
                        key={sub.label} 
                        href={sub.href}
                        className="text-xs text-white/70 hover:text-primary hover:bg-white/5 p-2 rounded-lg transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle (Kebab Menu) */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-white/10 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col p-6 gap-2 md:hidden z-40 overflow-hidden"
          >
            {menuItems.map((item) => (
              <div key={item.label} className="flex flex-col border-b border-white/5 pb-2 mb-2">
                <button 
                  onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === item.label ? null : item.label)}
                  className="flex items-center justify-between text-xl font-medium hover:text-primary transition-colors py-2 text-left"
                >
                  {item.label}
                  <ChevronDown 
                    size={20} 
                    className={cn("transition-transform", activeMobileSubmenu === item.label && "rotate-180")} 
                  />
                </button>
                
                <AnimatePresence>
                  {activeMobileSubmenu === item.label && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-3 pl-4 overflow-hidden"
                    >
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.label} 
                          href={sub.href} 
                          className="text-base text-white/60 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
