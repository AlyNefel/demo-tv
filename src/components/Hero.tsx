"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Info, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { shows } from '@/lib/tv-shows';

const Hero = () => {
  const featured = shows[0];
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden flex items-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/monster/hero-banner.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded border border-primary/40 tracking-[0.2em] uppercase">
              Monarch Originals
            </span>
            <div className="h-px w-12 bg-primary/30" />
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-bold tracking-tight">9.8 RATING</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-heading font-black mb-6 tracking-tighter leading-[0.8] text-white drop-shadow-[0_0_30px_rgba(255,204,233,0.3)]">
            MONARCH<br />
            <span className="text-primary text-glow-pink italic">STUDIOS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 line-clamp-3 leading-relaxed max-w-xl font-medium">
            Where reality meets the extraordinary. Experience the most ambitious storytelling in television history.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Button size="lg" className="rounded-full px-10 h-16 text-xl font-black gap-3 glow-pink transition-all hover:scale-105 active:scale-95">
              <Play className="fill-current" size={24} /> WATCH NOW
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-xl font-black gap-3 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
              <Info size={24} /> DETAILS
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Liquid Metal Accents (Decor) */}
      <div className="absolute top-1/4 right-0 opacity-20 pointer-events-none select-none overflow-hidden">
         <Image 
           src="/canvas/15.png" 
           width={800} 
           height={800} 
           alt="decor" 
           className="animate-pulse"
         />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
