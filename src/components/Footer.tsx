"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-black/50 backdrop-blur-sm relative z-20">
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 bg-black rounded-full border-2 border-primary/30 flex items-center justify-center glow-pink overflow-hidden animate-contour-pulse">
            <div className="absolute inset-0 p-1">
              <img 
                src="/logo/logo-modified.png" 
                alt="Monarch Logo" 
                className="w-full h-full object-contain animate-logo-tv"
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
          <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</a>
          <a href="/#contact" className="hover:text-primary transition-colors">Contact Us</a>
        </div>
        
        <p className="text-xs text-muted-foreground font-rosario">
          © 2026 MONARCH TV STUDIOS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
