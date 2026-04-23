"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { motion } from 'framer-motion';

const series = [
  { img: "1.png", title: "REIS BIRDY" },
  { img: "2.png", title: "Hannibal The DRAGON of carthage" },
  { img: "3.png", title: "Sallam the interpreter : a journey to Gog & Magog realm" },
  { img: "4.png", title: "Didon the weeked queen" },
  { img: "5.png", title: "MIJOUJ downtown" },
  { img: "6.png", title: "prophesy" },
  { img: "7.png", title: "the two horned king" },
  { img: "8.png", title: "Qirch" }
];

export default function FictionSeriesPage() {
  return (
    <>
      <Navbar />
      
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

      <main className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter mb-6 uppercase">
            Fiction <span className="text-primary text-glow-pink">Series</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Explore the lore, epic narratives, and production secrets of our narrative masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {series.map((prog, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,204,233,0.15)]"
            >
              <Image 
                src={`/Fiction Series Production/${prog.img}`} 
                fill 
                alt={prog.title} 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Animated Intense Pink Smoke Effect (Diagonal movement) */}
              <div className="absolute inset-0 overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen">
                <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-primary/60 rounded-full smoke-1" />
                <div className="absolute bottom-0 right-[20%] w-56 h-56 bg-pink-500/50 rounded-full smoke-2" />
                <div className="absolute bottom-[10%] right-[40%] w-40 h-40 bg-rose-400/60 rounded-full smoke-3" />
              </div>

              {/* Title Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <h3 className="text-xl font-heading font-black text-white italic tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,204,233,0.8)] leading-tight">
                  {prog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
