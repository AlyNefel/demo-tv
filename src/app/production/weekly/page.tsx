"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import ShowCard from "@/components/ShowCard";
import { weeklyPrograms } from "@/lib/weekly-programs";
import { motion } from 'framer-motion';

const weeklyNewsShows = weeklyPrograms.map(p => ({
  id: p.id,
  title: p.title,
  synopsis: p.description,
  rating: 9.0,
  year: 2026,
  genres: ["TV Program"],
  poster: `/weekly-news-tv-programs/${p.img}`,
  banner: `/weekly-news-tv-programs/${p.img}`,
  cast: [],
  trailer: "",
  monarchFont: p.monarchFont,
  showFont: p.showFont,
}));

export default function WeeklyProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              {/* Left: Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-1 relative aspect-[2/3] w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group charging-border z-20"
              >
                <div className="absolute inset-[2px] rounded-2xl bg-black z-10 overflow-hidden">
                  <Image 
                    src="/production/WeeklyTv.png" 
                    fill 
                    alt="Weekly TV Hero" 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                {/* Decorative glow */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none group-hover:border-primary/40 transition-colors duration-500 z-20" />
              </motion.div>

              {/* Right: Text Content */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
                  Flagship Programs
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-black text-white italic tracking-tighter uppercase mb-6 leading-none">
                  Weekly <br />
                  <span className="text-primary text-glow-pink">TV Programs</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-rosario max-w-xl italic leading-relaxed">
                  "Insightful journalism and engaging weekly sets from our flagship programs, bringing you the latest in scientific news and global affairs."
                </p>
                <div className="w-24 h-1.5 bg-primary mt-10 rounded-full glow-pink" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pink Smoke & Border Animations */}
        <style>{`
           @keyframes smoke-bg {
             0% { transform: translate(30%, 30%) scale(1); opacity: 0; filter: blur(40px); }
             50% { opacity: 0.3; filter: blur(60px); }
             100% { transform: translate(-50%, -60%) scale(2); opacity: 0; filter: blur(80px); }
           }
           @keyframes border-rotate {
             0% { transform: rotate(0deg); }
             100% { transform: rotate(360deg); }
           }
           .smoke-bg-1 { animation: smoke-bg 8s infinite ease-in-out; }
           .smoke-bg-2 { animation: smoke-bg 10s infinite ease-in-out 2s; }
           .charging-border::before {
             content: '';
             position: absolute;
             top: -50%;
             left: -50%;
             width: 200%;
             height: 200%;
             background: conic-gradient(
               from 0deg,
               transparent 0deg,
               transparent 280deg,
               #ffcce9 310deg,
               #ffcce9 360deg
             );
             animation: border-rotate 3s linear infinite;
           }
        `}</style>

        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen z-0">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full smoke-bg-1" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-pink-600/20 rounded-full smoke-bg-2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 border-l-4 border-primary pl-8"
          >
            <h2 className="text-4xl font-heading font-black text-white italic tracking-tighter uppercase mb-4">
              Current <span className="text-primary">Programs</span>
            </h2>
            <p className="text-lg text-white/50 font-rosario max-w-xl italic">
              Watch our weekly sets covering scientific discoveries, sports, and international news.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {weeklyNewsShows.map((show, index) => (
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
    </>
  );
}
