"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "@/components/Navbar";

const audienceRegions = [
  { region: "Europe", detail: "Scandinavia, the Baltics, and the United Kingdom" },
  { region: "North America", detail: "USA and Canada" },
  { region: "East Asia", detail: "Japan, South Korea, Southeast Asia, and East Asia" },
  { region: "Oceania", detail: "" },
  { region: "Sub-Saharan Africa", detail: "" }
];

export default function AudiencesPage() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Deep Parallax Layers
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); // Deepest (image.png)
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);   // Middle (map.png)
  
  const mapScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="min-h-screen bg-black overflow-hidden relative">
        
        {/* Layer 1: Deepest Background (image.png) - FULL WIDTH */}
        <motion.div 
          style={{ y: layer1Y }}
          className="fixed inset-0 z-0 pointer-events-none"
        >
          <div className="relative w-full h-full opacity-30">
            <Image 
              src="/audience/image.png" 
              fill 
              alt="" 
              className="object-cover scale-125"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Layer 2: Middle Background (map.png) - FULL WIDTH */}
        <motion.div 
          style={{ y: layer2Y, scale: mapScale }}
          className="fixed inset-0 z-10 pointer-events-none"
        >
          <div className="relative w-full h-full opacity-50">
            <Image 
              src="/audience/map.png" 
              fill 
              alt="Global Distribution Map" 
              className="object-cover drop-shadow-[0_0_80px_rgba(255,204,233,0.4)]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </motion.div>

        {/* Cinematic Pink Glows */}
        <div className="fixed inset-0 z-15 pointer-events-none">
          <div className="absolute top-[-15%] right-[-10%] w-[1200px] h-[1200px] bg-primary/20 rounded-full blur-[180px] animate-pulse" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[1000px] h-[1000px] bg-pink-600/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        {/* Content Layers */}
        <div className="relative z-20">
          
          {/* Hero Content */}
          <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
            <motion.div
              style={{ opacity: heroOpacity }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="inline-block px-6 py-1.5 bg-primary/20 border border-primary/40 text-primary text-[13px] font-black tracking-[0.5em] uppercase rounded-full mb-10 glow-pink">
                Global Network
              </span>
              <h1 className="text-7xl md:text-[12rem] font-heading font-black text-white italic tracking-tighter uppercase leading-[0.75] mb-10">
                AUDIENCE <br />
                <span className="text-primary text-glow-pink">& REACH</span>
              </h1>
              <div className="w-56 h-2.5 bg-primary mx-auto rounded-full glow-pink shadow-[0_0_50px_rgba(255,204,233,1)]" />
            </motion.div>
          </section>

          {/* Distribution Details */}
          <section className="py-48 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                className="relative p-1 bg-gradient-to-br from-primary/50 via-white/10 to-transparent rounded-[3rem] group overflow-hidden shadow-[0_0_60px_rgba(255,204,233,0.1)]"
              >
                <div className="relative z-10 p-14 bg-black/95 backdrop-blur-3xl rounded-[2.9rem] h-full flex flex-col justify-center border border-white/5">
                  <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-10 border border-primary/40 glow-pink">
                    <span className="text-primary font-black text-3xl">01</span>
                  </div>
                  <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">MENA Region</h3>
                  <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-8 leading-tight">
                    SATELLITE <br /><span className="text-primary">DISTRIBUTION</span>
                  </h2>
                  <p className="text-3xl text-white/70 font-rosario font-light italic leading-relaxed">
                    Eutelsat 7WA @ 7/8° West
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className="relative p-1 bg-gradient-to-br from-primary/50 via-white/10 to-transparent rounded-[3rem] group overflow-hidden shadow-[0_0_60px_rgba(255,204,233,0.1)]"
              >
                <div className="relative z-10 p-14 bg-black/95 backdrop-blur-3xl rounded-[2.9rem] h-full flex flex-col justify-center border border-white/5">
                  <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-10 border border-primary/40 glow-pink">
                    <span className="text-primary font-black text-3xl">02</span>
                  </div>
                  <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Worldwide Access</h3>
                  <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-8 leading-tight">
                    FAST <br /><span className="text-primary">PLATFORMS</span>
                  </h2>
                  <p className="text-3xl text-white/70 font-rosario font-light italic leading-relaxed">
                    The Global FAST Platforms
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </div>
          </section>

          {/* Regional Grid */}
          <section className="py-48 px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="flex-1">
                  <h2 className="text-7xl md:text-9xl font-heading font-black text-white italic tracking-tighter uppercase leading-none">
                    REGIONAL <br /><span className="text-primary text-glow-pink">COVERAGE</span>
                  </h2>
                </div>
                <div className="w-full md:w-1/3 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {audienceRegions.map((region, i) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-primary/60 hover:bg-white/[0.07] transition-all duration-700 relative overflow-hidden shadow-2xl"
                  >
                    <div className="relative z-10">
                      <h3 className="text-4xl font-black text-white italic tracking-tighter mb-6 group-hover:text-primary transition-colors">
                        {region.region}
                      </h3>
                      {region.detail && (
                        <p className="text-white/50 font-rosario text-sm uppercase tracking-[0.25em] font-bold leading-relaxed">
                          {region.detail}
                        </p>
                      )}
                    </div>
                    {/* Hover Glow */}
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
