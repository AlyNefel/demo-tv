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
            {/* Logo */}
            <div className="absolute inset-0">
              <Image 
                src="/logo/logo-modified.png" 
                fill 
                alt="Monarch Logo" 
                className="object-contain p-1"
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
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/about-us" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
          <Link href="/channel-bouquet" className="text-sm font-medium hover:text-primary transition-colors">Channel Bouquet</Link>
          <Link href="/production" className="text-sm font-medium hover:text-primary transition-colors">Production</Link>
          <Link href="/our-assets" className="text-sm font-medium hover:text-primary transition-colors">Our Assets</Link>
          <Link href="/investors-relation" className="text-sm font-medium hover:text-primary transition-colors">Investors Relation</Link>
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
        <Link href="/about-us" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
        <Link href="/channel-bouquet" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Channel Bouquet</Link>
        <Link href="/production" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Production</Link>
        <Link href="/our-assets" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Assets</Link>
        <Link href="/investors-relation" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Investors Relation</Link>
      </div>
    </nav>
  );
};

export default Navbar;
