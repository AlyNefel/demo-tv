"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import Link from 'next/link';

const newsCategories = [
  {
    title: "Weekly news TV Programs",
    desc: "The latest updates from the Monarch Universe, behind-the-scenes insights, and exclusive announcements.",
    image: "/canvas/34.png", 
    link: "/weekly-news-tv-programs"
  },
  {
    title: "Fiction Series",
    desc: "Explore the lore, cast interviews, and production secrets of our narrative masterpieces.",
    image: "/monster/show-4.png",
    link: "/fiction-series"
  }
];

const WeeklyNews = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      {/* Pink Smoke Animations */}
      <style>{`
        @keyframes smoke {
          0% { transform: translate(30%, 30%) scale(1); opacity: 0; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(30px); }
          100% { transform: translate(-50%, -60%) scale(2); opacity: 0; filter: blur(40px); }
        }
        .smoke-1 { animation: smoke 5s infinite ease-in-out; }
        .smoke-2 { animation: smoke 6s infinite ease-in-out 1.5s; }
        .smoke-3 { animation: smoke 5.5s infinite ease-in-out 2.5s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white italic tracking-tighter mb-4 uppercase">
              Monarch <span className="text-primary">Dispatch</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full glow-pink" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {newsCategories.map((category, i) => {
            const isLink = !!category.link;
            
            const cardContent = (
              <div className={`relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-primary/50 transition-colors duration-500 ${!category.image ? 'bg-primary/5 flex items-center justify-center' : ''}`}>
                {category.image ? (
                  <Image 
                    src={category.image} 
                    fill 
                    alt={category.title} 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                )}

                {/* Animated Intense Pink Smoke Effect Container (always visible, diagonal movement) */}
                <div className="absolute inset-0 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen z-10">
                  <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-primary/80 rounded-full smoke-1" />
                  <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-pink-600/70 rounded-full smoke-2" />
                  <div className="absolute bottom-[10%] right-[40%] w-56 h-56 bg-rose-500/80 rounded-full smoke-3" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tighter">
                    {category.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-primary mb-3 glow-pink" />
                  <p className="text-sm text-white/70 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {category.desc}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                {isLink ? (
                  <Link href={category.link!} className="block w-full h-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeeklyNews;
