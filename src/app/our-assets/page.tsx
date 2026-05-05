"use client";

import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const assets = [
  {
    title: "Capsule: Our Scientific Quarterly Magazine",
    subtitle: "Print & Digital Publication",
    desc: "Monarch TV Capsule Magazine, published quarterly in print and online, connects a global community of explorers, scientists, and enthusiasts. Featuring stunning photos and insightful articles, it shares remarkable discoveries, research, and adventures, inspiring and educating readers. Symbolizing a space, abyssal, and time capsule, it aims to be a vessel for knowledge, exploration, and the preservation of our planet's wonders.",
    image: "/assets/Capsule our Scientific Quaterly Magazine.png",
    tag: "MEDIA",
    color: "from-blue-950/80",
  },
  {
    title: "The Carthaginians: Our American Football Franchise",
    subtitle: "Sports & Entertainment",
    desc: "Representing the strength and strategic brilliance of ancient Carthage, The Carthaginians American Football franchise brings elite-level competition and community spirit to the global stage. Named after history's most fearless military strategists, our franchise embodies resilience, tactical excellence, and the unbreakable will to dominate the field — carrying the legacy of Hannibal Barca into every play.",
    image: "/assets/The Carthaginians  our American Football Franchise.png",
    tag: "SPORTS",
    color: "from-rose-950/80",
  },
];

function AssetSection({ asset, index }: { asset: typeof assets[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);
  const isEven = index % 2 === 0;

  return (
    <section ref={ref} className="min-h-[85vh] w-full flex items-center justify-center relative overflow-hidden py-24">
      {/* Background glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? 'from-blue-900/10 to-transparent' : 'from-transparent to-rose-900/10'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Image */}
        <motion.div
          style={{ opacity }}
          className={`relative h-[60vh] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-colors duration-500 shadow-[0_0_60px_rgba(255,204,233,0.08)] group ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
        >
          <motion.div style={{ y }} className="absolute inset-[-15%] w-[130%] h-[130%]">
            <Image src={asset.image} fill alt={asset.title} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className={`absolute inset-0 bg-gradient-to-t ${asset.color} to-transparent opacity-70`} />
          </motion.div>
          {/* Tag */}
          <div className="absolute top-6 left-6 z-20">
            <span className="px-3 py-1 bg-primary/20 border border-primary/40 text-primary text-[10px] font-black tracking-[0.25em] uppercase rounded backdrop-blur-sm">
              {asset.tag}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className={`flex flex-col justify-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}
        >
          <span className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3">{asset.subtitle}</span>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-white italic tracking-tighter mb-6 leading-tight">
            {asset.title.split(':')[0]}
            {asset.title.includes(':') && (
              <><span className="text-primary">:</span>{asset.title.split(':').slice(1).join(':')}</>
            )}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full glow-pink mb-8" />
          <p className="text-lg text-white/70 leading-relaxed font-medium">
            {asset.desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function OurAssetsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black min-h-screen overflow-hidden">

        {/* Hero */}
        <section ref={heroRef} className="relative h-[75vh] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
            <Image src="/canvas/23.png" fill alt="Our Assets" className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />
          </motion.div>
          <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
                Portfolio
              </span>
              <h1 className="text-6xl md:text-9xl font-heading font-black text-white italic tracking-tighter leading-none mb-6">
                OUR <span className="text-primary text-glow-pink">ASSETS</span>
              </h1>
              <div className="w-32 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Beyond the screen — Monarch TV Studios extends its reach into media, publishing, and the sporting world.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Assets Sections */}
        <div className="flex flex-col">
          {assets.map((asset, i) => (
            <AssetSection key={asset.title} asset={asset} index={i} />
          ))}
        </div>

        {/* Coming Soon */}
        <section className="py-24 px-6 bg-black/80 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
                Expanding Horizons
              </span>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter mb-6">
                MORE <span className="text-primary">COMING SOON</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
              <p className="text-xl text-white/60 leading-relaxed">
                Monarch TV Studios is continuously expanding its portfolio of assets. From new media ventures to lifestyle brands, we are building an empire one vision at a time.
              </p>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}
