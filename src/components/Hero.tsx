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


      {/* Background Image with Parallax, Entrance, and 'Swimming/Bouncing' Loop */}
      <motion.div 
        style={{ y: y1 }}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-10"
      >
        <motion.div 
          animate={{ 
            x: [0, -40, 20, 0],
            y: [0, -25, 10, 0],
            scale: [1.1, 1.18, 1.12, 1.1],
            rotate: [0, 2, -1, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(/homeHero/first-bg.png)`,
            filter: 'drop-shadow(0 0 40px rgba(255, 204, 233, 0.3))'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 w-full"
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
          
          <h1 className="text-5xl md:text-[7.5rem] font-heading font-black mb-6 tracking-tighter leading-[0.85] text-white drop-shadow-[0_0_30px_rgba(255,204,233,0.3)] uppercase">
            MONARCH TV<br />
            <span className="text-primary text-glow-pink italic">STUDIOS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 line-clamp-3 leading-relaxed max-w-xl font-medium">
            Where reality meets the extraordinary. Experience the most ambitious storytelling in television history.
          </p>
        </motion.div>
      </motion.div>



      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
