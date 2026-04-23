"use client";

import React from 'react';

const partners = [
  "NEXUS", "AETHER", "LUMINA", "SYNAPSE", "ORACLE", 
  "ECLIPSE", "HORIZON", "NOVA", "VERTEX", "OMNI"
];

const Partners = () => {
  return (
    <div className="w-full bg-black/80 py-10 overflow-hidden border-y border-white/5 relative">
      {/* Decorative gradients for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {/* Double the array for seamless infinite scroll */}
        {[...partners, ...partners].map((partner, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center mx-12 text-white/40 font-heading font-black tracking-widest text-2xl md:text-4xl uppercase hover:text-primary transition-colors cursor-default"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
