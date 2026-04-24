"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoreVertical, X, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 bg-black rounded-full border-2 border-primary/30 flex items-center justify-center glow-pink overflow-hidden group-hover:border-primary transition-colors">
            {/* Animated Fish Logo (Simulated GIF) */}
            <motion.div
              animate={{ 
                y: [2, -2, 2],
                x: [1, -1, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 scale-[2.5]"
              style={{ originX: 0.5, originY: 0.3 }}
            >
              <Image 
                src="/canvas/1.png" 
                fill 
                alt="Monarch Logo" 
                className="object-cover"
                style={{ objectPosition: '50% 32%' }}
              />
            </motion.div>
            {/* Overlay to further hide text remnants and add depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
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
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/shows" className="text-sm font-medium hover:text-primary transition-colors">TV Shows</Link>
          <Link href="/movies" className="text-sm font-medium hover:text-primary transition-colors">Movies</Link>
          
          {/* Subsidiaries Dropdown */}
          <div className="relative group py-2">
            <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              Our Subsidiaries
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_30px_rgba(255,204,233,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50">
              <Link href="/subsidiaries/channel" className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-primary hover:bg-primary/10 transition-colors">Monarch TV Channel</Link>
              <Link href="/subsidiaries/crypto" className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-primary hover:bg-primary/10 transition-colors">Monarch TV Crypto</Link>
              <Link href="/subsidiaries/novels" className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-primary hover:bg-primary/10 transition-colors">Monarch TV Novels</Link>
            </div>
          </div>

          {/* More Dropdown */}
          <div className="relative group py-2">
            <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-widest">
              More
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_30px_rgba(255,204,233,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50">
              <Link href="/top-rated" className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-primary hover:bg-primary/10 transition-colors">Top Rated</Link>
              <Link href="/recently-added" className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-primary hover:bg-primary/10 transition-colors">Recently Added</Link>
              <Link href="/archives" className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-primary hover:bg-primary/10 transition-colors italic tracking-tighter">Explore the Archives</Link>
            </div>
          </div>

          <Link href="/news" className="text-sm font-medium hover:text-primary transition-colors">News</Link>
          <Link href="/new" className="text-sm font-medium hover:text-primary transition-colors">New & Popular</Link>
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
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col p-6 gap-6 transition-all duration-300 md:hidden z-40 overflow-hidden",
          isMobileMenuOpen ? "opacity-100 visible max-h-[500px]" : "opacity-0 invisible max-h-0 py-0 border-transparent"
        )}
      >
        <Link href="/" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="/shows" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>TV Shows</Link>
        <Link href="/movies" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Movies</Link>
        
        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Our Subsidiaries</span>
          <Link href="/subsidiaries/channel" className="pl-4 text-lg text-white/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Monarch TV Channel</Link>
          <Link href="/subsidiaries/crypto" className="pl-4 text-lg text-white/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Monarch TV Crypto</Link>
          <Link href="/subsidiaries/novels" className="pl-4 text-lg text-white/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Monarch TV Novels</Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-white/40 uppercase tracking-widest">More</span>
          <Link href="/top-rated" className="pl-4 text-lg text-white/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Top Rated</Link>
          <Link href="/recently-added" className="pl-4 text-lg text-white/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Recently Added</Link>
          <Link href="/archives" className="pl-4 text-lg text-white/80 hover:text-primary transition-colors italic" onClick={() => setIsMobileMenuOpen(false)}>Explore the Archives</Link>
        </div>

        <Link href="/news" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
        <Link href="/new" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>New & Popular</Link>
      </div>
    </nav>
  );
};

export default Navbar;
