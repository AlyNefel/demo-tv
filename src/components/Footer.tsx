"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-black/50 backdrop-blur-sm relative z-20">
      <style>{`
        @keyframes logo-swim {
          0%, 100% { transform: translateY(0) scale(1); filter: brightness(1); }
          20% { transform: translateY(-4px) scale(1.15); filter: brightness(1.2); }
          40% { transform: translateY(-8px) scale(0.9); filter: brightness(0.8); }
          60% { transform: translateY(4px) scale(1.1); filter: brightness(1.1); }
          80% { transform: translateY(6px) scale(0.95); filter: brightness(0.9); }
        }
        .animate-logo-swim {
          animation: logo-swim 8s infinite ease-in-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 bg-black rounded-full border-2 border-primary/30 flex items-center justify-center glow-pink overflow-hidden">
            <div className="absolute inset-0 p-1">
              <img 
                src="/logo/logo-modified.png" 
                alt="Monarch Logo" 
                className="w-full h-full object-contain animate-logo-swim"
              />
            </div>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-heading font-black tracking-tighter text-white leading-none">
              MONARCH
            </span>
            <span className="text-[8px] font-black tracking-[0.3em] text-primary uppercase leading-none">
              TV STUDIOS
            </span>
          </div>
        </div>
        
        <div className="flex gap-8 text-sm text-muted-foreground font-rosario">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
        </div>
        
        <p className="text-xs text-muted-foreground font-rosario">
          © 2026 MONARCH TV STUDIOS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
