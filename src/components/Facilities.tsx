"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const facilityItems = [
  {
    title: "Production Studios",
    desc: "Designed for versatile productions with three fully equipped studios covering 1,300 m².",
    image: "/facilities/image.png"
  },
  {
    title: "HQ Building",
    desc: "A separate three-floor facility housing offices, control rooms, and creative creative spaces.",
    image: "/facilities/image copy.png"
  },
  {
    title: "Creative Spaces",
    desc: "Advanced infrastructure supporting all subsidiaries for high-quality content creation.",
    image: "/facilities/image copy 2.png"
  }
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-32 bg-black relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
              World Class Infrastructure
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter uppercase mb-8">
              OUR <span className="text-primary text-glow-pink">FACILITIES</span>
            </h2>
            
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-white/70 font-rosario leading-relaxed italic mb-10">
              "Monarch TV Studios HQ in Tunisia is a 4,000 m² modern complex with three fully equipped studios covering 1,300 m², designed for versatile productions. The three-floor HQ building is separate from the studios and includes offices, control rooms, and creative spaces, supporting all subsidiaries and ensuring high-quality content creation with advanced infrastructure."
            </p>

            <div className="w-32 h-1.5 bg-primary mx-auto rounded-full glow-pink" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {facilityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-700 bg-white/[0.03] shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={item.image} 
                  fill 
                  alt={item.title} 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed font-rosario text-lg italic">
                  {item.desc}
                </p>
              </div>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-primary via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
