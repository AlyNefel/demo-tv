"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Stronger Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-black flex items-center min-h-[80vh]">
      {/* Deep Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-40 scale-150"
      >
        <Image 
          src="/canvas/38.png" 
          fill 
          alt="About Monarch" 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/90" />
      </motion.div>

      {/* Floating Canvas Elements with inverse Parallax */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute right-0 top-1/4 z-10 opacity-30 pointer-events-none"
      >
        <Image 
          src="/canvas/12.png" 
          width={600} 
          height={600} 
          alt="" 
          className="object-contain animate-pulse" 
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div style={{ opacity }} className="space-y-8">
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded border border-primary/40 tracking-[0.2em] uppercase">
              Behind the Scenes
            </div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-none tracking-tighter">
              REDEFINING <br />
              <span className="text-primary italic text-glow-pink">REALITY</span>
            </h2>
            
            <div className="w-24 h-1 bg-primary rounded-full glow-pink" />
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Monarch TV Studios was founded on a simple premise: television should not just be watched, it should be experienced. We blend cutting-edge visual effects with profound narrative design to create worlds that stay with you long after the screen goes dark.
            </p>
            
            <p className="text-lg text-white/60 leading-relaxed font-light">
              From the abyssal depths of the ocean to the neon-soaked streets of tomorrow, our original series push the boundaries of what is possible in serialized storytelling.
            </p>
            
            <button className="px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold tracking-widest uppercase transition-all duration-300 rounded-full glow-pink hover:scale-105">
              Discover Our Story
            </button>
          </motion.div>
          
          {/* Parallax Image Grid */}
          <div className="relative h-[600px] hidden lg:block">
            <motion.div 
              style={{ y: y2 }}
              className="absolute top-10 left-0 w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20"
            >
              <Image src="/monster/show-1.png" fill alt="" className="object-cover" />
            </motion.div>
            
            <motion.div 
              style={{ y: y1 }}
              className="absolute bottom-10 right-0 w-80 h-96 rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(255,204,233,0.15)] z-10"
            >
              <Image src="/monster/show-3.png" fill alt="" className="object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
