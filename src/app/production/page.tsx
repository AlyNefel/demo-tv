"use client";

import React, { useRef, useState } from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { fictionSeries } from '@/lib/fiction-series';
import { Play, Film, Clapperboard, Users, Globe } from 'lucide-react';

const stats = [
  { value: "8", label: "Original Series", icon: Film },
  { value: "3", label: "Broadcast Channels", icon: Globe },
  { value: "50+", label: "Production Staff", icon: Users },
  { value: "4K", label: "Production Quality", icon: Clapperboard },
];

const productionPhases = [
  { title: "Development", desc: "Every series begins with a vision. Our development team works closely with writers to craft scripts that push boundaries and challenge conventions." },
  { title: "Pre-Production", desc: "Meticulous planning, location scouting, casting, set design, and VFX pre-visualization ensure every frame is perfected before cameras roll." },
  { title: "Production", desc: "State-of-the-art cameras, lighting rigs, and an expert crew bring the script to life with cinematic precision and artistic daring." },
  { title: "Post-Production", desc: "Award-winning editors, colorists, and VFX artists transform raw footage into the polished, breathtaking productions our audiences expect." },
];

export default function ProductionPage() {
  const [activeShow, setActiveShow] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black min-h-screen overflow-hidden">

        {/* Hero */}
        <section ref={heroRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
            <Image src="/canvas/15.png" fill alt="Production" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </motion.div>
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
                Our Productions
              </span>
              <h1 className="text-6xl md:text-9xl font-heading font-black text-white italic tracking-tighter leading-none mb-6">
                PRODUC<span className="text-primary text-glow-pink">TION</span>
              </h1>
              <div className="w-32 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                From ancient epics to science fiction futures — every frame is a universe built from passion and precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 border-y border-white/5 bg-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-heading font-black text-white italic tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Fiction Series Grid */}
        <section className="py-32 px-6 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-heading font-black text-white italic tracking-tighter mb-4">
                FICTION <span className="text-primary">SERIES</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink mb-6" />
              <p className="text-lg text-white/60 max-w-xl mx-auto">
                Our original fiction series are epic multi-season productions spanning genres from ancient history to far-future science fiction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fictionSeries.map((series, i) => (
                <motion.div
                  key={series.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setActiveShow(activeShow === series.id ? null : series.id)}
                  className="group relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(255,204,233,0.15)]"
                >
                  <Image
                    src={`/Fiction Series Production/${series.img}`}
                    fill
                    alt={series.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Smoke Effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none mix-blend-screen">
                    <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/60 rounded-full animate-[smoke_5s_infinite_ease-in-out]" style={{ animationName: 'smoke' }} />
                    <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-pink-500/50 rounded-full" style={{ animation: 'smoke 6s infinite ease-in-out 1.5s' }} />
                  </div>

                  <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.25em] mb-2">
                      {series.year} · Fiction Series
                    </span>
                    <h3 className={`text-xl text-white leading-tight mb-1 ${series.fontClass}`}>{series.title}</h3>
                    {series.titleSecondary && (
                      <span className={`text-xs text-white/70 ${series.secondaryFontClass}`}>{series.titleSecondary}</span>
                    )}
                    <p className="text-xs text-white/60 mt-3 leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {series.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-pink">
                        <Play size={12} fill="white" className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Explore</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Pipeline */}
        <section className="py-24 px-6 bg-black/60 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image src="/canvas/34.png" fill alt="" className="object-cover" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
                HOW WE <span className="text-primary">CREATE</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productionPhases.map((phase, i) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 group transition-all duration-500"
                >
                  <div className="text-6xl font-heading font-black text-primary/20 italic mb-4 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tighter mb-3 group-hover:text-primary transition-colors">{phase.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{phase.desc}</p>
                  {/* Connector line */}
                  {i < productionPhases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          @keyframes smoke {
            0% { transform: translateY(20%) scale(1); opacity: 0; filter: blur(10px); }
            50% { opacity: 0.7; filter: blur(15px); }
            100% { transform: translateY(-80%) scale(2); opacity: 0; filter: blur(25px); }
          }
        `}</style>
      </main>
    </>
  );
}
