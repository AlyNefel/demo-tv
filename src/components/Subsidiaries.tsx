"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const subsidiaries = [
  {
    name: "Monarch TV Studios Content Production Entity",
    image: "/subsidiaries/image.png",
    desc: "Based in Tunis, Tunisia, with a prospective studio complex in Tunisia, specializes in producing engaging TV shows, documentaries, Fiction and Pseudo-Fiction series. We focus on innovative storytelling and high-quality content to captivate diverse audiences."
  },
  {
    name: "Monarch TV Studios Music Production Entity",
    image: "/subsidiaries/image copy.png",
    desc: "Located in Tunis, Tunisia, is dedicated to producing scores, soundtracks, and music for cinema and TV. It supports the group’s audiovisual productions by delivering compelling music that enhances the emotional impact and artistic value of each project."
  }
];

const Subsidiaries = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section id="subsidiaries" ref={containerRef} className="py-32 bg-black relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
              Strategic Entities
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter uppercase mb-6">
              OUR <span className="text-primary text-glow-pink">SUBSIDIARIES</span>
            </h2>
            <div className="w-32 h-1.5 bg-primary mx-auto rounded-full glow-pink" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative flex flex-col h-full rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-all duration-700 shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={sub.image}
                  fill
                  alt={sub.name}
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
              </div>
              <div className="p-12 flex flex-col flex-1">
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-6 group-hover:text-primary transition-colors">
                  {sub.name}
                </h3>
                <div className="w-12 h-1 bg-primary rounded-full mb-6 opacity-40 group-hover:opacity-100 transition-opacity glow-pink" />
                <p className="text-white/60 leading-relaxed font-rosario text-lg italic">
                  {sub.desc}
                </p>
              </div>

              {/* Animated Accent */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-primary via-white to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
