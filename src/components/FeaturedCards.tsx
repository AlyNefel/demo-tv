"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FeaturedCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="relative h-64 md:h-96 rounded-3xl overflow-hidden group border border-white/10 hover:border-primary/50 transition-colors duration-500 shadow-2xl"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1593784991095-a205039470b6?q=80&w=2070&auto=format&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-3xl font-black mb-2 text-white italic tracking-tighter">THE FUTURE IS NEON</h3>
            <p className="text-white/80 max-w-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Discover the next generation of cyberpunk storytelling.</p>
            <button className="w-fit px-6 py-2 bg-primary text-primary-foreground font-bold rounded-full glow-pink transition-transform active:scale-95">Explore</button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.2 }}
          className="relative h-64 md:h-96 rounded-3xl overflow-hidden group border border-white/10 hover:border-white/50 transition-colors duration-500 shadow-2xl"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2037&auto=format&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-3xl font-black mb-2 text-white italic tracking-tighter">BEYOND REALITY</h3>
            <p className="text-white/80 max-w-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Unravel the mysteries of the multiverse in our latest originals.</p>
            <button className="w-fit px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all active:scale-95">Learn More</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCards;
