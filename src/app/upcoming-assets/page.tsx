"use client";

import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from "@/components/Footer";

const assets = [
  {
    id: 1,
    title: "Radio Astronomy Observatory",
    year: "2027",
    subtitle: "Ksar of DOUIRET Tataouine-Tunisia",
    description: "The Radio Astronomy Observatory Project will be located in the historic Ksar of Douiret, Tataouine, in southern Tunisia. Designated as an INTERNATIONAL DARK SKY PARK, the site boasts exceptionally pristine skies ideal for astronomical observation and universe research. This innovative project will serve as a premier destination that seamlessly combines scientific exploration with tourism, offering visitors a unique opportunity to engage with the cosmos in a pristine, environmentally protected setting.",
    image: "/upcoming assets/Radio Astronomy Observatory.png",
    titleStyle: "outlined",
    layout: "left"
  },
  {
    id: 2,
    title: "Souvenir Shops Chain",
    year: "2028",
    subtitle: "Duty Free Airports-Global",
    description: "To promote our mascot \"Bruru,\" the abyssal fish, we are launching a global chain of duty-free souvenir shops at major airports worldwide. These shops will feature exclusive merchandise and gadgets inspired by our documentary channel, Monarch TV Channel. Visitors can explore a wide range of space-themed items like telescopes and cameras, archaeology-inspired souvenirs, and oceanography gadgets that highlight the wonders of the deep sea, space, and history, creating an engaging and educational experience for travelers.",
    image: "/upcoming assets/Souvenir Shops  Chain.png",
    titleStyle: "pink",
    layout: "right"
  },
  {
    id: 3,
    title: "Giant Aquarium",
    year: "2028",
    subtitle: "El Haouaria Nabeul-Tunisia",
    description: "With the support of our shareholders, partners, and sponsors, we are committed to establishing a state-of-the-art Giant Aquarium in Nabeul, North-East Tunisia, mirroring the renowned Atlanta Aquarium in Georgia, USA. This premier facility will serve as a hub for advanced scientific research in oceanography and marine biology, as well as a captivating tourist attraction. Additionally, it will enable us to produce a wide array of documentaries and scientific reality shows for our flagship channel, Monarch TV Channel, elevating our content offerings and reinforcing our position as a leader in educational and entertainment media.",
    image: "/upcoming assets/Giant Aquarium.png",
    titleStyle: "filled-outlined",
    layout: "left"
  }
];

const AssetCard = ({ asset, index }: { asset: typeof assets[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col ${asset.layout === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 py-48 px-6 md:px-20 min-h-screen bg-black relative`}
    >
      {/* Compact Image Container - Matching ShowCard Size */}
      <div className="w-full lg:w-1/3 relative aspect-[2/3] max-w-[320px] mx-auto rounded-[2rem] overflow-hidden group border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-muted transition-all duration-700 hover:border-primary/40">
        <div className="absolute inset-0">
          <Image 
            src={asset.image} 
            fill 
            alt={asset.title} 
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            priority={index === 0}
          />
        </div>
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Pink Smoke Overlay on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none mix-blend-screen z-10">
          <div className="absolute bottom-[-10%] right-[-10%] w-full h-1/2 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
        </div>

        {/* Floating Year Label */}
        <div className="absolute top-8 left-8 z-20">
          <span className="px-5 py-2 bg-primary/20 backdrop-blur-md text-[12px] font-black uppercase tracking-[0.3em] text-primary border border-primary/40 rounded-full glow-pink">
            Horizon {asset.year}
          </span>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3 space-y-10">
        <div className="space-y-4">
          <h2 
            className={`text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-[0.85] italic
              ${asset.titleStyle === 'outlined' ? 'text-transparent [-webkit-text-stroke:1px_white] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]' : ''}
              ${asset.titleStyle === 'pink' ? 'text-primary text-glow-pink' : ''}
              ${asset.titleStyle === 'filled-outlined' ? 'text-white [-webkit-text-stroke:1px_var(--primary)] drop-shadow-[0_0_20px_rgba(255,204,233,0.3)]' : ''}
            `}
          >
            {asset.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-rosario font-bold text-white/60 italic tracking-tight">
            {asset.subtitle}
          </h3>
          <div className="w-24 h-2 bg-primary rounded-full glow-pink" />
        </div>

        <p className="text-xl md:text-2xl font-rosario text-white/70 leading-relaxed font-light italic">
          {asset.description}
        </p>

        <div className="pt-8">
           <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-primary/40 transition-all cursor-default">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse glow-pink" />
              <span className="text-sm font-black uppercase tracking-[0.4em] text-white/60">Coming Soon</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function UpcomingAssets() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
          <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[1000px] h-[1000px] bg-pink-600/10 rounded-full blur-[150px]" />
        </div>

        {/* Simplified Cinematic Header */}
        <div className="max-w-7xl mx-auto px-6 pt-48 pb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-[12rem] font-nosifer text-primary text-glow-pink tracking-tighter uppercase mb-8 leading-[0.75]">
              FUTURE <br /><span className="text-white">HORIZONS</span>
            </h1>
            <div className="w-48 h-2 bg-primary mx-auto rounded-full glow-pink mb-12" />
            <p className="text-2xl text-white/50 max-w-3xl mx-auto italic font-rosario">
              "Exploring the intersection of science, tourism, and global heritage through ambitious large-scale infrastructure projects."
            </p>
          </motion.div>
        </div>

        {/* Assets Section */}
        <div className="relative z-10 pb-48">
          {assets.map((asset, index) => (
            <AssetCard key={asset.id} asset={asset} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
