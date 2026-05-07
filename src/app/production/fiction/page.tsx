"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowCard from "@/components/ShowCard";
import { fictionSeries } from "@/lib/fiction-series";
import { motion } from 'framer-motion';

const fictionSeriesShows = fictionSeries.map(s => ({
  id: s.id,
  title: s.title,
  titleSecondary: s.titleSecondary,
  synopsis: s.description,
  rating: 9.5,
  year: s.year,
  genres: ["Fiction Series"],
  poster: `/Fiction Series Production/${s.img}`,
  banner: `/Fiction Series Production/${s.img}`,
  cast: [],
  trailer: "",
  fontClass: s.fontClass,
  secondaryFontClass: s.secondaryFontClass
}));

export default function FictionSeriesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-black relative overflow-hidden">
        {/* Pink Smoke Animations */}
        <style>{`
          @keyframes smoke-bg {
            0% { transform: translate(30%, 30%) scale(1); opacity: 0; filter: blur(40px); }
            50% { opacity: 0.3; filter: blur(60px); }
            100% { transform: translate(-50%, -60%) scale(2); opacity: 0; filter: blur(80px); }
          }
          .smoke-bg-1 { animation: smoke-bg 8s infinite ease-in-out; }
          .smoke-bg-2 { animation: smoke-bg 10s infinite ease-in-out 2s; }
        `}</style>

        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen z-0">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full smoke-bg-1" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-pink-600/20 rounded-full smoke-bg-2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter uppercase mb-6 flex items-center gap-4">
              <span className="w-3 h-12 md:h-20 bg-primary rounded-full glow-pink" />
              Fiction <span className="text-primary">Series</span>
            </h1>
            <p className="text-xl text-white/60 font-rosario max-w-2xl italic">
              Premium cinematic storytelling that transcends reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {fictionSeriesShows.map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ShowCard show={show} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
