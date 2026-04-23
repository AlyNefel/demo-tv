"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 bg-black rounded-xl border border-primary/30 flex items-center justify-center glow-pink rotate-3 group-hover:rotate-0 transition-transform">
            <span className="text-2xl font-black text-primary italic">M</span>
            {/* Liquid metal decoration */}
            <div className="absolute -inset-1 opacity-20 pointer-events-none">
               <Image src="/canvas/21.png" fill alt="" className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-2xl font-heading font-black tracking-tighter text-white leading-none">
              MONARCH
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase leading-none">
              TV STUDIOS
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/shows" className="text-sm font-medium hover:text-primary transition-colors">TV Shows</Link>
          <Link href="/movies" className="text-sm font-medium hover:text-primary transition-colors">Movies</Link>
          <Link href="/news" className="text-sm font-medium hover:text-primary transition-colors">News</Link>
          <Link href="/new" className="text-sm font-medium hover:text-primary transition-colors">New & Popular</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className={cn(
            "flex items-center bg-white/5 rounded-full px-3 py-1 border border-white/10 transition-all",
            isSearchOpen ? "w-64" : "w-10 overflow-hidden"
          )}>
            <Search 
              className="cursor-pointer text-muted-foreground hover:text-primary" 
              size={18} 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <input 
              type="text" 
              placeholder="Search shows..."
              className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
